import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeUpdateForm = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState(props.data.email);
  const [password, setPassword] = useState(props.data.password);
  const [role, setRole] = useState(props.data.role);
  const [gender, setGender] = useState(props.data.gender);
  const [name, setName] = useState(props.data.name);
  const [dateOfBirth, setDateOfBirth] = useState(props.data.dateOfBirth);
  const [contactNumber, setContactNumber] = useState(props.data.contactNumber);
  const [employeeCode, setEmployeeCode] = useState(props.data.employeeCode);
  const [department, setDepartment] = useState(props.data.department);
  const [dateOfJoining, setDateOfJoining] = useState(props.data.dateOfJoining);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/employees/${props.data._id}`, {
        email,
        password,
        role,
        gender,
        name,
        dateOfBirth,
        contactNumber,
        employeeCode,
        department,
        dateOfJoining,
      });
      console.log(res.data);
      alert("Updated successfully");
      window.location.reload()
      nav('/hr/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <button className="text-2xl float-right" onClick={() => window.location.reload()}>
          X
        </button>
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold mb-6">Employee Details</h2>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-2 font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Gender</label>
            <div className="flex items-center">
              <label htmlFor="male" className="mr-2">
                <input
                  type="radio"
                  id="male"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                  required
                />
                Male
              </label>
              <label htmlFor="female" className="mr-2">
                <input
                  type="radio"
                  id="female"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                  required
                />
                Female
              </label>
              <label htmlFor="other" className="mr-2">
                <input
                  type="radio"
                  id="other"
                  value="other"
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-1"
                  required
                />
                Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block mb-2 font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-2 font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="employeeCode" className="block mb-2 font-medium text-gray-700">
              Employee Code
            </label>
            <input
              type="text"
              id="employeeCode"
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block mb-2 font-medium text-gray-700">
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Department</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
              <option value="it">IT</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfJoining" className="block mb-2 font-medium text-gray-700">
              Date of Joining
            </label>
            <input
              type="date"
              id="dateOfJoining"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeUpdateForm;

