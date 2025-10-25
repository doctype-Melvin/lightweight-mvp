// This is the starting point for 
// training program composition. This view allows users to 
// define their pool of exercises for their program. It features an
// input field and a button, and renders exercises as their added to the pool
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm"
import { useExerciseStore } from "../../stores"

export default function CreateProgram() {
    // useExercisesStore is only read in this view component
    return (
        <>
        <ExerciseForm label="Exercise Name" />
        </>
    )
}
