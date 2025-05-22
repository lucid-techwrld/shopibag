import React, { useState } from "react";
import logo from "../assets/images/shopibag-logo1.png";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import PopUpToaster from "../components/PopUpToaster";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const { setIsLoggedIn } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      setLoggingIn(true);
      const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      if (data.success) {
        setPopupData({
          type: "success",
          header: "Login Succesfully",
          message: data.message,
          text: "Start shopping!!!",
        });
        setIsLoggedIn(true);
        navigate("/home");
      }
    } catch (error) {
      // Show error toaster
      setPopupData({
        type: "error",
        header: "Error",
        message: error.message,
        text: "",
      });
      console.error("Login error:", error);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      {/* Success/Error Popup */}
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)} // Close the toaster when clicked
        />
      )}

      {/* Logo and Welcome Text */}
      <div className="flex flex-col justify-center items-center text-black text-center mb-8">
        <img src={logo} alt="logo" className="w-[80px] h-[80px] mt-4 mb-4" />
        <p className="text-3xl font-bold">SHOPiBAG</p>
        <h1 className="text-lg font-medium mt-2">Welcome Back</h1>
        <p className="text-sm text-gray-600">Login to continue</p>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 flex flex-col bg-white shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          className="w-full h-12 py-2 px-4 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
          className="w-full h-12 py-2 px-4 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loggingIn}
          className={`w-full h-12 ${
            loggingIn ? "bg-blue-200" : "bg-blue-500"
          } text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center`}
        >
          {loggingIn ? (
            <VscLoading className="animate-spin text-2xl" />
          ) : (
            "Login"
          )}
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 underline">
            Create Account
          </a>
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <button className="w-full h-12 bg-white border border-gray-300 text-black font-bold rounded-lg hover:bg-gray-100 transition-all">
            Sign in with Google
          </button>
          <button className="w-full h-12 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all">
            Sign in with iCloud
          </button>
        </div>

        <p className="text-center text-sm italic mt-6 text-gray-500">
          Where fashion meets function
        </p>
      </form>
    </div>
  );
};

export default Login;
