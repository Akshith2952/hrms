import React, { useState, useEffect } from 'react';
import axios from 'axios'
const EducationForm = () => {
  const [id, setId] = useState()
  const [formData, setFormData] = useState({
    university: '',
    degree: '',
    grade: '',
    yearOfPassing: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const userData = JSON.parse(userInfo);

      axios.get(`http://localhost:5000/employees/${userData._id}`)
        .then((response) => {
          console.log(response)
          const user = response.data.data;
          setFormData({
            university: user.university,
            degree: user.degree,
            grade: user.grade,
            yearOfPassing: user.yearOfPassing,
          });
          setId(userData._id)
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }
  }, []);

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
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="university" className="block font-medium text-gray-800">School/University</label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="degree" className="block font-medium text-gray-800">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="grade" className="block font-medium text-gray-800">Grade</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="yearOfPassing" className="block font-medium text-gray-800">Year of Passing</label>
            <input
              type="text"
              id="yearOfPassing"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
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

export default EducationForm;
