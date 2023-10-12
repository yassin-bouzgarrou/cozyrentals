import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login} from "./component/Auth/Login.jsx"
import './App.css'
import Signup from './component/Auth/Signup'

function App() {


  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login/>	} />
          
        <Route path="/signup" element={<Signup/>	} />

      </Routes>
    </Router>
  )
}

export default App
