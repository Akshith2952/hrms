import React from 'react'
import { useNavigate } from 'react-router-dom'

const Salary = () => {
  const navigate = useNavigate()

  const HandleClick = () => {
    navigate('/hr/salary/add')
  }

  return (
    <div>
      <button onClick={HandleClick} >Add Salary</button>
    </div>
  )
}

export default Salary