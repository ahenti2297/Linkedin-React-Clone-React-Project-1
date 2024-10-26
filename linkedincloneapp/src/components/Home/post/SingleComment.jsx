import React, { useEffect, useState } from "react";
import UserImage from "../../userImage/UserImage";
import { CommentAuthorDetails } from "../../Styles/Style";
import { fetchAuthorDetails } from "../../helper/GetAuthorDetails";
import { useTheme } from "../../context/ThemeContext";

const SingleComment = ({ comment }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchingUser();
  }, []);

  const fetchingUser = async () => {
    const fetchedData = await fetchAuthorDetails(comment.author);
    if (fetchedData) {
      setUser(fetchedData.userDetails);
    }
  };
  console.log("user", user);

  const { themeName, toggleTheme } = useTheme();
  const singlecommentStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 

  return (
    <>
      <UserImage style={singlecommentStyles}
        userImageStyling={{ backgroundColor: "black", fontSize: "18px" }}
        name={user.name}
        profileImage={user.profileImage}
      />
      
      <CommentAuthorDetails style={singlecommentStyles}>
        <h4>{user.name}</h4>
        <p>{comment.content}</p>
        
      </CommentAuthorDetails>
    </>
  );
};

export default SingleComment;
