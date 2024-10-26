import React from "react";
import {
  DiscoverMoreButton,
  GropusContainer,
  HrTag,
  UserDetails,
  UserImpression,
  UserInfoContainer,
  UserInfoDetailsContainer,
  UserPremium,
} from "../../Styles/Style";
import { Image } from "react-bootstrap";
import UserImage from "../../userImage/UserImage";
import { userContextApi } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Background from "../../../assets/Images/user-background.png";


const LeftGroup = () => {
    const navigate = useNavigate();
  const { userData } = userContextApi();
  console.log(userData, "userdata");
  const handleUserClick = () => {
    console.log("clicked");
    navigate(`/user/${userData._id}`);
  };

  const { themeName, toggleTheme } = useTheme();
  const userStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  }  

  return (
    <div themeName={themeName}>
      
      <div style={{margin: "10px 0px"}}>
        <UserInfoContainer style={userStyles}>
        <div style={userStyles}>
        <div style={{position:"relative", height:"60px"}}>
    
        <UserInfoContainer>
                <img src={Background} 
                  width={"100%"}
                  style={{ borderRadius: "5px 5px 0px 0px", color: userStyles.color }}
                  loading="lazy"
                  height={"60px"}
                  alt="background"
                /> 
                <div onClick={handleUserClick} style={{position:"absolute", top:"30px", left:'35%'}}>
              <UserImage style={{color: userStyles.color}}
                userImageStyling={{
                  width: "70px",
                  height: "70px",
                  fontSize: "30px",
                }}
                name={userData.name}
                profileImage={userData.profileImage}
              />
              </div>
             
         
            </UserInfoContainer>
            <div style={userStyles}>
          <UserInfoDetailsContainer style={{ marginTop: "10px" , background: userStyles}}>
            <GropusContainer style={userStyles}>
            <LinkContainer>
            <Link to="/group" className="link" style={{ color: userStyles.color }}>
            <h3 style={{color: userStyles.color}}>Groups</h3>
            </Link>
            </LinkContainer>
              
              <h3 style={{color: userStyles.color}}  >Events</h3>
              <h3 style={{color: userStyles.color}} >Followed Hashtags</h3>
            </GropusContainer>
            <HrTag />
            <DiscoverMoreButton>Discover more</DiscoverMoreButton>
          </UserInfoDetailsContainer>
        </div>  
        </div>
        </div>
        </UserInfoContainer>

     </div>
    </div>
  )
}

export default LeftGroup;