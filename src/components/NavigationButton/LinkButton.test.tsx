import { describe, it, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LinkButton from "./LinkButton";

// Verify two things:
// The component renders correctly
// Component renders an anchor tag with the correct href property

describe("LinkButton Component", () => {
    const targetPath = "/log";
    const buttonText = "Log Session";

    it("renders with correct text and navigates to specified path", () => {
        // Wrap component in MemoryRouter for testing React Router components
        render(
            <MemoryRouter>
                <LinkButton to={targetPath}>
                {buttonText}
                </LinkButton>
            </MemoryRouter>
        )

        // Find button by text...
        const buttonComponent = screen.getByRole("link", { name: buttonText});
        // ...assert button to be a link in the document...
        expect(buttonComponent).toBeInTheDocument();
        // ...assert a link within the button element
        expect(buttonComponent).toHaveAttribute("href", targetPath);
    })

    
});