import { create } from "zustand";
import type { ExerciseItem } from "../types";

interface ExerciseStore {
    list: ExerciseItem[],
    size: number,
    addItem: (exercise: ExerciseItem) => void
}

export const useExerciseStore = create<ExerciseStore>()((set) => ({
    size: 0,
    list: [],
    addItem: (exercise) => set((state) => ({
        list: state.list.concat(exercise),
        size: state.size+1
    }))
    // add remove action which might require an uid
}))