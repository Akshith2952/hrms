import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import NavBar from "./Navbar"; // Import the NavBar component

const Login = ({ history }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/employee/Home");
    }
  }, [history, user, navigate]);

  const handleInputs = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setUser({ ...user, [key]: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (email.toString() === "hr@gmail.com") {
      navigate("/hr/dashboard");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "http://localhost:5000/signin",
          { email, password },
          config
        );
        navigate("/employee/Home");
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
      } catch (err) {
        setError("Invalid email or password"); // Set error message
        setLoading(false);
      }
    }
  };

  return (
    <>
      <NavBar /> {/* Include the NavBar component here */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <div className="flex justify-center">
              <img src="logo7.PNG" height="100" width="100" alt="Logo" />
            </div>
            <h3 className="text-2xl font-bold mt-2">Login to your account</h3>
          </div>
          {loading && <Loader />}
          {error && (
            <div className="text-red-600 text-sm text-center mt-2">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="mt-4">
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-600"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
