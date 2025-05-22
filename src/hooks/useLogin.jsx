import { useState, useContext, createContext, useEffect } from "react";
import PopUpToaster from "../components/PopUpToaster";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/checkLogin`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();
        if (data.success) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setPopupData({
          type: "error",
          header: "Error",
          message: error.message || "Failed to check login status.",
          text: "",
        });
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {popupData && (
        <PopUpToaster
          type={popupData.type}
          header={popupData.header}
          message={popupData.message}
          text={popupData.text}
          onClose={() => setPopupData(null)}
        />
      )}
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
