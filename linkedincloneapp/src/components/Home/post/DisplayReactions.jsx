import React from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  DisplayReactionsContainer,
  FlexContainer,
  LikeDisplayContainer,
} from "../../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
const DisplayReactions = ({ props }) => {
  // const likes = props.likes;
  const comments = props.comments;
  const likePost = props.likePost;
  
  const { themeName, toggleTheme } = useTheme();
  const displayreactionStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 
  
  return (
    <Wrapper themeName={themeName}>
      <DisplayReactionsContainer style={displayreactionStyles}>
        <FlexContainer>
          <LikeDisplayContainer>
            <FaThumbsUp className="like-icon" />
          </LikeDisplayContainer>
          <h4>{likePost}</h4>
        </FlexContainer>
        <FlexContainer>
          <h4>{comments} comments</h4>
        </FlexContainer>
      </DisplayReactionsContainer>
    </Wrapper>
  );
};

export default DisplayReactions;
