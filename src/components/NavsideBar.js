import React ,{ useState } from 'react'
import { Link } from "react-router-dom";

const NavsideBar = () => {
  return (
    <div>
    <nav className="flex-grow">
        <ul className="space-y-2 py-4 px-6">
          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/PersonalInformationForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Personal Information</span>
            </Link>
          </li>
          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/EducationForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Education</span>
            </Link>
          </li>

          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/DependentsForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Dependents</span>
            </Link>
          </li>

          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/WorkExperienceForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Work Experience</span>
            </Link>
          </li>

          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/SalaryForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Salary</span>
            </Link>
          </li>

          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/LeaveApplicationForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Leave Application</span>
            </Link>
          </li>
          
          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/CalendarWithHolidays" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"
                >
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Upcoming Holidays</span>
            </Link>
          </li>
          <li className="border-l-4 border-transparent hover:bg-gray-700">
            <Link to="/ChangePasswordForm" className="flex items-center">
              <span className="mr-2">
                <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"
                >
                  {/* Add appropriate SVG icon here */}
                </svg>
              </span>
              <span className="text-white">Change Password</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavsideBar