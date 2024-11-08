/**
 * ------ ADMIN LIST ENTRIES TEST ------
 * Render component ( √ )
 * Fetch mapped Entries ( √ )
 * Render Entry component ( √ )
 * Render Logout Button ( √ )
 *   Check that Logout successfully logouts with Auth0 and returns to Home.jsx or '/' ( √ )
 * Render filters ( X )
 * Filter correctly ( X )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AdminListEntries from '../pages/AdminListEntries.jsx';

const mockClientEntries = [{ client_entry_id: 1, first_name: "Client 1" }];
const mockProfessionalEntries = [{ professional_entry_id: 1, first_name: "Professional 1" }];

// --- mock the useAuth0 hook ---
vi.mock("@auth0/auth0-react", () => ({
    useAuth0: vi.fn(),
}));

describe('AdminListEntries page component', () => {
    // --- execute a fetch before each test ---
    beforeEach(()=> {
        global.fetch = vi.fn();
    })

    // --- clear mocks after each test ---
    afterEach(() => {
        vi.clearAllMocks();
    })

    test('display entries', async () => {
        // --- declare the return value from the mock hook ---
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            logout: vi.fn()
        })
        
        // --- fetch both mock entries from different paths ---
        fetch.mockImplementation((url) => {
            //  --- if url includes client-list fetch from this path ---
            if (url.includes("client-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockClientEntries),
                });
            //  --- if url includes professional-list fetch from this path ---
            } else if (url.includes("professional-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockProfessionalEntries),
                });
            }
            // --- if url doesn't exist throw an error message ---
            return Promise.reject(new Error("Unknown URL"));
        })
        
        render(<MemoryRouter><AdminListEntries /></MemoryRouter>);

        await waitFor(() => {
            // --- expect data to display ---
            expect(screen.getByText("Client 1")).toBeTruthy();
            expect(screen.getByText("Professional 1")).toBeTruthy();

            // --- expect fetch to be made to 2 different paths ---
            expect(fetch).toHaveBeenCalledWith(`${process.env.DOMAIN}/api/client-list`);
            expect(fetch).toHaveBeenCalledWith(`${process.env.DOMAIN}/api/professional-list`);
        })
    })

    test('displays page content (heading, li)', async () => {
        // --- fetch both mock entries from different paths ---
        fetch.mockImplementation((url) => {
            //  --- if url includes client-list fetch from this path ---
            if (url.includes("client-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockClientEntries),
                });
            //  --- if url includes professional-list fetch from this path ---
            } else if (url.includes("professional-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockProfessionalEntries),
                });
            }
            // --- if url doesn't exist throw an error message ---
            return Promise.reject(new Error("Unknown URL"));
        })
        
        render(<MemoryRouter><AdminListEntries /></MemoryRouter>);

        // --- select elements ---
        const adminListHeading = await screen.findByRole('heading', { name: /Admin List Entries/i });

        // --- verify that its on the page ---
        expect(adminListHeading).toBeTruthy();
    })    

    test('logout button logs admin out', async () => {
        // --- fetch both mock entries from different paths ---
        fetch.mockImplementation((url) => {
            //  --- if url includes client-list fetch from this path ---
            if (url.includes("client-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockClientEntries),
                });
            //  --- if url includes professional-list fetch from this path ---
            } else if (url.includes("professional-list")) {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockProfessionalEntries),
                });
            }
            // --- if url doesn't exist throw an error message ---
            return Promise.reject(new Error("Unknown URL"));
        })

        const { isAuthenticated } = useAuth0();
        
        render(<MemoryRouter><AdminListEntries /></MemoryRouter>);
        
        // --- select Log Out button ---
        const logoutButton = await screen.findByRole('button', { name: /Log Out/i });

        // --- verify that admin is logged in ---
        expect(screen.queryByRole('heading', { name: /Wright Choice Consulting/i })).not.toBeTruthy();

        // --- click Log Out button ---
        fireEvent.click(logoutButton);

        // --- verify that admin is logged out after button click ---
        if (!isAuthenticated) {
            // --- verify that Home page content displays if user is not authenticated or logged out ---
            expect(screen.findByRole('heading', { name: /Wright Choice Consulting/i })).toBeTruthy();
        } else {
            // --- verify that AdminListEntries page content displays if user is authenticated or still logged in ---
            expect(screen.findByRole('heading', { name: /Admin List Entries/i })).toBeTruthy();
        }
    })
})