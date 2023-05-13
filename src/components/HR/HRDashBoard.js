import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DependentsForm from '../DependentsForm';
import Employees from './Employees';
 import Salary from './Salary';

 import Leaves from './Leaves';

const HRDashBoard = () => {

  const [activeTab, setActiveTab] = useState("PersonalInformationForm");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div className="flex h-screen overflow-hidden">
      <div className="bg-gray-500 text-gray-500 w-64 flex flex-col">
        {/* logo <div className="h-20 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Logo</span>
        </div> */}
        {/* <NavsideBar/> */}


        <div>
          <ul className="flex flex-col border-b mb-4 space-y-2 py-4 px-6">
            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "Employees" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("Employees")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Employees</span>
              </Link>
            </li>

            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "Salary" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("Salary")} >
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Salary</span>
              </Link>
            </li>


            <li className="border-l-4 border-transparent hover:bg-gray-700">
              <Link className={`flex items-center ${activeTab === "Leave" && "text-blue-700 font-bold"}`} onClick={() => handleTabClick("Leave")}>
                <span className="mr-2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Add appropriate SVG icon here */}
                  </svg>
                </span>
                <span className="text-white">Leave Application</span>
              </Link>
            </li>

          </ul>
        </div>






        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <footer className="py-4 px-6">
          <span className="text-gray-400">&copy; {new Date().getFullYear()} Your Company</span>
        </footer>
      </div>
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        {activeTab === "Employees" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <Employees />
          </div>
        )}
        {activeTab === "Salary" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <Salary />
          </div>
        )}
        {activeTab === "Leave" && (
          <div className="bg-white p-6 border-l border-r border-b">
            <Leaves />
          </div>
        )}

      </main>
    </div>


  )
}

export default HRDashBoard