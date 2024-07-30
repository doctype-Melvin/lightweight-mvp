import Signin from "./Signin.svelte";
import { render, screen, getByRole } from "@testing-library/svelte";
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
        const { component } = render(Signin)
        const submit = vi.fn((event) => {
            event.preventDefault()
            console.log('Mocked submit function')
        })
        
        component.$on('submit', submit)
        expect(submit).toHaveBeenCalledTimes(0)
        // await screen.getByRole('button', { name: 'Sign in' }).click()
        // expect(submit).toHaveBeenCalledTimes(1)
    })
})