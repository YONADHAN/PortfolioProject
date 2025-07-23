import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
