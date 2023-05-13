import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import HRDashBoard from './HRDashBoard'
import HRNavBar from './HRNavBar'
import SalaryForm from './Forms/SalaryForm'
import EmployeeForm from './Forms/EmployeeForm'

const HR = () => {

  return (
    <div>
      <HRNavBar />
      <Routes>
        <Route path="/dashboard" element={<HRDashBoard />} />
        <Route path="/salary/add" element={<SalaryForm /> } />
        <Route path="/employee/add" element={<EmployeeForm /> } />
      </Routes>
    </div>
  )
}

export default HR