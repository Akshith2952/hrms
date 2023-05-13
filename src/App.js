//import logo from "./logo.svg";
//import Login from "./components/Login";
import "./App.css";
import NavBar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MainHome from "./components/MainHome";
import PersonalInformationForm from "./components/PersonalInformationForm";
import EducationForm from "./components/EducationForm";
import DependentsForm from "./components/DependentsForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import LeaveApplicationForm from "./components/LeaveApplicationForm";
import SalaryForm from "./components/SalaryForm";
import CalendarWithHolidays from "./components/CalendarWithHolidays";
import HR from "./components/HR/HR";
import Employee from "./components/Employee";
import HRDashBoard from "./components/HR/HRDashBoard";
// import Dashboard from "./components/Dashboard";


function App() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr" element={<HR />}>
          <Route path="dashboard" element={<HRDashBoard />} />
          <Route path="salary/add" element={<HRDashBoard />} />
          <Route path="employee/add" element={<HRDashBoard />} />
        </Route>

        {/* <Route path="/hr/dashboard" element={<HRDashBoard /> } /> */}
        <Route path="/employee" element={<Employee />} />
        <Route path="/Home" element={<MainHome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/PersonalInformationForm" element={<PersonalInformationForm />} />
        <Route path="/EducationForm" element={<EducationForm />} />
        <Route path="/DependentsForm" element={<DependentsForm />} />
        <Route path="/WorkExperienceForm" element={<WorkExperienceForm />} />
        <Route path="/LeaveApplicationForm" element={<LeaveApplicationForm />} />
        <Route path="/SalaryForm" element={<SalaryForm />} />
        <Route path="/CalendarWithHolidays" element={<CalendarWithHolidays />} />
      </Routes>

    </>
  );
}

export default App;
