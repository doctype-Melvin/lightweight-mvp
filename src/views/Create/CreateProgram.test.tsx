import { expect, it, describe, vi, beforeEach, beforeAll } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import CreateProgram from "./CreateProgram";
import { MemoryRouter } from "react-router-dom";
import { useExerciseStore } from "../../stores";

describe("CreateProgram...", () => {
        const mockAddItem = vi.fn()
    
        // create a mocked useExerciseStore state
        // to test if actions are called
        beforeAll(() => {
            useExerciseStore.setState({ list: [], size: 0 })
        })
    
        // Render the component before each test and clear mock
        beforeEach(() => {
            
            render(
                <MemoryRouter>
                    <CreateProgram />
                </MemoryRouter>
            )
            mockAddItem.mockClear
        })

    it("renders the ExerciseForm component and shows a Home button", () => {

        expect(screen.getByLabelText(/exercise name/i)).toBeInTheDocument()

        const homeButton = screen.getByRole("link", { name: /home/i});
        expect(homeButton).toBeInTheDocument();
    })

    it("(INTEGRATION) displays input values after user clicks add button", async () => {

        // The default message while the store is in initialized state
        expect(screen.getByText(/no exercises yet/i)).toBeInTheDocument()

        // User input preparation
        const userInput = "Chin up";
        const inputField = screen.getByLabelText(/exercise name/i);
        const addButton = screen.getByRole('button', {name: /add/i});
      
        await act(async () => {
            fireEvent.change(inputField, { target: { value: userInput }});
            fireEvent.click(addButton)
        })

        const newItem = await screen.findByText(userInput)
        expect(newItem).toBeInTheDocument();

        expect(screen.queryByText(/no exercises yet/i)).not.toBeInTheDocument();

    })
})