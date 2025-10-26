// This is the starting point for 
// training program composition. This view allows users to 
// define their pool of exercises for their program. It currently features an
// input field and a button, and renders exercises as their added to the pool
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm"
import LinkButton from "../../components/NavigationButton/LinkButton"
import { useExerciseStore } from "../../stores"
import { useShallow } from "zustand/shallow";

// Missing components: ExerciseList, ExerciseItem

// Next: create conditional rendering for the ExerciseList component
// If the ExerciseStore has items
// the ExerciseList component renders the items

export default function CreateProgram() {
    // useExercisesStore is only read in this view component
    // useShallow makes sure that rerendering only happens
    // if the keys change, preventing max update depth exceeded

    const { list, size } = useExerciseStore(
        useShallow((state: {list: any[], size: number}) => ({
            list: state.list,
            size: state.size
        }))
    )
    return (
        <>
        <ul>
        {
            size > 0 ? (
                list.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                ))
            ) : 
            <li>No exercises yet</li>
        }
        </ul>
        <LinkButton to="/" text="home" />
        <ExerciseForm label="Exercise Name" />
        </>
    )
}
