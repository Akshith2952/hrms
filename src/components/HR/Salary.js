 import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SalaryForm from './Forms/SalaryForm';
import axios from 'axios';

const Salary = () => {


  const [IsFormOpen, setIsFormOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [salary, setSalary] = useState([]);

  const handleClick = () => {
    setIsFormOpen(true)
  };

  useEffect(() => {
    axios.get('http://localhost:5000/salary')
      .then(response => {
        setSalary(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
console.log(salary);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/salary/${id}`)
      .then(response => {
        setSalary(response.data);
                
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      {IsFormOpen && 
      <div>
      <button
  onClick={() => setIsFormOpen(false)}
  className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
>
  Back
</button>
      <SalaryForm set={setIsFormOpen} />
      </div>
      }
      {!IsFormOpen && !isEdit &&
        <div className="flex items-center justify-between bg-gray-200 p-4">
          <h2 className="text-2xl font-bold text-gray-800">Salary Details</h2>
          <button onClick={handleClick} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Add Salary</button>
        </div>
      }
      { isEdit && 
        <SalaryForm />
      }
      { !IsFormOpen && !isEdit &&
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Employee Id
            </th>
            <th scope="col" class="px-6 py-3">
              Bank
            </th>
            <th scope="col" class="px-6 py-3">
              Salary
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(salary.data) && salary.data.map(employee => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employee.accountHolderName}
              </th>
              <td className="px-6 py-4">
                {employee.accountNo}
              </td>
              <td className="px-6 py-4">
                {employee.bankName}
              </td>
              <td className="px-6 py-4">
                {employee.basicSalary}
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => setIsEdit(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => handleDelete(employee._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      }
    </>
  );
};

export default Salary;