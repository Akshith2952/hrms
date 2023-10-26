import React, { useState, useEffect } from 'react';

const EducationFormView = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    grade: '',
    yearOfPassing: '',
  });

  // Fetch data from an API endpoint and set it to the form state
  useEffect(() => {
    fetch('https://example.com/api/education')
      .then((response) => response.json())
      .then((data) => setFormData(data));
  }, []);

  // Handle input change and update the form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="school" className="block font-medium text-gray-800">
              School/University
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="degree" className="block font-medium text-gray-800">
              Degree
            </label>
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
            <label htmlFor="grade" className="block font-medium text-gray-800">
              Grade
            </label>
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
            <label
              htmlFor="yearOfPassing"
              className="block font-medium text-gray-800"
            >
              Year of Passing
            </label>
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
      </form>
    </div>
  );
};

export default EducationFormView;
