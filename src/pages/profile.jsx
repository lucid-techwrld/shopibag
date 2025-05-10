import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import PopUpToaster from "../components/PopUpToaster";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const { isLoggedIn } = useLogin(); // Check if the user is logged in
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false); // Stop loading if the user is not logged in
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/v1/auth/userProfile",
          {
            method: "GET",
            credentials: "include", // Include cookies in the request
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const data = await res.json();
        setUser({
          email: data.email, // Fetch email from the API
          name: "John Doe", // Mock name
          phone: "+1234567890", // Mock phone number
          address: "123 Main Street, City, Country", // Mock address
        });
      } catch (error) {
        setPopupData({
          type: "error",
          header: "Error",
          message: error.message || "Failed to fetch user profile.",
          text: "",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-700">
          You must be logged in to view your profile.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-5 bg-gray-50">
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)}
        />
      )}
      <div className="w-full flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Your Profile</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          {/* Name */}
          <div className="mb-6 flex items-center gap-4">
            <FaUser className="w-10 h-10 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Name</h2>
              <p className="text-gray-700">{user.name}</p>
            </div>
          </div>

          {/* Email */}
          <div className="mb-6 flex items-center gap-4">
            <FaEnvelope className="w-10 h-10 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-700">{user.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6 flex items-center gap-4">
            <FaPhone className="w-10 h-10 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-700">{user.phone}</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 flex items-center gap-4">
            <FaMapMarkerAlt className="w-10 h-10 text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-gray-700">{user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
