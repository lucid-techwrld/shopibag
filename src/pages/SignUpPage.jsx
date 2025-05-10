import React, { useState } from "react";
import logo from "../assets/images/shopibag-logo1.png";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import PopUpToaster from "../components/PopUpToaster"; // Import the PopUpToaster component

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingAccount, setCreatingAccount] = useState(false);
  const [popupData, setPopupData] = useState(null); // State for popup data

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      setCreatingAccount(true);
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/create-account`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // Show error toaster
        setPopupData({
          type: "error",
          header: "Error",
          message: data.message || "Something went wrong. Please try again.",
          text: "",
        });
        return;
      }

      if (data.success) {
        // Show success toaster
        setPopupData({
          type: "success",
          header: "Account Created Successfully!",
          message: "You can now log in to your account.",
          text: "Redirecting to login page...",
        });
        setTimeout(() => {
          setPopupData(null); // Hide popup after 3 seconds
          navigate("/login"); // Navigate to login page
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setPopupData({
        type: "error",
        header: "Error",
        message: error.message || "Something went wrong. Please try again.",
        text: "",
      });
    } finally {
      setCreatingAccount(false);
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
        <h1 className="text-lg font-medium mt-2">Welcome to Shopibag</h1>
        <p className="text-sm text-gray-600">Where fashion meets function</p>
      </div>

      {/* Sign-Up Form */}
      <form
        onSubmit={handleSubmit}
        className="p-8 flex flex-col bg-white shadow-lg rounded-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          className="w-full h-14 py-2 px-4 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="new-password"
          className="w-full h-14 py-2 px-4 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            name="checkbox"
            id="checkboxID"
            className="w-5 h-5"
          />
          <label htmlFor="checkboxID" className="text-sm text-gray-700">
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
          disabled={creatingAccount}
        >
          {creatingAccount ? (
            <VscLoading className="animate-spin text-2xl" />
          ) : (
            "Create Account"
          )}
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <button className="w-full h-14 bg-white border border-gray-300 text-black font-bold rounded-lg hover:bg-gray-100 transition-all">
            Sign in with Google
          </button>
          <button className="w-full h-14 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all">
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

export default SignUp;
