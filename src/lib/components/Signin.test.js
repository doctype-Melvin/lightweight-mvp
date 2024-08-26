import Signin from "./Signin.svelte";
import { render, screen, fireEvent } from "@testing-library/svelte";
import { vi, describe, test, expect } from "vitest";

describe('Signin component', () => {
    test('should render', () => {
        const { component } = render(Signin);
        expect(component).toBeTruthy();
        expect(screen.getByText('Email')).toBeTruthy();
    })

    test('should have a submit button', () => {
        render(Signin);
        expect(screen.getByRole('button', { name: 'Sign in' })).toBeTruthy();
    })

    test('clicking submit button should call submit function', async () => {
        const spy = vi.spyOn(console, 'log');

        render(Signin);
        const form = screen.getByTestId('sign-in-form')
        await fireEvent.submit(form);
        expect(spy).toHaveBeenCalled();
    })
})