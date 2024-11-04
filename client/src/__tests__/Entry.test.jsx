/**
 * ------ ENTRY TEST ------
 * Render Entry component (  )
 * Fetch all input values (  )
 * Render all input values (  )
 * Render Delete button (  )
 *  DELETE entry from database (  )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import Entry from '../components/Entry.jsx';

describe('Entry page component', () => {
    test('displays Entry and properties', async () => {
        render(<MemoryRouter><Entry {...props} /></MemoryRouter>);

        // --- take in props or use mock data ---

    })

    test('delete button deletes entry', async () => {
        render(<MemoryRouter><Entry /></MemoryRouter>);

        // --- select delete button ---
        const deleteButton = await screen.findByRole('button', { name:/🗑️/i });

        // --- verify entry content exists ---
        expect(screen.queryByRole('heading', { name: `${props.first_name} ${props.last_name}` })).toBeTruthy();

        // --- click button ---
        fireEvent.click(deleteButton);

        // --- verify entry content doesn't exist anymore ---
        await waitFor(() => {
            expect(screen.queryByRole('heading', { name: `${props.first_name} ${props.last_name}` })).not.toBeTruthy();
        })
    })
})