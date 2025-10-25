import { describe, it, beforeEach, expect } from "vitest";
import { useExerciseStore } from "./ExerciseStore";

beforeEach(() => {
    useExerciseStore.setState({ list: [], size: 0 })
})

describe('useExerciseStore...', () => {
    it('should initialize with an empty array and a size of 0', () => {
        const state = useExerciseStore.getState()

        expect(state.size).toBe(0);
        expect(state.list).toEqual([]);
    });

    it('has a method to add an item to the array', () => {
        const newItem = "Chin Up"
        const state = useExerciseStore.getState();
        
        state.addItem(newItem)

        const newState = useExerciseStore.getState();

        expect(newState.list.length).toBe(1);
    });

    it('increases the store size property by one when adding an item', () => {
        const state = useExerciseStore.getState();

        state.addItem('Push Up')

        const newState = useExerciseStore.getState();

        expect(newState.size).toBe(1)
    })
});