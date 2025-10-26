import { expect, it, describe, vi, beforeEach, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("The home view... ", () => {
    it("renders at least one button", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        const buttons = screen.getAllByRole("link")
        expect(buttons.length).toBeGreaterThan(0)
        
    })


})