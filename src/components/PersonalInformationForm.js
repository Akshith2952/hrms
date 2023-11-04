import React, { useState, useEffect } from "react";
import axios from 'axios'
const PersonalInformationForm = () => {
  const [id, setId] = useState()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    dateOfBirth: "",
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
            name: user.name,
            email: user.email,
            phone: user.contactNumber,
            gender: user.gender,
            address: user.address,
            dateOfBirth: user.dateOfBirth,
          });
          setId( userData._id )
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }
  }, []);

  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     const userData = JSON.parse(userInfo);

  //     setFormData({
  //       name: userData.name,
  //       email: userData.email,
  //       phone: userData.contactNumber,
  //       gender: userData.gender,
  //       address: userData.address,
  //       dateOfBirth: userData.dateOfBirth,
  //     });
  //     setId(userData._id)
  //   }
  // }, []);

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
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-medium text-gray-800">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block font-medium text-gray-800">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block font-medium text-gray-800"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block font-medium text-gray-800"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
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
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
