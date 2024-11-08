/**
 * ------ RATES & INSURANCE TEST ------
 * Render Heading ( X )
 * Render Contact & FAQs buttons ( √ )
 * Check that buttons redirect properly ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import RatesInsurance from '../pages/RatesInsurance.jsx';

describe('RatesInsurance page component', () => {
    test('displays headings', async () => {
        render(<MemoryRouter><RatesInsurance /></MemoryRouter>);

        // --- select elements ---
        const ratesInsuranceHeading = await screen.findByRole('heading', { name: /Rates & Insurance/i });

        // --- ASSERT ---
        expect(ratesInsuranceHeading).toBeTruthy();
    })

    test('buttons redirect correctly', async () => {
        render(<MemoryRouter><RatesInsurance /></MemoryRouter>);

        // ------ CONTACT BUTTON ------
        // --- select Contact button ---
        const contactButton = await screen.findByRole('button', { name: /Contact/i });
        // --- verify Contact page contents don't currently exist ---
        expect(screen.queryByRole('heading', { name: /Contact/i })).not.toBeTruthy();
        // --- click Contact button ---
        fireEvent.click(contactButton);
        // --- verify button redirects to Contact page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Contact/i })).toBeTruthy();
        })

        // ------ FAQS BUTTON ------
        // --- select FAQs button ---
        const faqButton = await screen.findByRole('button', { name: /FAQs/i });
        // --- verify Faqs page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /FAQs/i })).not.toBeTruthy();
        // --- click FAQ button ---
        fireEvent.click(faqButton);
        // --- verify button redirects to FAQ page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /FAQs/i })).toBeTruthy();
        })
    })
})