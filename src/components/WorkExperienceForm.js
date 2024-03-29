import React, { useState, useEffect } from 'react';
import axios from 'axios'
const WorkExperienceForm = () => {
  const [id, setId] = useState()
  const [formData, setFormData] = useState({
    previousJob: '',
    previousCompany: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const userData = JSON.parse(userInfo);

      axios.get(`http://localhost:5000/employees/${userData._id}`)
        .then((response) => {
          console.log(response)
          const user = response.data.data;
          setFormData({
            previousJob: user.previousJob,
            previousCompany: user.previousCompany,
            startDate: user.startDate,
            endDate: user.endDate,
          });
          setId( userData._id )
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/employees/${id}`, formData)
      .then((response) => {
        // Handle the response as needed
        console.log("Employee information updated successfully:", response.data);
        alert("Employee information updated successfully")
      })
      .catch((error) => {
        // Handle errors
        console.error("Error updating employee information:", error);
      });
    console.log(formData);
  };
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="previousJob" className="block font-medium text-gray-800">Job Title</label>
            <input
              type="text"
              id="previousJob"
              name="previousJob"
              value={formData.previousJob}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="previousCompany" className="block font-medium text-gray-800">Company Name</label>
            <input
              type="text"
              id="previousCompany"
              name="previousCompany"
              value={formData.previousCompany}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
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
        </div>
        <div className="flex justify-center">
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

export default WorkExperienceForm;
