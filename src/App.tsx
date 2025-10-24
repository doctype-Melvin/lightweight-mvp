import { useState } from 'react'
import { Button } from '@mui/material'
import './App.css'
import ExerciseForm from './components/ExerciseForm/ExerciseForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div data-testid='mother'>
        <ExerciseForm />
      </div>
    </>
  )
}

export default App
