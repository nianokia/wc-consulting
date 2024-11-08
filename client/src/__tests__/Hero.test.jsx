/**
 * ------ HERO TEST ------
 * Render Heading (  )
 * Render Image (  )
 * Render button if applicable (  )
 *  Check that button redirects to correct page (  )
 */
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Hero from '../components/Hero.jsx';
import { MemoryRouter } from "react-router-dom";

const mockHero = {
    title: "Title",
    textalign: "center",
    button: "Contact"
}

describe('Hero page component', () => {
    test('display heading and image', async () => {
        render(<MemoryRouter><Hero title={mockHero.title} /></MemoryRouter>);

        // --- select elements ---
        const heroTitle = await screen.findByRole('heading', { name: this.title });

        // --- verify element exists on page ---
        expect(heroTitle).toBeTruthy();
    })

    // --- if button exists check that it renders and redirects ---
    test('if button exists check that it renders and redirects', async () => {
        render(<MemoryRouter><Hero title={mockHero.title} button={mockHero.button} textalign={mockHero.textalign} /></MemoryRouter>);

        // --- select button ---
        const button = await screen.findByRole('button', { name: this.button });

        // --- verify target page content doesn't currently exist ---
        expect(screen.queryByRole('heading', { name: /Contact Home/i })).not.toBeTruthy();

        // --- click button ---
        fireEvent.click(button);

        // --- verify button redirects to correct page ---
        await waitFor(() => {
            expect(screen.findByRole('heading', { name: /Contact Home/i })).toBeTruthy();
        })
    })
})