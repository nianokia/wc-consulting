/**
 * ------ PROFESSIONAL FORM TEST ------
 * Render all labels ( √ )
 * Render all inputs ( √ )
 * Render Submit button ( √ )
 *  Fetch all input values ( √ )
 *  POST/ SEND to server's database ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ProfessionalForm from '../components/ProfessionalForm.jsx';
import { MemoryRouter } from "react-router-dom";

describe('ProfessionalForm page component', () => {
    beforeEach(()=> {
        global.fetch = vi.fn();
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('display Professional Form labels, inputs, and button', async () => {
        render(<ProfessionalForm />);

        // --- select labels ---
        const firstNameLabel = await screen.findByLabelText(/First Name/i);
        const lastNameLabel = await screen.findByLabelText(/Last Name/i);
        const phoneLabel = await screen.findByLabelText(/Phone/i);
        const emailLabel = await screen.findByLabelText(/Email/i); 
        const commentLabel = await screen.findByLabelText(/Comment/i);

        // --- select inputs ---
        const firstNameInput = await screen.findByLabelText(/First Name/i, { selector: 'input' });
        const lastNameInput = await screen.findByLabelText(/Last Name/i, { selector: 'input' });
        const phoneInput = await screen.findByLabelText(/Phone/i, { selector: 'input' });
        const emailInput = await screen.findByLabelText(/Email/i, { selector: 'input' });
        const commentInput = await screen.findByLabelText(/Comment/i, { selector: 'textarea' });

        // --- verify elements exist on the page ---
        expect(firstNameLabel).toBeTruthy();
        expect(firstNameInput).toBeTruthy();
        expect(lastNameLabel).toBeTruthy();
        expect(lastNameInput).toBeTruthy();
        expect(phoneLabel).toBeTruthy();
        expect(phoneInput).toBeTruthy();
        expect(emailLabel).toBeTruthy();
        expect(emailInput).toBeTruthy();
        expect(commentLabel).toBeTruthy();
        expect(commentInput).toBeTruthy();
    })

    test('submit button sends form data to database', async () => {
        fetch.mockResolvedValueOnce({ok: true})

        render(<MemoryRouter><ProfessionalForm /></MemoryRouter>);

        const firstNameInput = await screen.findByLabelText(/First Name/i, { selector: 'input' });
        fireEvent.change(firstNameInput, {target: {value: 'Bob'}});
        expect(screen.getByDisplayValue('Bob')).toBeTruthy();

        const lastNameInput = await screen.findByLabelText(/Last Name/i, { selector: 'input' });
        fireEvent.change(lastNameInput, {target: {value: 'Ryan'}});
        expect(screen.getByDisplayValue('Ryan')).toBeTruthy();

        const phoneInput = await screen.findByLabelText(/Phone/i, { selector: 'input' });
        fireEvent.change(phoneInput, { target: {value: '777-555-3333'} });
        expect(screen.getAllByDisplayValue('777-555-3333')).toBeTruthy();

        const emailInput = await screen.findByLabelText(/Email/i, { selector: 'input' });
        fireEvent.change(emailInput, {target: {value: 'bob@test.com'}});
        expect(screen.getByDisplayValue('bob@test.com')).toBeTruthy();

        const commentInput = await screen.findByLabelText(/Comment/i, { selector: 'textarea' });
        fireEvent.change(commentInput, { target: {value: 'Hello World'} });
        expect(screen.getByDisplayValue('Hello World')).toBeTruthy();

        // --- select submit button ---
        const submit = await screen.findByRole('button', { name: /Submit/i });
        // --- click Submit button ---
        fireEvent.click(submit);
        // --- verify submission ---
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(`${process.env.DOMAIN}/contact/professional/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                first_name: 'Bob',
                last_name: 'Ryan',
                phone: '777-555-3333',
                email: 'bob@test.com',
                comment: 'Hello World'
                }),
            })
        })
    })
})