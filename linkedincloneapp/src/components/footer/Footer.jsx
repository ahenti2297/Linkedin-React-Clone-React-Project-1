import React from "react";
import { FooterContainer } from "../Styles/Style";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { themeName, toggleTheme } = useTheme();
  const footerStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 
  return (
    <FooterContainer >
      <Link to="https://about.linkedin.com/">
        <p style={{color: footerStyles.color}}>About</p>
      </Link>
      <Link to="https://www.linkedin.com/accessibility">
        <p style={{color: footerStyles.color}}>Accessibility</p>
      </Link>
      <Link to="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_feed">
        <p style={{color: footerStyles.color}}>HelpCenter</p>
      </Link>
      <Link to="https://www.linkedin.com/legal/privacy-policy">
        <p style={{color: footerStyles.color}}>Privacy & Terms</p>
      </Link>
      <Link to="https://www.linkedin.com/help/linkedin/answer/a1342443/">
        <p style={{color: footerStyles.color}}>Ad Choices</p>
      </Link>
      <Link to="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart">
        <p style={{color: footerStyles.color}}>Advertising</p>
      </Link>
      <Link to="https://business.linkedin.com/en-in/talent-solutions?trk=flagship_nav&veh=li-header-dropdown-lts-control-en-in&src=li-nav">
        <p style={{color: footerStyles.color}}>Business Services</p>
      </Link>
      <Link to="https://play.google.com/store/apps/details?id=com.linkedin.android&hl=en_IN">
        <p style={{color: footerStyles.color}}>Get the LinkedIn app</p>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
