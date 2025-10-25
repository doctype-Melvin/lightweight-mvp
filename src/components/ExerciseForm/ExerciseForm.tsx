import { useState } from "react";
import type { ExerciseItem } from "../../types";
import { useExerciseStore } from "../../stores";

// This component specializes in user input

interface ExerciseFormProps {
    label: string;
}

export default function ExerciseForm({ label }: ExerciseFormProps) {

    const [name, setName] = useState('');

    const resetInput = () => {
        setName('');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const store = useExerciseStore.getState()
        const newInput: ExerciseItem = {
            name
        }

        store.addItem(newInput)
        resetInput()
    }

    return (
        <>
        <h3>Add exercise</h3>
        <label htmlFor="exercise-name">
            { label }
            <input 
            onChange={(e) => setName(e.target.value)}
            id="exercise-name" 
            value={name} 
            type="text"/>
        </label>
        <button onClick={handleSubmit}>Add Exercise</button>
        </>
    )
}