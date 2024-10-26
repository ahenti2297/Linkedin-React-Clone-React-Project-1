import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DropDownWrapper } from "../Styles/Wrapper"; 
import { DropDownContainer } from "../Styles/Style"; 
import UserImage from "../userImage/UserImage";
import logoutFunction from "../helper/Logout";
import { userContextApi } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { accessTokenApi } from "../context/AccessTokenContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme
import './UserDropdown.css'; // Your CSS styles

const UserDropdown = () => {
  const navigate = useNavigate();
  const { userData } = userContextApi();
  const { setAccessToken } = accessTokenApi();
  const { toggleTheme, themeName } = useTheme(); // Use the theme context
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleLogout = () => {
    logoutFunction();
    setAccessToken("");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Define styles based on theme
  const dropdownStyles = {
    backgroundColor: themeName === 'dark' ? '#333333' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
    border: `1px solid ${themeName === 'dark' ? '#444444' : '#dddddd'}`, // Optional border color
  };

  return (
    <DropDownWrapper>
      <div>
        <button onClick={toggleDropdown} className="dropdown-button">
          <UserImage
            userImageStyling={{
              width: 25,
              height: 25,
              marginTop: "2px",
              backgroundColor: "#0A66C2",
              color: "white !important",
              fontSize: 12,
            }}
            name={userData.name}
          />
          <DropDownContainer>
            Me
            <ArrowDropDownIcon />
          </DropDownContainer>
        </button>

        {isOpen && ( // Conditional rendering of the dropdown menu
          <div className="dropdown-menu" style={dropdownStyles}>
            <div className="dropdown-header" style={{ color: dropdownStyles.color }}>
              <UserImage
                userImageStyling={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#0A66C2",
                  fontSize: "30px",
                }}
                name={userData.name}
              />
              <div className="user-name">{userData.name}</div>
            </div>
            <Link to={`/user/${userData._id}`} className="dropdown-item" style={{ color: dropdownStyles.color }}>
              Profile
            </Link>
            <div className="dropdown-item" onClick={toggleTheme} style={{ color: dropdownStyles.color }}>
              {themeName === 'light' ? 'Enable Dark Theme' : 'Disable Dark Theme'}
            </div>
            <Link to="https://premium.linkedin.com/" className="dropdown-item" style={{ color: dropdownStyles.color }}>
              Try Premium
            </Link>
            <div className="dropdown-item" onClick={handleLogout} style={{ color: dropdownStyles.color }}>
              Sign out
            </div>
          </div>
        )}
      </div>
    </DropDownWrapper>
  );
};

export default UserDropdown;
