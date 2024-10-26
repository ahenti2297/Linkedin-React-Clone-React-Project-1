import React, { useEffect, useState } from "react";
import {
  CommentInput,
  CommentsContainer,
  FlexContainer,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import DisplayingComments from "./DisplayingComments";
import { Button } from "react-bootstrap";
import axios from "axios";
import { userContextApi } from "../../context/UserContext";
import { ToasterMessage } from "../../helper/ToastHelper";
import { accessTokenApi } from "../../context/AccessTokenContext";
import { useTheme } from "../../context/ThemeContext";

const Comments = ({ likeProps }) => {
  const [showPostButton, setShowPostButton] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [reFetchComments, setRefetchComments] = useState(false);

  const { userData } = userContextApi();
  const {accessToken} = accessTokenApi();

  const postId = likeProps.postId;
  // const commentId = likeProps.commentId;

  const handleCommentChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value.trim().length > 0 && e.target.value != "") {
      setShowPostButton(true);
      setCommentText(e.target.value);
    } else {
      setShowPostButton(false);
    }
  };
  // console.log(commentText);

  const handlePostingComment = async () => {
    try {
      const response = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/comment/${postId}`,
        {
          content: commentText,
        },
        {
          headers: {
            projectID: "60lfboqs7rjy",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        ToasterMessage("success", response.data.message);
        setCommentText("");
        setRefetchComments(!reFetchComments);
      }
    } catch (error) {
      console.log(error);
      ToasterMessage("error", "Something went wrong");
    }
  };

  const { themeName, toggleTheme } = useTheme();
  const commentStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 

  return (
    <div>
      <CommentsContainer themeName={themeName}>
        <UserImage style={commentStyles}
          userImageStyling={{
            width: 35,
            height: 35,
            marginTop: "2px",
            backgroundColor: "#0A66C2",
            color: "white !important",
            fontSize: 12,
          }}
          name={userData.name}
          profileImage={userData.profileImage}
        />
        <CommentInput style={commentStyles}
          type="text"
          onInput={handleCommentChange}
          value={commentText}
        />
        {showPostButton && <Button onClick={handlePostingComment}>Post</Button>}
        {/* {showPostButton && <Button onClick={deleteComment}>Delete</Button>} */}
      </CommentsContainer>
      <DisplayingComments style={commentStyles}
        likeProps={likeProps}
        reFetchComments={reFetchComments}
        setRefetchComments={setRefetchComments}
      />
    </div>
  );
};

export default Comments;
