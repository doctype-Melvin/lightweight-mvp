import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './views/Layout/MainLayout'
import CreateProgram from './views/Create/CreateProgram'
import Home from './views/Home/Home'
import LogSession from './views/Log/LogSession'
import Statistics from './views/Stats/Statistics'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Main Layout is parent to all other routes
        which are nested withing the MainLayout component */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/create' element={ <CreateProgram />} />
          <Route path='/log' element={ <LogSession />} />
          <Route path='/stats' element={ <Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
