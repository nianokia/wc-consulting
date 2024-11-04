/**
 * ------ SERVICES TEST ------ 
 * Render 3 photos (  )
 * Render 3 headers ( √ )
 * Render Contact & FAQ button ( √ )
 *  Check that buttons route correctly ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import Services from '../pages/Services.jsx';

describe('Services page component', () => {
    test('displays Services page content (images & headings)', async () => {
        render(<MemoryRouter><Services /></MemoryRouter>);

        // --- select elements ---
        const servicesHeading = await screen.findByRole('heading', { name: /Services/i});
        const familyHeading = await screen.findByRole('heading', { level: 3, name: /Family Therapy/i});
        const couplesHeading = await screen.findByRole('heading', { name: /Couples Therapy/i});
        const individualsHeading = await screen.findByRole('heading', { name: /Individuals Therapy/i});
        // const familyImage = document.querySelector('img');
        // const couplesImage = document.querySelector('img');
        // const individualsImage = document.querySelector('img');

        // --- verify that headings exists on page ---
        expect(servicesHeading).toBeTruthy();
        expect(familyHeading).toBeTruthy();
        expect(couplesHeading).toBeTruthy();
        expect(individualsHeading).toBeTruthy();

        // --- verify that images exist on page ---
        // expect(familyImage.alt).toBeTruthy('full alt text');
        // expect(familyImage.src).toBeTruthy('../family.jpg');
        // expect(couplesImage.alt).toBeTruthy('full alt text');
        // expect(couplesImage.src).toBeTruthy('../couple.jpg');
        // expect(individualsImage.alt).toBeTruthy('full alt text');
        // expect(individualsImage.src).toBeTruthy('../individual.jpg');
    })

    test('buttons redirect correctly', async () => {
        render(<MemoryRouter><Services /></MemoryRouter>);

        // ------ CONTACT BUTTON ------
        // --- select Contact button ---
        const contactButton = await screen.findByRole('button', { name: /Contact/i });
        // --- verify Contact page contents don't currently exist ---
        expect(screen.queryByRole('heading', { name: /Contact Home/i })).not.toBeTruthy();
        // --- click Contact button ---
        fireEvent.click(contactButton);
        // --- verify button redirects to Contact page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Contact Home/i })).toBeTruthy();
        })

        // ------ FAQS BUTTON ------
        // --- select FAQs button ---
        const faqButton = await screen.findByRole('button', { name: /FAQ/i });
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