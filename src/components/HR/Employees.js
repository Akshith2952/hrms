import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeUpdateForm from "./Forms/EmployeeUpdateForm";
import DependentsFormView from "./Forms/FormViews/DependentsFormView";

import PersonalInformationFormView from "./Forms/FormViews/PersonalInformationFormView";
import EducationFormView from "./Forms/FormViews/EducationFormView";
import WorkExperienceFormView from "./Forms/FormViews/WorkExperienceFormView";
import EmployeeForm from "./Forms/EmployeeForm";

const Employees = () => {
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isAddEmployeeFormVisible, setIsAddEmployeeFormVisible] = useState(false);

  const showAddEmployeeForm = () => {
    setIsAddEmployeeFormVisible(true);
  };

  const closeAddEmployeeForm = () => {
    setIsAddEmployeeFormVisible(false);
  };

  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((response) => {
        setEmployeeData(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setIsEditNew = (e) => {
    setSelectedEmployee(e)
    setIsEdit(true);
  }

  return (
    <>
    
      {!isEdit && !isView && (
        <div className="flex items-center justify-between bg-gray-200 p-4">
          <h2 className="text-2xl font-bold text-gray-800">Employee Details</h2>
          <button
            onClick={showAddEmployeeForm}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {" "}
            Add Employee
          </button>
        </div>
      )}

      {isAddEmployeeFormVisible && (
        
        <EmployeeForm onClose={closeAddEmployeeForm} />
      )}

      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          {isEdit && (
            <div>
              <EmployeeUpdateForm data={selectedEmployee} />
              <button
                onClick={() => setIsEdit(false)}
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              >
                Back
              </button>
            </div>
          )}
          {isView && (
            <div>
              <button
                onClick={() => setIsView(false)}
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
              >
                {" "}
                Back{" "}
              </button>

              <PersonalInformationFormView />
              <EducationFormView />
              <DependentsFormView />
              <WorkExperienceFormView />
            </div>
          )}
          {!isEdit && !isView && (
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Employee Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(employeeData.data) &&
                  employeeData.data.map((employee) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {employee.employeeCode}
                      </th>
                      <td className="px-6 py-4">{employee.name}</td>
                      <td className="px-6 py-4">{employee.email}</td>
                      <td className="px-6 py-4">{employee.department}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setIsEditNew(employee)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setIsView(true)}
                          className="font-medium text-green-600 dark:text-red-500 hover:underline"
                        >
                          View
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(employee._id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default Employees;