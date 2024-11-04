/**
 * ------ HERO TEST ------
 * Render Heading (  )
 * Render Image (  )
 * Render button if applicable (  )
 *  Check that button redirects to correct page (  )
 */
import React from "react";
import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Hero from '../components/Hero.jsx';

describe('Hero page component', () => {
    test('display heading and image', async () => {
        render(<Hero title='Title' image='../walkbridge.png' />);

        // --- select elements ---
        const heroTitle = await screen.findByRole('heading', { name: this.title });
        const heroImage = await screen.findByAltText('Image');

        // --- verify element exists on page ---
        expect(heroTitle).toBeTruthy();
        expect(heroImage.src).toBe(this.image);
    })

    // --- if button exists check that it renders and redirects ---
    test('if button exists check that it renders and redirects', async () => {
        render(<Hero />);

        // --- select button ---
        // --- verify target page content doesn't currently exist ---
        // --- click button ---
        // --- verify button redirects to correct page ---
    })
})