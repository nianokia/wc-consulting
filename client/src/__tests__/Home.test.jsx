/**
 * ------ HOME TEST ------
 * Render Video (  )
 * Render Services and About buttons (  )
 *  Check that buttons redirect properly (  )
 * Render Admin Login button (  )
 *  Check that Login redirects properly and logs user in (  )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from '../pages/Home.jsx';

// --- mock the useAuth0 hook ---
vi.mock("@auth0/auth0-react", () => ({
    useAuth0: vi.fn(),
}));

describe('Home page component', () => {
    test('display Home page contents (headings, video)', async () => {
        // --- declare the return value from the mock hook ---
        useAuth0.mockReturnValue({
            isAuthenticated: false,
            isLoading: false,
            loginWithRedirect: vi.fn()
        })
        
        render(<MemoryRouter><Home /></MemoryRouter>);

        // --- select elements ---
        const backgroundHeading = screen.getByText('Background Information addressing the What? and Why?');

        // --- verify ---
        expect(backgroundHeading).toBeTruthy();
    })

    test('link buttons redirect properly', async () => {
        render(<MemoryRouter><Home /></MemoryRouter>);

        // ------ SERVICES BUTTON ------
        // --- select Services button ---
        const servicesButton = await screen.findByRole('button', { name: /Services/i });
        // --- verify Services page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /Services/i })).not.toBeTruthy();
        // --- click Services button ---
        fireEvent.click(servicesButton);
        // --- verify button redirects to Services page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Services/i })).toBeTruthy();
        })

        // ------ ABOUT BUTTON ------
        // --- select About button ---
        const aboutButton = await screen.findByRole('button', { name: /About/i });
        // --- verify About page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /About/i })).not.toBeTruthy();
        // --- click About button ---
        fireEvent.click(aboutButton);
        // --- verify button redirects to About page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /About/i })).toBeTruthy();
        })
    })

    test('admin login button logs user in and redirects to AdminListEntries page', async () => {
        render(<MemoryRouter><Home /></MemoryRouter>);

        // --- import isAuthenticated Auth0 method ---
        const { isAuthenticated } = useAuth0();

        // --- select admin login button ---
        const login = await screen.findByRole('button', { name: /Admin Login/i });
        // --- verify AdminListEntries page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /Admin List Entries/i })).not.toBeTruthy();
        // --- click Admin Login button ---
        fireEvent.click(login);
        
        if (isAuthenticated) {
            // --- verify button redirects to AdminListEntries page if user authenticated ---
            expect(screen.findByRole('heading', { name: /Admin List Entries/i })).toBeTruthy();
        } else {
            // --- verify button redirects to Home page if user not authenticated ---
            expect(screen.findByRole('heading', { name: /Background Information addressing the What? and Why?/i })).toBeTruthy();
        }
    })
})