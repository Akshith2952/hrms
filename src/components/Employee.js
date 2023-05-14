import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './Navbar';
import Dashboard from './Dashboard';
import Home from './Home';

const Employee = () => {
  return (
    <div>
      <NavBar />
        <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Home" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default Employee