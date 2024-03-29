import React, { useState } from 'react';

const EducationFormView = ({data}) => {
  const [formData, setFormData] = useState({
    school: data.university,
    degree: data.degree,
    grade: data.grade,
    yearOfPassing: data.yearOfPassing,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="school" className="block font-medium text-gray-800">School/University</label>
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
</div>

      </form>
    </div>
  );
};

export default EducationFormView;
