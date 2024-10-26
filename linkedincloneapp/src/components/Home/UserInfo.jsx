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
} from "../Styles/Style";
import { Image } from "react-bootstrap";

import Background from "./../../assets/Images/user-background.png";
import UserImage from "../userImage/UserImage";
import { userContextApi } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const UserInfo = () => {
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
      <div style={{margin: "20px 20px 0 -100px"}}>
      <UserInfoContainer style={userStyles} >
        <div style={userStyles}>
        <UserInfoDetailsContainer >
          <div style={{position:"relative", height:"60px"}}>
            <Image 
              src={Background}
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
          </div>

          <UserDetails style={userStyles}>
            <h4>{userData.name}</h4>
            <p>HTML | CSS | JavaScript | React</p>
          </UserDetails>
          <HrTag style={userStyles}/>
          <div style={userStyles}>
            <UserImpression>
              <p>Profile viewers</p>
              <span>80</span>
            </UserImpression>
            <UserImpression>
              <p>Post impressions</p>
              <span>10</span>
            </UserImpression>
          </div>
          <HrTag />
          <UserPremium style={userStyles}>
            <h3 >Access exclusive tools & insights</h3>
            <Link style={{color: userStyles.color}} className="link" to="https://premium.linkedin.com/">
              Try Premium for free
            </Link>
          </UserPremium>
        </UserInfoDetailsContainer>

        <div style={userStyles}>
          <UserInfoDetailsContainer style={{ marginTop: "10px" , background: userStyles}}>
            <GropusContainer style={userStyles}>
            <Link to="/group" className="link" style={{ color: userStyles.color }}>
              <h3 style={{color: userStyles.color}}>Groups</h3>
              </Link>
              <h3 style={{color: userStyles.color}}  >Events</h3>
              <h3 style={{color: userStyles.color}} >Followed Hashtags</h3>
            </GropusContainer>
            <HrTag />
            <DiscoverMoreButton>Discover more</DiscoverMoreButton>
          </UserInfoDetailsContainer>
        </div>
        
        </div>
      </UserInfoContainer>
      </div>
     
    </div>
  );
};

export default UserInfo;
