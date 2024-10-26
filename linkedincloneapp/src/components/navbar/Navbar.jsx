import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";

import logo from "./../../assets/Images/linkedin-logo.svg";

import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GoBellFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

import { NavbarWrapper } from "../Styles/Wrapper";
import {
  LinkContainer,
  NavbarContainer,
  NavbarLeftItems,
  NavbarLinkText,
  NavbarRightItems,
  SmallScreenMenuDisplay,
} from "../Styles/Style";
import SideMenu from "./SideMenu";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  
  // Use the theme context
  const { themeName, toggleTheme } = useTheme();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null; // Return null instead of undefined to prevent rendering
  }
  
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  // Define styles based on theme
  const navbarStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
    width: '98%', // Ensure navbar is full width
    display: 'flex', // Flex display for horizontal alignment
    flex: 1,
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Vertically center items
    position: 'fixed', // Optional: fix navbar at the top
    top: 0, // Optional: position at the top
    left: 0, // Optional: align to the left edge
    zIndex: 1000, // Optional: ensure it stays on top of other elements
    padding: '10px 20px', // Optional: padding for spacing
  };

  return (
    <NavbarWrapper themeName={themeName} style={{ width: '100%' }}> {/* Ensure the wrapper is full width */}
      <div style={navbarStyles}> {/* Apply styles to the outer div */}
        <NavbarLeftItems>
          <Link to="/">
            <Image src={logo} width={"45px"} className="navbar-logo" alt="logo" loading="lazy"/>
          </Link>
          <SearchBar />
        </NavbarLeftItems>
        <NavbarRightItems>
          <LinkContainer>
            <Link to="/" className="link" style={{ color: navbarStyles.color }}>
              <FaHome className="navbar-icon" />
              <NavbarLinkText style={{ color: navbarStyles.color }}>Home</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/mynetwork" className="link" style={{ color: navbarStyles.color }}>
              <HiUsers className="navbar-icon" />
              <NavbarLinkText style={{ color: navbarStyles.color }}>Network</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/jobs" className="link" style={{ color: navbarStyles.color }}>
              <BsFillBriefcaseFill className="navbar-icon" />
              <NavbarLinkText style={{ color: navbarStyles.color }}>Jobs</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/messaging" className="link" style={{ color: navbarStyles.color }}>
              <HiMiniChatBubbleLeftEllipsis className="navbar-icon" />
              <NavbarLinkText style={{ color: navbarStyles.color }}>Messaging</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/notifications" className="link" style={{ color: navbarStyles.color }}>
              <GoBellFill className="navbar-icon" />
              <NavbarLinkText style={{ color: navbarStyles.color }}>Notifications</NavbarLinkText>
            </Link>
          </LinkContainer>

          <UserDropdown />

          {/* Add the theme toggle button */}
          <button onClick={toggleTheme} className="theme-toggle-button" style={{ color: navbarStyles.color }}>
            {themeName === 'light' ? '🌙' : '☀️'} {/* Emoji for theme toggle */}
          </button>
        </NavbarRightItems>

        <SmallScreenMenuDisplay>
          {!showMenu ? (
            <IoMenu fontSize={"30px"} onClick={handleShowMenu} style={{ color: navbarStyles.color }} />
          ) : (
            <IoIosCloseCircle fontSize={'30px'} onClick={handleShowMenu} style={{ color: navbarStyles.color }} />
          )}
        </SmallScreenMenuDisplay>
        {showMenu && <SideMenu />}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
