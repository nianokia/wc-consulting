/**
 * ------ FIRST SESSION TEST ------
 * Render Session info ( √ )
 * Render FAQs button ( √ )
 *  Check that button redirects to Faqs.jsx ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import FirstSession from '../pages/FirstSession.jsx';

describe('FirstSession page component', () => {
    test('displays First Session page content', () => {
        const { container } = render(<MemoryRouter><FirstSession /></MemoryRouter>);

        // --- select elements ---
        const firstSessionContent = container.querySelector('.first-session-details');

        // --- verify element exists on page ---
        expect(firstSessionContent).toBeTruthy();
    })

    test('FAQs button renders and redirects to FAQs page', async () => {
        const { container } = render(<MemoryRouter><FirstSession /></MemoryRouter>);

        // --- select FAQs button ---
        const faqsButton =  container.querySelector('button', { name: /FAQs/i });
        // --- verify Faqs page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /FAQs/i })).not.toBeTruthy();
        // --- click FAQ button ---
        fireEvent.click(faqsButton);
        // --- verify button redirects to FAQ page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /FAQs/i })).toBeTruthy();
        })
    })
})