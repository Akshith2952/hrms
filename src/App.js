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
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<MainHome />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/About" element={<About />} />
      </Routes>
      <Dashboard/>
      <Routes>
        <Route path="/PersonalInformationForm" element={<PersonalInformationForm />}/>
      <Route path="/EducationForm" element={<EducationForm />}/>
      <Route path="/DependentsForm" element={<DependentsForm />}/>
      <Route path="/WorkExperienceForm" element={<WorkExperienceForm />}/>
      <Route path="/LeaveApplicationForm" element={<LeaveApplicationForm />}/>
      <Route path="/SalaryForm" element={<SalaryForm/>}/>
      <Route path="/CalendarWithHolidays" element={<CalendarWithHolidays/>}/>
   
      </Routes>
      
    </>
  );
}

export default App;
