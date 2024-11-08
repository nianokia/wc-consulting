/**
 * ------ HEADER TEST ------
 * Render Logo ( √ )
 * Render Company name/ tagline text ( √ )
 * Render Navbar ( √ )
 * Check that Links redirect properly ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import Header from '../components/Header.jsx';

describe('Header component', () => {
    test('displays content', async () => {
        render(<MemoryRouter><Header /></MemoryRouter>);

        // --- select elements ---
        const logo = document.querySelector('img');
        const businessHeading = await screen.findByRole('heading', { level: 4 });
        const tagline = await screen.findByRole('heading', { level: 6 });

        // --- test image display and alt text ---
        expect(logo.alt).toBeTruthy('Wright Choice Consulting logo');
        expect(logo.src).toBeTruthy('../logo.png');
        // --- test text in headings ---
        expect(businessHeading).toBeTruthy('Wright Choice Consulting');
        expect(tagline).toBeTruthy('Family Therapy');    
    })

    test('links navigate to their respective pages', async () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        
        // ------ ABOUT LINK ------
        // --- verify that 'About' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'Gregory B Wright LPCS' })).not.toBeTruthy();
        // --- click 'About' link ---
        fireEvent.click(screen.getByRole('link', { name: /About/i }));
        // --- verify that link redirects to 'About' page by testing if 'About' heading is on the page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'Gregory B Wright LPCS' })).toBeTruthy();
        })

        // ------ SERVICES LINK ------
        // --- verify that 'Services' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'Services' })).not.toBeTruthy();
        // --- click 'Services' link ---
        fireEvent.click(screen.getByRole('link', { name: /Services/i }));
        // --- verify that link redirects to 'Services' page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'Services' })).toBeTruthy();
        })

        // ------ RATES/INSURANCE LINK ------
        // --- verify that 'RatesInsurance' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'Rates' })).not.toBeTruthy();
        // --- click 'RatesInsurance' link ---
        fireEvent.click(screen.getByRole('link', { name: /Rates\/ Insurance/i }));
        // --- verify that link redirects to 'RatesInsurance' page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'Rates' })).toBeTruthy();
        })

        // ------ FAQS LINK ------
        // --- verify that 'Faqs' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'FAQs' })).not.toBeTruthy();
        // --- click 'Faqs' link ---
        fireEvent.click(screen.getByRole('link', { name: /FAQs/i }));
        // --- verify that link redirects to 'Faqs' page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'FAQs' })).toBeTruthy();
        })

        // ------ FIRST SESSION LINK ------
        // --- verify that 'First Session' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'First Session' })).not.toBeTruthy();
        // --- click 'First Session' link ---
        fireEvent.click(screen.getByRole('link', { name: /First Session/i }));
        // --- verify that link redirects to 'First Session' page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'First Session' })).toBeTruthy();
        })

        // ------ CONTACT LINK ------
        // --- verify that 'ContactHome' page content is not on the page ---
        expect(screen.queryByRole('heading', { name: 'Contact Home' })).not.toBeTruthy();
        // --- click 'Contact' link ---
        fireEvent.click(screen.getByRole('link', { name: /Contact/i }));
        // --- verify that link redirects to 'ContactHome' page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'Contact Home' })).toBeTruthy();
        })
    })
})