import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Login} from "./component/Auth/Login.jsx"
import './App.css'
import Signup from './component/Auth/Signup'
import Home from './component/Home'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { storeUserData } from './redux/userAction'
import UserInfo from './component/UserInfo'

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');


  axios.get('http://localhost:3000/user/info', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(response => {
  const userData = response.data;
  console.log(response);
  dispatch(storeUserData(userData))

})
.catch(error => {
  console.log(error);

});


  return (
    <Router>
      <Routes>
        
      <Route path="/" element={<Home/>	} />
        <Route path="/login" element={<Login/>	} />
        <Route path="/user" element={<UserInfo/>	} />
        <Route path="/signup" element={<Signup/>	} />

      </Routes>
    </Router>
  )
}

export default App
