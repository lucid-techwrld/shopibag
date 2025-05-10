import React from "react";

const PopUpToaster = ({ header, message, text, type, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close the toaster when clicked
    >
      <div
        className="bg-white px-6 py-4 rounded-lg shadow-lg text-center max-w-sm w-[70%] animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the toaster
      >
        <div className="flex justify-center mb-2">
          {type === "success" ? (
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <h2
          className={`text-xl font-semibold mb-1 ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {header}
        </h2>
        <p className="text-gray-600 text-sm">{message}</p>
        <p className="text-gray-500 text-xs">{text}</p>
      </div>
    </div>
  );
};

export default PopUpToaster;
