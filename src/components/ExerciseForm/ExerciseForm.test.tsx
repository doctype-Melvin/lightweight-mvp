import { expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseForm from "./ExerciseForm"

describe("Exercise Form", () => {
    // Calling on submit
    const mockSave = vi.fn()

    // Render the component before each test and clear mock
    beforeEach(() => {
        render(<ExerciseForm label="Exercise name" onSave={mockSave} />)
        mockSave.mockClear
    })

    test('renders description and input fields', () => {
        // there is a heading
        expect(screen.getByRole('heading', { name: /add exercise/i})).toBeInTheDocument();
        // there is a label for the input
        expect(screen.getByLabelText(/exercise name/i)).toBeInTheDocument();
        // there is a button
        expect(screen.getByRole('button', { name: /save exercise/i})).toBeInTheDocument();
    })

    test('clicking save calls', () => {
        // find the input 
        const userInput = screen.getByLabelText(/exercise name/i);

        // simulate user input
        fireEvent.change(userInput, { target: { value: "Chin Up" }});

        // click the associated save button
        const saveButton = screen.getByRole('button', { name: /save exercise/i})
        fireEvent.click(saveButton);

        expect(mockSave).toHaveBeenCalledTimes(1);
        //expect(mockSave).toHaveBeenCalledWith('Chin Up');
        
        expect(userInput).toHaveValue('');
    })
})