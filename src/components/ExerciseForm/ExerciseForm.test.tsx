import { expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ExerciseForm from "./ExerciseForm"

describe("Exercise Form", () => {
    // Calling on submit
    const mockSave = vi.fn()

    // Render the component before each test and clear mock
    beforeEach(() => {
        render(<ExerciseForm onClick={mockSave} onClose={vi.fn()} />)
        mockSave.mockClear
    })

    test('renders description and input fields', () => {
        expect(screen.getByRole('heading', { name: /add exercise/i})).toBeInTheDocument();
        expect(screen.getByLabelText(/exercise name/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /save exercise/i})).toBeInTheDocument();
    })
})