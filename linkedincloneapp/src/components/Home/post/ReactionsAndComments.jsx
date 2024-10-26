import React, { useState } from "react";
import Reactions from "./Reactions";
import Comments from "./Comments";
import { useTheme } from "../../context/ThemeContext";

const ReactionsAndComments = ({ likeProps, props }) => {
  // console.log(likeProps);
  const [show, setShow] = useState(false);

  const { themeName, toggleTheme } = useTheme();
  const reactionStyles = {
    width: '100%',
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 

  return (
    <div style={reactionStyles}>
      <Reactions likeProps={likeProps} show={{ show, setShow }} props={props} />
      {show && <Comments likeProps={likeProps} />}
    </div>
  );
};

export default ReactionsAndComments;
