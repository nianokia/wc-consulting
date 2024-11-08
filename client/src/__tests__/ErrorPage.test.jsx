/**
 * ------ ERROR PAGE TEST ------
 * Render Heading ( √ )
 */
import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage.jsx';

describe('ErrorPage page component', () => {
    test('loads and displays heading (h1)', async () => {
        render(<MemoryRouter><ErrorPage /></MemoryRouter>);

        // --- select heading ---
        const errorHeading = await screen.findByRole('heading', { name: /404 Not Found/i});

        // --- verify heading exists on page ---
        expect(errorHeading).toBeTruthy();
    })
})