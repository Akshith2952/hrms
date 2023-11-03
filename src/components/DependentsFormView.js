import React, { useState, useEffect } from 'react';

const DependentsFormView = () => {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    dateOfBirth: '',
    occupation: '',
  });

  // Fetch data from an API endpoint and set it to the form state
  useEffect(() => {
    fetch('https://example.com/api/dependents')
      .then((response) => response.json())
      .then((data) => setFormData(data));
  }, []);

  // Handle input change and update the form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Dependents</h2>
      <form>
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
            <label htmlFor="relation" className="block font-medium text-gray-800">
              Relation
            </label>
            <select
              id="relation"
              name="relation"
              value={formData.relation}
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
            <label htmlFor="dateOfBirth" className="block font-medium text-gray-800">
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
          <div>
            <label htmlFor="occupation" className="block font-medium text-gray-800">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DependentsFormView;
