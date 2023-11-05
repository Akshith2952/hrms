import React from "react";
import NavBar from "./Navbar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="bg-blue-100 min-h-screen flex flex-col justify-between">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-blue-800">
            Welcome to EmpowHR
          </h1>
          <p className="mt-4 text-lg text-center text-gray-700">
            EmpowHR is a powerful human resources management system designed to
            streamline and automate various HR processes within your
            organization. Our goal is to empower your HR team, making their
            tasks more efficient and enabling them to focus on strategic
            initiatives.
          </p>
          <p className="mt-4 text-lg text-center text-gray-700">
            With EmpowHR, you can easily manage employee information, track
            leave and attendance, and generate insightful reports. Our intuitive
            interface and comprehensive features make it simple for HR
            professionals to handle the complexities of HR management.
          </p>
          <p className="mt-4 text-lg text-center text-gray-700">
            Experience the power of EmpowHR and revolutionize your HR
            operations. Join us today and unleash the potential of your HR
            department.
          </p>
        </div>
      </div>
      <footer className="bg-blue-800 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EmpowHR. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
