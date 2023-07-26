import React, { useState } from 'react';

function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (response.ok) {
        // Password changed successfully
        // Reset the form and show a success message
        setCurrentPassword('');
        setNewPassword('');
        setError('');
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block mb-2 font-medium">
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            className="w-full border border-gray-300 rounded-md p-2"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
