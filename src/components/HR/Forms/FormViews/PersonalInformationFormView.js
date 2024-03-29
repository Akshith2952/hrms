import React, { useState } from "react";

const PersonalInformationFormView = ({data}) => {
  console.log(data)
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-800">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              // onChange={handleChange}
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
              value={data.email}
              // onChange={handleChange}
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
              value={data.contactNumber}
              // onChange={handleChange}
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
              value={data.gender}
              // onChange={handleChange}
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
              value={data.address}
              // onChange={handleChange}
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
              value={data.dateOfBirth}
              // onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mt-4 rounded-md"
          >
            Save
          </button> */}
        </div>
      {/* </form> */}
    </div>
  );
};

export default PersonalInformationFormView;
