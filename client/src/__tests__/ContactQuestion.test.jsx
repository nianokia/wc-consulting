/**
 * ------ CONTACT QUESTION TEST ------
 * Render Heading ( √ )
 * Render Client & Professional buttons ( √ )
 * Check that buttons redirect to correct components ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import ContactQuestion from '../components/ContactQuestion.jsx';

describe('Contact Question page component', () => {
    test('display heading', async () => {
        render(<MemoryRouter><ContactQuestion /></MemoryRouter>);

        // --- select heading ---
        const question = await screen.findByRole('heading', { name: /Are you a client or professional?/i});

        // --- verify heading exists on the page ---
        expect(question).toBeTruthy();
    })

    test('buttons render and route correctly', async () => {
        render(<MemoryRouter><ContactQuestion /></MemoryRouter>);

        // ------ CLIENT FORM BUTTON ------
        // --- select Contact button ---
        const clientForm = await screen.findByRole('button', { name: /Client/i });
        // --- verify Client Form contents don't currently exist ---
        expect(screen.queryByRole('heading', { name: /Client Form/i })).not.toBeTruthy();
        // --- click Client Form button ---
        fireEvent.click(clientForm);
        // --- verify button displays Client Form on the page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Client Form/i })).toBeTruthy();
        })

        // ------ PROFESSIONAL FORM BUTTON ------
        // --- select Professional Form button ---
        const professionalForm = await screen.findByRole('button', { name: /Professional/i });
        // --- verify Professional Form contents don't currently exist ---
        expect(screen.queryByRole('heading', { name: /Professional Form/i })).not.toBeTruthy();
        // --- click Professional Form button ---
        fireEvent.click(professionalForm);
        // --- verify button displays Professional Form on the page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Professional Form/i })).toBeTruthy();
        })
    })
})