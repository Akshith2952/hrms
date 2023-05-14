import React from 'react';
import { useNavigate } from 'react-router-dom';

const Salary = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hr/salary/add');
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4">
      <h2 className="text-2xl font-bold text-gray-800">Salary Details</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Salary
      </button>
    </div>
  );
};

export default Salary;
