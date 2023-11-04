import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChangePasswordForm() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [id, setId] = useState();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      const userData = JSON.parse(userInfo);
      setId(userData._id)
    }
  }, []);

  // Add your useEffect code to fetch the user's data here

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/employees/${id}`, { password: newPassword }) // Assuming your API endpoint accepts the new password
      .then((response) => {
        // Handle the response as needed
        console.log("Password changed successfully:", response.data);
        setSuccess(true); // Set success state to true
      })
      .catch((error) => {
        // Handle errors
        setError("Error changing password. Please check your current password.");
        console.error("Error changing password:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Current Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2 font-medium">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            className="w-full border border-gray-300 rounded-md p-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && (
          <div className="text-green-500 mb-4">Password changed successfully!</div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePasswordForm;
