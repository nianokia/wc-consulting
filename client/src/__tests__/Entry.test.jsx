/**
 * ------ ENTRY TEST ------
 * Render Entry component ( √ )
 * Fetch all input values ( √ )
 * Render all input values ( √ )
 * Render Delete button ( √ )
 *  DELETE entry from database ( √ )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import Entry from '../components/Entry.jsx';

// --- create mockEntry prop sent to Entry component ---
const mockEntry = {
    first_name: "Bob",
    last_name: "Dylan",
    email: "bdylan@test.com",
    comment: "Hello",
    created_at: "2024-11-06 05:44:07.872558",
}

// --- create mockHandleDelete prop sent to Entry component ---
const mockHandleDelete = vi.fn();

describe('Entry page component', () => {
    test('displays Entry and properties', async () => {
        // --- input mock data as props to Entry component ---
        render(<MemoryRouter><Entry entry={mockEntry} handleDelete={mockHandleDelete} /></MemoryRouter>);

        // --- verify mock data displays on page ---
        expect(screen.getByText("bdylan@test.com")).toBeTruthy();
    })

    test('delete button deletes entry', async () => {
        // --- input mock data as props to Entry component ---
        render(<MemoryRouter><Entry entry={mockEntry} handleDelete={mockHandleDelete} /></MemoryRouter>);

        // --- select delete button ---
        const deleteButton = await screen.findByRole('button', { name:/🗑️/i });

        // --- verify entry content exists ---
        expect(screen.getByText('Bob Dylan')).toBeTruthy();

        // --- click button ---
        fireEvent.click(deleteButton);

        // --- verify handleDelete has been called once ---
        await waitFor(() => {
            expect(mockHandleDelete).toHaveBeenCalledTimes(1);
        })
    })
})