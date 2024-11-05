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
        const imagePath = '../walkbridge.png'
        render(<Hero title='Title' image={imagePath} textalign='start' />);

        // --- select elements ---
        const heroTitle = await screen.findByRole('heading', { name: this.title });

        const heroDiv = document.querySelector('.Hero');
        const styles = getComputedStyle(heroDiv);

        // --- verify element exists on page ---
        expect(heroTitle).toBeTruthy();
        console.log("Image prop: ", this.image);
        // --- the test will only succeed if I put change the original file to not have a linear gradient and only have a background image ---
        // --- I'll come back to this later and see if I want to reconfigure my file ---
        expect(styles).toBe(`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${imagePath})`);
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