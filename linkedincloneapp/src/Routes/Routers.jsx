import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/public pages/Home";
import SearchDisplay from "../pages/public pages/search display pages/SearchDisplay";
import { RoutesWrapper } from "../components/Styles/Wrapper";
import Login from "../pages/auth pages/login/Login";
import Signup from "../pages/auth pages/signup/Signup";
import UserProfile from "../components/userProfile/UserProfile";
import Error from "../components/error/Error";
import UnderConstruction from "../pages/underConstruction pages/UnderConstruction";
import { useTheme } from "../components/context/ThemeContext";
import Network from "../components/Home/Network/index";


const Routers = () => {
  const location = useLocation();
  const { themeName, toggleTheme } = useTheme();
  const displaypostStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 
  return (
    <RoutesWrapper loc = {location.pathname} style={displaypostStyles}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<Network/>} />
        {/* <Route path="/group" element={<Join/>} /> */}
        <Route path="/jobs" element={<UnderConstruction />} />
        <Route path="/messaging" element={<UnderConstruction />} />
        <Route path="/notifications" element={<UnderConstruction />} />
        <Route path="/search/:searchTerm" element={<SearchDisplay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UserProfile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </RoutesWrapper>
  );
};

export default Routers;
