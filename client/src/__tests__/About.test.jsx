/**
 * ------ ABOUT TEST ------
 * Render comp ( √ )
 * Render Image ( √ )
 * Render Contact Button ( √ )
 * Check that Contact button redirects to ContactHome.jsx ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import About from '../pages/About.jsx';

describe('About page component', () => {
    test('displays page content (img, heading)', async () => {
        render(<MemoryRouter><About /></MemoryRouter>);

        // --- select elements ---
        const headshot = document.querySelector('img');
        const aboutHeading = await screen.findByRole('heading', { name: 'About' });

        // --- verify that features exists on page ---
        expect(headshot.alt).toBeTruthy('Headshot of Gregory B Wright in front of a black background. He\'s a black man wearing glasses, a black blazer, a white buttondown shirt, and a paid navy and blue tie.');
        expect(headshot.src).toBeTruthy('../headshot.jpeg');
        expect(aboutHeading).toBeTruthy();
    })

    test('contact button routes correctly', async () => {
        render(<MemoryRouter><About /></MemoryRouter>);

        // --- select button ---
        const contactButton = await screen.findByRole('button', { name: 'Contact' });

        // --- verify that 'Contact' content is not currently on the page ---
        expect(screen.queryByRole('heading', { name: 'Contact' })).not.toBeTruthy();

        // click button
        fireEvent.click(contactButton);

        // --- verify that content from Contact page displays after button click ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: 'Contact' })).toBeTruthy();
        })  
    })
})