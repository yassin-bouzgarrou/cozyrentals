import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./component/Auth/Login.jsx";
import "./App.css";
import Signup from "./component/Auth/Signup";
import Home from "./component/Home/Home";
import Profile from "./component/ProfilePage/Profile";
import axios from "axios";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
