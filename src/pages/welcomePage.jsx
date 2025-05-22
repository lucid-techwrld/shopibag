import React from "react";
import welcomeIcon from "../assets/icons/undraw_welcome-cats_tw36.svg";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-white">
      {/* Background Patterns / Vectors */}

      {/* Welcome Text */}
      <div className="z-10 text-gray-800 text-center px-4">
        <img src={welcomeIcon} alt="welcome" />
        <h2 className="text-2xl font-bold mb-2 md:text-4xl">Welcome to</h2>
        <h1 className="text-5xl font-extrabold mb-4 md:text-7xl text-blue-500 drop-shadow-lg">
          SHOPiBAG
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Where fashion meets function
        </p>
      </div>

      {/* Get Started Button */}
      <div className="z-10 mt-16">
        <button
          onClick={handleClick}
          className="py-4 px-16 bg-blue-500 text-white text-xl font-bold rounded-full shadow-xl hover:bg-blue-400 transition-all md:py-5 md:px-20 md:text-2xl"
        >
          Get Started
        </button>
      </div>

      {/* Footer Text */}
      <div className="z-10 mt-10">
        <p className="italic text-sm md:text-lg text-gray-500">
          Explore the world of fashion and functionality...
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
