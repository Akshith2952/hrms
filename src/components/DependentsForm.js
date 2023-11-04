import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DependentsForm = () => {
  const [id, setId] = useState()

  const [formData, setFormData] = useState({
    dependentName: '',
    dependentRelation: '',
    dependentDOB: '',
    dependentOccupation: '',
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
            dependentName: user.dependentName,
            dependentRelation: user.dependentRelation,
            dependentDOB: user.dependentDOB,
            dependentOccupation: user.dependentOccupation,
          });
          setId(userData._id)
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
      <h2 className="text-2xl font-bold mb-4">Dependents</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dependentName" className="block font-medium text-gray-800">Name</label>
            <input
              type="text"
              id="dependentName"
              name="dependentName"
              value={formData.dependentName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="dependentRelation" className="block font-medium text-gray-800">Relation</label>
            <select
              id="dependentRelation"
              name="dependentRelation"
              value={formData.dependentRelation}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            >
              <option value="">Select Relation</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
            </select>
          </div>
          <div>
            <label htmlFor="dependentDOB" className="block font-medium text-gray-800">Date of Birth</label>
            <input
              type="date"
              id="dependentDOB"
              name="dependentDOB"
              value={formData.dependentDOB}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="dependentOccupation" className="block font-medium text-gray-800">Occupation</label>
            <input
              type="text"
              id="dependentOccupation"
              name="dependentOccupation"
              value={formData.dependentOccupation}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="block mx-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mt-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DependentsForm;
