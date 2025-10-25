import { expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseForm from "./ExerciseForm"
import { useExerciseStore } from "../../stores";

describe("Exercise Form", () => {
    // Calling on submit
    const mockAddItem = vi.fn()

    // create a mocked useExerciseStore state
    // to test if actions are called
    beforeAll(() => {
        vi.spyOn(useExerciseStore, 'getState').mockReturnValue({
            list: [],
            size:0,
            addItem: mockAddItem
        })
    })

    // Render the component before each test and clear mock
    beforeEach(() => {
        render(<ExerciseForm label="Exercise name" />)
        mockAddItem.mockClear
    })

    test('renders description and input fields', () => {
        // there is a heading
        expect(screen.getByRole('heading', { name: /add exercise/i})).toBeInTheDocument();
        // there is a label for the input
        expect(screen.getByLabelText(/exercise name/i)).toBeInTheDocument();
        // there is a button
        expect(screen.getByRole('button', { name: /add exercise/i})).toBeInTheDocument();
    })

    test('clicking save calls', () => {
        // find the input 
        const userInput = screen.getByLabelText(/exercise name/i);

        // simulate user input
        fireEvent.change(userInput, { target: { value: "Chin Up" }});

        // click the associated save button
        const saveButton = screen.getByRole('button', { name: /add exercise/i})
        fireEvent.click(saveButton);

        expect(mockAddItem).toHaveBeenCalledTimes(1);
        expect(mockAddItem).toHaveBeenCalledWith({name: "Chin Up"});
        
        expect(userInput).toHaveValue('');
    })
})