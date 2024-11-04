/**
 * ------ CONTACT HOME TEST ------
 * Render component (  )
 * Render div containing business information (  )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import ContactHome from '../pages/ContactHome.jsx';

describe('ContactHome page component', () => {
    test('display Contact page contents', async () => {
        const { container } = render(<MemoryRouter><ContactHome /></MemoryRouter>);

        // --- select elements ---
        const contactHeading = await screen.findByRole('heading', { name: /Contact Home/i });
        const hoursSection = container.querySelector('span', { name: /Hours/i });

        // --- verify elements exists on the page ---
        expect(contactHeading).toBeTruthy();
        expect(hoursSection).toBeTruthy();
    })
})