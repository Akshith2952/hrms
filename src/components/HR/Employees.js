import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employees = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hr/employee/add');
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Employee Details</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Employee
      </button>
    </div>
  );
};

export default Employees;
