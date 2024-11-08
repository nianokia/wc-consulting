/**
 * ------ CLIENT FORM TEST ------
 * Render all labels ( √ )
 * Render all inputs ( √ )
 * Render Submit button ( √ )
 *  Fetch all input values ( √ )
 *  POST/ SEND to server's database ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi, afterAll, afterEach } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import ClientForm from '../components/ClientForm.jsx';

describe('Client form page component', () => {
    beforeEach(()=> {
        global.fetch = vi.fn();
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('display Client Form labels, inputs, and button', async () => {
        render(<MemoryRouter><ClientForm /></MemoryRouter>);

        // --- select labels ---
        const firstNameLabel = await screen.findByLabelText(/First Name/i);
        const lastNameLabel = await screen.findByLabelText(/Last Name/i);
        const emailLabel = await screen.findByLabelText(/Email/i);
        const typeLabel = await screen.findByLabelText(/Type of Therapy/i);
        const issueLabel = await screen.findByLabelText(/Issue/i);
        const ageLabel = await screen.findByLabelText(/Age/i);
        const raceLabel = await screen.findByLabelText(/Race\/ Ethnicity/i);
        const genderLabel = await screen.findByLabelText(/Gender/i);
        const commentLabel = await screen.findByLabelText(/Comment/i);

        // --- select inputs ---
        const firstNameInput = await screen.findByLabelText(/First Name/i, { selector: 'input' });
        const lastNameInput = await screen.findByLabelText(/Last Name/i, { selector: 'input' });
        const emailInput = await screen.findByLabelText(/Email/i, { selector: 'input' });
        const typeInput = await screen.findByLabelText(/Type of Therapy/i, { selector: 'select' });
        const issueInput = await screen.findByLabelText(/Issue/i, { selector: 'select' });
        const ageInput = await screen.findByLabelText(/Age/i, { selector: 'input' });
        const raceInput = await screen.findByLabelText(/Race\/ Ethnicity/i, { selector: 'select' });
        const genderInput = await screen.findByLabelText(/Gender/i, { selector: 'select' });
        const commentInput = await screen.findByLabelText(/Comment/i, { selector: 'textarea' });

        // --- verify elements exist on the page ---
        expect(firstNameLabel).toBeTruthy();
        expect(firstNameInput).toBeTruthy();
        expect(lastNameLabel).toBeTruthy();
        expect(lastNameInput).toBeTruthy();
        expect(emailLabel).toBeTruthy();
        expect(emailInput).toBeTruthy();
        expect(typeLabel).toBeTruthy();
        expect(typeInput).toBeTruthy();
        expect(issueLabel).toBeTruthy();
        expect(issueInput).toBeTruthy();
        expect(ageLabel).toBeTruthy();
        expect(ageInput).toBeTruthy();
        expect(raceLabel).toBeTruthy();
        expect(raceInput).toBeTruthy();
        expect(genderLabel).toBeTruthy();
        expect(genderInput).toBeTruthy();
        expect(commentLabel).toBeTruthy();
        expect(commentInput).toBeTruthy();
    })

    test('submit button sends form data to database', async () => {
        fetch.mockResolvedValueOnce({ok: true})
        
        render(<MemoryRouter><ClientForm /></MemoryRouter>);

        const firstNameInput = await screen.findByLabelText(/First Name/i, { selector: 'input' });
        fireEvent.change(firstNameInput, {target: {value: 'Bob'}});
        expect(screen.getByDisplayValue('Bob')).toBeTruthy();

        const lastNameInput = await screen.findByLabelText(/Last Name/i, { selector: 'input' });
        fireEvent.change(lastNameInput, {target: {value: 'Ryan'}});
        expect(screen.getByDisplayValue('Ryan')).toBeTruthy();

        const emailInput = await screen.findByLabelText(/Email/i, { selector: 'input' });
        fireEvent.change(emailInput, {target: {value: 'bob@test.com'}});
        expect(screen.getByDisplayValue('bob@test.com')).toBeTruthy();

        const typeInput = await screen.findByLabelText(/Type of Therapy/i, { selector: 'select' });
        fireEvent.change(typeInput, {target: {value: 'family'}});
        console.log("Typeinput.value: ", typeInput.value);
        expect(typeInput.value).toBe('family');

        const issueInput = await screen.findByLabelText(/Issue/i, { selector: 'select' });
        fireEvent.change(issueInput, {target: {value: 'anxiety'}});
        expect(issueInput.value).toBe('anxiety');

        const ageInput = await screen.findByLabelText(/Age/i, { selector: 'input' });
        fireEvent.change(ageInput, {target: {value: '45'}});
        expect(screen.getByDisplayValue('45')).toBeTruthy();

        const raceInput = await screen.findByLabelText(/Race/i, { selector: 'select' });
        fireEvent.change(raceInput, {target: {value: 'white'}});
        expect(raceInput.value).toBe('white');

        const genderInput = await screen.findByLabelText(/Gender/i, { selector: 'select' });
        fireEvent.change(genderInput, {target: {value: 'man'}});
        expect(genderInput.value).toBe('man');

        // --- select submit button ---
        const submit = await screen.findByRole('button', { name: /Submit/i });
        // --- click Submit button ---
        fireEvent.click(submit);
        // --- verify submission ---
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(`${process.env.DOMAIN}/contact/client/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                first_name: 'Bob',
                last_name: 'Ryan',
                email: 'bob@test.com',
                type: 'family',
                issue: 'anxiety',
                age: '45',
                race: 'white',
                gender: 'man',
                comment: ''
                }),
            })
        })
    })
})