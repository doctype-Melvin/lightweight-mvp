import { useState } from "react";
import type { ExerciseData } from "../../types";

interface ExerciseFormProps {
    label: string;
    onSave: (exercise: ExerciseData) => void
}

export default function ExerciseForm({ label, onSave }: ExerciseFormProps) {

    const [name, setName] = useState('');

    const resetInput = () => {
        setName('');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newInput: ExerciseData = {
            name
        }

        onSave(newInput)
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
        <button onClick={handleSubmit}>Save Exercise</button>
        </>
    )
}