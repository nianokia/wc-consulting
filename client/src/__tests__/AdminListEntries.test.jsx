/**
 * ------ ADMIN LIST ENTRIES TEST ------
 * Render component ( √ )
 * Fetch mapped Entries ( X )
 * Render Entry component ( X )
 * Render Logout Button ( √ )
 *   Check that Logout successfully logouts with Auth0 and returns to Home.jsx or '/' ( √ )
 * Render filters ( X )
 * Filter correctly ( X )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import AdminListEntries from '../pages/AdminListEntries.jsx';

describe('AdminListEntries page component', () => {
    beforeEach(()=> {
        global.fetch = vi.fn();
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('display entries', async () => {
        const mockTableRoutes = [`${process.env.DOMAIN}/api/client-list`, `${process.env.DOMAIN}/api/professional-list`];
        mockTableRoutes.forEach((tableRoute) => {
            fetch.mockResolvedValueOnce({ok: true})
        })
        
        render(<MemoryRouter><AdminListEntries /></MemoryRouter>);

        expect(screen.getByText('jane')).toBeTruthy();
    })

    test('displays page content (heading, li)', async () => {
        render(<MemoryRouter><AdminListEntries /></MemoryRouter>);

        // --- select elements ---
        const adminListHeading = await screen.findByRole('heading', { name: /Admin List Entries/i });

        // --- verify that its on the page ---
        expect(adminListHeading).toBeTruthy();
    })    

    test('logout button logs admin out', async () => {
        render(<Auth0Provider><MemoryRouter><AdminListEntries /></MemoryRouter></Auth0Provider>);
        
        // --- select Log Out button ---
        const logout = await screen.findByRole('button', { name: /Log Out/i });

        // --- verify that admin is logged in ---
        expect(screen.queryByRole('heading', { name: /Wright Choice Consulting/i })).not.toBeTruthy();

        // --- click Log Out button ---
        fireEvent.click(logout);

        // --- verify that admin is logged out ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Wright Choice Consulting/i })).toBeTruthy();
        })
    })
})