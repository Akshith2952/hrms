import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employees = () => {
  const navigate = useNavigate()

  const HandleClick = () => {
    navigate('/hr/employee/add')
  }

  return (
    <div>
      <button onClick={HandleClick} >Add Salary</button>
    </div>
  )
}

export default Employees