import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PersonalInformationForm from './PersonalInformationForm';
import EducationForm from './EducationForm';
import DependentsForm from './DependentsForm';
import WorkExperienceForm from './WorkExperienceForm';
import SalaryForm from './SalaryForm';
import CalendarWithHolidays from './CalendarWithHolidays';
import LeaveApplicationForm from './LeaveApplicationForm';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("PersonalInformationForm");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-800 text-gray-500 w-64 flex flex-col">
        <div className="h-20 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Logo</span>
        </div>
        {/* <NavsideBar/> */}


        <div>
          <ul className="flex flex-col border-b mb-4 space-y-2 py-4 px-6">
            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "PersonalInformationForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("PersonalInformationForm")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Personal Information</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "EducationForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("EducationForm")} >
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Education</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "DependentsForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("DependentsForm")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Dependents</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "SalaryForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("SalaryForm")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Salary</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "WorkExperienceForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("WorkExperienceForm")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Work Experience</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "LeaveApplicationForm" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("LeaveApplicationForm")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Leave Application</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "CalendarWithHolidays" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("CalendarWithHolidays")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Upcoming Holidays</span>
              </Link>
            </li>

          </ul>
        </div>







        <footer className="py-4 px-6">
          <span className="text-gray-400">&copy; {new Date().getFullYear()} Your Company</span>
        </footer>
      </div>
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        {activeTab === "PersonalInformationForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <PersonalInformationForm />
          </div>
        )}
        {activeTab === "EducationForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <EducationForm />
          </div>
        )}
        {activeTab === "DependentsForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <DependentsForm />
          </div>
        )}
        {activeTab === "WorkExperienceForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <WorkExperienceForm />
          </div>
        )}
        {activeTab === "SalaryForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <SalaryForm />
          </div>
        )}
        {activeTab === "LeaveApplicationForm" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <LeaveApplicationForm />
          </div>
        )}
        {activeTab === "CalendarWithHolidays" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <CalendarWithHolidays />
          </div>
        )}

      </main>
    </div>


  )
}

export default Dashboard