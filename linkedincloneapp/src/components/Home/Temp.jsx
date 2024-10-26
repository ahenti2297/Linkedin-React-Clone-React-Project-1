import React, { useState } from "react";
import { ShowMoreButton, TempContainer, UlTemp } from "../Styles/Style";
import { useTheme } from "../context/ThemeContext";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Temp = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowChange = () => {
    setShowMore(!showMore);
  };

  const { themeName, toggleTheme } = useTheme();
  const TempStyles = {
    backgroundColor: themeName === 'dark' ? '#1a1a1a' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  
  }  
  return (
    <div themeName={themeName} style={{margin:"15px 0px"}}>
          <TempContainer style={TempStyles}>   
      <div style={TempStyles}>
          <h3>LinkedIn News</h3>
                <UlTemp >     
                  <li>
                    <h4>Top newsletters to follow</h4>
                    <p>17h ago</p>
                  </li>
                  <li>
                    <h4>All eyes on AI at Big Four</h4>
                    <p>1d ago</p>
                  </li>
                  <li>
                    <h4>Banks rethink maternity perks</h4>
                    <p>1d ago</p>
                  </li>
                  <li>
                    <h4>PSU insurers lose market share</h4>
                    <p>2d ago</p>
                  </li>
                  <li>
                    <h4>Kuku FM raises $25 million</h4>
                    <p>21h ago</p>
                  </li>
                  {showMore && (
                    <div>
                      <li>
                        <h4>Hiring trend shifts in IT</h4>
                        <p>2d ago</p>
                      </li>
                      <li>
                        <h4>Small cities lead festive buying</h4>
                        <p>14h ago</p>
                      </li>
                      <li>
                        <h4>Cricket returns to Olympics</h4>
                        <p>3h ago</p>
                      </li>
                    </div>
                  )}
                </UlTemp>
                {showMore ? (
                  <ShowMoreButton onClick={handleShowChange}>Show less <MdKeyboardArrowUp/></ShowMoreButton>
                ) : (
                  <ShowMoreButton onClick={handleShowChange}>
                    Show more <MdKeyboardArrowDown />
                  </ShowMoreButton>
                )}
      </div>
      
    </TempContainer>
    </div>
    
  );
};

export default Temp;
      