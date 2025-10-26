import { useState } from "react";
import type { ExerciseItem } from "../../types";
import { useExerciseStore } from "../../stores";
import { TextField, Button } from "@mui/material";
import "./style.css"

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
        <section>
        <TextField
        id="outlined-input"
        label="Exercise Name" 
        variant="filled" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        focused/>
        <Button
        variant="contained"
        onClick={handleSubmit}>Add</Button>
        </section>
    )
}