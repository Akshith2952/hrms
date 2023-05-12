import React from 'react'

import NavsideBar from './NavsideBar';

const Dashboard = () => {
  return (
    
    <div className="flex h-screen overflow-hidden">
      {/* Side Bar */}
      <aside className="bg-gray-800 text-gray-500 w-64 flex flex-col">
        {/* Logo */}
        <div className="h-20 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Logo</span>
        </div>
      <NavsideBar/>
        <footer className="py-4 px-6">
          <span className="text-gray-400">&copy; {new Date().getFullYear()} Your Company</span>
        </footer>
      </aside>
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        {/* Content goes here */}
      </main>
    </div>
                                    
    
  )
}

export default Dashboard