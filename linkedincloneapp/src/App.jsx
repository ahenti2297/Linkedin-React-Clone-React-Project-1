import React from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";
import Login from "./pages/auth pages/login/Login";
import { accessTokenApi } from "./components/context/AccessTokenContext";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./components/context/ThemeContext"; // Import useTheme

const App = () => {
  const { accessToken } = accessTokenApi();
  const { themeName } = useTheme(); // Use the theme context

  // Define styles based on theme
  const appStyles = {
    backgroundColor: themeName === 'dark' ? '#121212' : '', // Dark background for dark theme
    color: themeName === 'dark' ? '' : '#000000', // White text for dark theme
    minHeight: '100vh', // Ensure it takes full height of viewport
  };

  return (
    <div className="app-wrapper" style={appStyles}> {/* Apply styles to app-wrapper */}
      <div className="app-container">
        <ToastContainer />
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Routers />
        </div>
      </div>
    </div>
  );
};

export default App;
