import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './views/Layout/MainLayout'
import Home from './views/Home/Home'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Main Layout is parent to all other routes
        which are nested withing the MainLayout component */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
