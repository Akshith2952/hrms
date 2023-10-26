import React, { useEffect, useState } from 'react';
import axios from "axios"

const Leaves = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/leaves/')
      .then((response) => {
        setData(response.data.data)
        console.log(data);
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-4">Leaves</h2>
      {/* Your leave application content goes here */}

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
          {Array.isArray(data) && data.map(employee => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {employee.name}
              </th>
              <td className="px-6 py-4">
                {employee.email}
              </td>
              <td className="px-6 py-4">
                {employee.bankName}
              </td>
              <td className="px-6 py-4">
                {employee.basicSalary}
              </td>
              {/* <td className="px-6 py-4 text-right">
                <button onClick={() => setIsEdit(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
              </td> */}
              {/* <td className="px-6 py-4 text-right">
                <button onClick={() => handleDelete(employee._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Leaves;
