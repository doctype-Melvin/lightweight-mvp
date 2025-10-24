export default function ExerciseForm() {

    const handleClick = () => console.log('Exercise')

    return (
        <>
        <h3>Add exercise</h3>
        <label for="exercise-name">
            Exercise Name
        </label>
            <input id="exercise-name" type="text"/>
        <button onClick={handleClick}>Save Exercise</button>
        </>
    )
}