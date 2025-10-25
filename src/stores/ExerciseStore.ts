import { create } from "zustand";

interface ExerciseStore {
    list: string[],
    size: number,
    addItem: (exercise: string) => void
}

export const useExerciseStore = create<ExerciseStore>()((set) => ({
    size: 0,
    list: [],
    addItem: (exercise) => set((state) => ({
        list: state.list.concat(exercise),
        size: state.size+1
    }))
}))