import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import PopUpToaster from "../components/PopUpToaster";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const { isLoggedIn } = useLogin();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/userProfile`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) throw new Error("Failed to fetch user profile");

        const data = await res.json();
        setUser({
          name: data.name || "John Doe",
          email: data.email,
          phone: data.phone || "+1234567890",
          address: data.address || "123 Main Street, City, Country",
          avatar:
            data.avatar ||
            "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
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
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)}
        />
      )}

      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">My Profile</h1>
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
            onClick={() => alert("Edit profile feature coming soon")}
          >
            <IoMdCreate />
            Edit Profile
          </button>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow-md"
          />

          <div className="flex-1 space-y-5">
            <ProfileField icon={<FaUser />} label="Name" value={user.name} />
            <ProfileField
              icon={<FaEnvelope />}
              label="Email"
              value={user.email}
            />
            <ProfileField icon={<FaPhone />} label="Phone" value={user.phone} />
            <ProfileField
              icon={<FaMapMarkerAlt />}
              label="Address"
              value={user.address}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-blue-600 text-lg mt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 font-semibold">{label}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  </div>
);

export default ProfilePage;
