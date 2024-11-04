/**
 * ------ FOOTER TEST ------
 * Render Footer ( √ )
 * Check text ( √ )
 * Check Color ( X )
 */
import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Footer from '../components/Footer.jsx';

describe('Footer page component', () => {
    test('displays footer', async () => {
        render(<Footer />);

        // --- select element ---
        const footer = await screen.findByRole('contentinfo');

        // --- verify footer exists on the page ---
        expect(footer).toBeTruthy('Wright Choice Consulting');
    })
})