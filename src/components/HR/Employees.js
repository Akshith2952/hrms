import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./Forms/EmployeeForm";
import EmployeeUpdateForm from "./Forms/EmployeeUpdateForm";
import PersonalInformationFormView from "./Forms/FormViews/PersonalInformationFormView";
import EducationFormView from "./Forms/FormViews/EducationFormView";
import DependentsFormView from "./Forms/FormViews/DependentsFormView";
import WorkExperienceFormView from "./Forms/FormViews/WorkExperienceFormView";
// import { saveAs } from "file-saver";
// import { json2csv } from "json-2-csv";

const Employees = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isAddEmployeeFormVisible, setIsAddEmployeeFormVisible] =
    useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [filteredEmployeeData, setFilteredEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  const showAddEmployeeForm = () => {
    setIsAddEmployeeFormVisible(true);
  };

  const closeAddEmployeeForm = () => {
    setIsAddEmployeeFormVisible(false);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/employees/${id}`)
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setIsEditNew = (e) => {
    setSelectedEmployee(e);
    setIsEdit(true);
  };

  const setIsViewNew = (e) => {
    setSelectedEmployee(e);
    setIsView(true);
  };

  const handleSearchAndFilter = () => {
    const filteredData = employeeData.data.filter((employee) => {
      const nameMatches = employee.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const departmentMatches =
        departmentFilter === "All" ||
        employee.department.toLowerCase() === departmentFilter.toLowerCase();
      return nameMatches && departmentMatches;
    });
    setFilteredEmployeeData(filteredData);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then((response) => {
        setEmployeeData(response.data);
        setFilteredEmployeeData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployeeData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleExportToCSV = () => {
  //   json2csv({ data: currentEmployees }, (err, csv) => {
  //     if (err) {
  //       console.error("Error exporting to CSV: ", err);
  //       return;
  //     }

  //     const blob = new Blob([csv], { type: "text/csv" });
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.style.display = "none";
  //     a.href = url;
  //     a.download = "employee_data.csv";

  //     document.body.appendChild(a);
  //     a.click();

  //     window.URL.revokeObjectURL(url);
  //   });
  // };

  return (
    <div className="container mx-auto">
      {!isEdit && !isView && (<div className="flex items-center justify-between bg-gray-200 p-4">
        <h2 className="text-2xl font-bold text-gray-800">Employee Details</h2>
        <button
          onClick={showAddEmployeeForm}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Employee
        </button>
      </div>)
      }

      {isAddEmployeeFormVisible && (
        <EmployeeForm onClose={closeAddEmployeeForm} />
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {isEdit && (
          <div>
            <EmployeeUpdateForm data={selectedEmployee} />
            {/* <button
              onClick={() => setIsEdit(false)}
              className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Back
            </button> */}
            <button
              onClick={() => setIsEdit(false)}
              className="absolute top-4 right-4 color: black; font-size: 24px; font-medium py-2 px-4 rounded-md"
            >
              X
            </button>
          </div>
        )}

        {isView && (
          <div>
            <button
              onClick={() => setIsView(false)}
              className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Back
            </button>

            <PersonalInformationFormView data={selectedEmployee} />
            <EducationFormView data={selectedEmployee} />
            <DependentsFormView data={selectedEmployee} />
            <WorkExperienceFormView data={selectedEmployee} />
          </div>
        )}


        {!isEdit && !isView && (
          <div className="bg-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="mr-2 px-2 py-1 rounded"
                />
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-2 py-1 rounded"
                >
                  <option value="All">All Departments</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <button
                  onClick={handleSearchAndFilter}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  style={{ marginLeft: "8px" }}
                >
                  Search & Filter
                </button>
                {/* <button
          onClick={handleExportToCSV}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          style={{ marginLeft: "8px" }}
        >
          Export to CSV
        </button> */}
              </div>
            </div>
          </div>
        )}

        {!isEdit && !isView && (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Employee Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentEmployees) &&
                currentEmployees.map((employee) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={employee.employeeCode}
                  >
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
                        onClick={() => setIsViewNew(employee)}
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

        {filteredEmployeeData.length > employeesPerPage && (
          <div className="mt-4 flex justify-center">
            {Array.from(
              {
                length: Math.ceil(
                  filteredEmployeeData.length / employeesPerPage
                ),
              },
              (_, index) => (
                <button
                  key={index}
                  className={`${currentPage === index + 1
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    } px-4 py-2 rounded-full font-medium mx-2`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Employees;
