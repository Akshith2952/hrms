import React, { useState } from 'react';

import axios from "axios";
const LeaveApplicationForm = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    leaveStatus: 'Pending',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/leaves", {name: "mihir" ,email : "mihir@gmail.com" , ...formData})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="leaveType" className="block font-medium text-gray-800">Leave Type</label>
            <select
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            >
              <option value="">Select Leave Type</option>
              <option value="sick">Sick Leave</option>
              <option value="vacation">Vacation Leave</option>
              <option value="personal">Personal Leave</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate" className="block font-medium text-gray-800">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block font-medium text-gray-800">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="reason" className="block font-medium text-gray-800">Reason</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              rows="4"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="leaveStatus" className="block font-medium text-gray-800">Leave Status</label>
            <input
              type="text"
              id="leaveStatus"
              name="leaveStatus"
              value={formData.leaveStatus}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              readOnly
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mt-4 rounded-md"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default LeaveApplicationForm;
