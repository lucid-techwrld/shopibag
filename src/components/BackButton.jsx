import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = ({ label = "Go Back", fallbackRoute = "/home" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back to the previous route
    } else {
      navigate(fallbackRoute); // Navigate to the fallback route
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition-all md:px-6 md:py-3 md:text-lg"
    >
      <IoArrowBack className="text-xl md:text-2xl" />
      <span className="font-semibold">{label}</span>
    </button>
  );
};

export default BackButton;
