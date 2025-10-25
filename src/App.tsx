
import './App.css'
import ExerciseForm from './components/ExerciseForm/ExerciseForm'

function App() {

  return (
    <>
      <div data-testid='mother'>
        <ExerciseForm label='Exercise name' onSave={() => console.log('Something is wrong')}/> {/* why put onSave as prop? */}
      </div>
    </>
  )
}

export default App
