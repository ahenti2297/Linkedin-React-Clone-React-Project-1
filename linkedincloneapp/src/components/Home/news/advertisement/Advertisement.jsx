import React from "react";
import {
  AdImageContainer,
  AdvertisementContainer,

  FlexContainer,

  PremiumButton,
} from "../../../Styles/Style";
import UserImage from "../../../userImage/UserImage";
// import premiumLogo from "./../../../assets/Images/premium-logo.png";
import premiumLogo from "./../../../../assets/Images/premium-logo.png";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userContextApi } from "../../../context/UserContext";
import { useTheme } from "../../../context/ThemeContext";
import { AdsClick } from "@mui/icons-material";


const Advertisement = () => {
  const { userData } = userContextApi();
  const { themeName, toggleTheme } = useTheme();

  const adStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  }  
  const navigate = useNavigate();
  return (
    <AdvertisementContainer style={adStyles}>
      <div style={{color: adStyles.color}}>
      <FlexContainer style={{ justifyContent: "flex-end" }}>
        <p>Ad</p>
      </FlexContainer>
      <p>{userData.name}, unlock your full potential with LinkedIn Premium</p>
      <AdImageContainer>
        <div onClick={() => navigate(`/user/${userData._id}`)}>
          <UserImage
            userImageStyling={{
              width: "70px",
              height: "70px",
            }}
            name={userData.name}
          />
        </div>
        <Link to="https://premium.linkedin.com/">
          <Image
            src={premiumLogo}
            width={65}
            // onClick={() => navigate("/premium")}
            style={{ cursor: "pointer" }}
            alt="premiumLogo"
            loading="lazy"
          />
        </Link>
          </AdImageContainer>
          <p style={{color: adStyles.color}}>See who's viewed your profile in the last 90 days</p>
          <Link to="https://premium.linkedin.com/">
            <PremiumButton>Try for free</PremiumButton>
          </Link>
      </div>
      
    </AdvertisementContainer>
  );
};

export default Advertisement;
