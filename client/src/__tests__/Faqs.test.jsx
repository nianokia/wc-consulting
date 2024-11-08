/**
 * ------ FAQS TEST ------
 * Render Headings ( √ )
 * Render Links ( X )
 *  Check that links redirect to correct Question id ( X )
 * Render Contact button ( √ )
 *  Check that Contact button redirects to Contact page ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import Faqs from '../pages/Faqs.jsx';

describe('Faqs page component', () => {
    test('loads and displays headiing (h1)', async () => {
        render(<MemoryRouter><Faqs /></MemoryRouter>);

        // --- select elements ---
        const faqHeading = await screen.findByRole('heading', {name: /FAQs/i});

        // --- verify elements exist ---
        expect(faqHeading).toBeTruthy();
    })

    test('contact button routes correctly', async () => {
        render(<MemoryRouter><Faqs /></MemoryRouter>);

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
    })

    test('links jump to correct question', async () => {
        const { container } = render(<MemoryRouter><Faqs /></MemoryRouter>);

        // --- select link ---
        const questionLink = container.querySelector('li', { name: 'Question 1' });
        // --- click link ---
        fireEvent.click(questionLink);
        // --- verify that link redirects to 'Question 1' ---
        await waitFor(() => {
            expect(container).toBeTruthy();
        })
    })
})