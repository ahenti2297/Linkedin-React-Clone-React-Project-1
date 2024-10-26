import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CommentAuthorDetails,
  CommentsContainer,
  FlexContainer,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import { CommentsWrapper, Wrapper } from "../../Styles/Wrapper";
import SingleComment from "./SingleComment";
import { fetchingPost } from "../../helper/FetchingPost";
import { Avatar } from "@mui/material";
import { useTheme } from "../../context/ThemeContext";

const DisplayingComments = ({ likeProps, reFetchComments, setRefetchComments}) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    handleFetchingComments();
  }, [reFetchComments]);

  const postId = likeProps.postId;
  
  const { themeName, toggleTheme } = useTheme();
  const displaycommentStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 

  const handleFetchingComments = async () => {
    // console.log("comment");
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/post/${postId}/comments`,
      {
        headers: {
          projectID: "hv45l4abtvvc",
        },
      }
    );
    // console.log(response);
    if (response.status === 200) {
      setComments(response.data.data);
    }
  };
  const deleteComment = async(commentId) => {
    try {
      const data = await axios.delete(`https://academics.newtonschool.co/api/v1/linkedin/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
          projectID: "60lfboqs7rjy",
          Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        },
      });
      setRefetchComments(!reFetchComments);
      if (data.message === "Comment deleted successfully") {
        alert(data.message);
        setComments(comments.filter(comment => comment._id !== commentId));
       
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  

  
  // console.log("comments", comments);
  return (
    <CommentsWrapper >
      {comments?.map((comment,index) => {
        return (
          <CommentsContainer  key={index}>
            <SingleComment style={displaycommentStyles} comment={comment} />
                                      <button onClick={() => deleteComment(comment._id)} 
                                        className='deleteButton'>Delete</button>
          </CommentsContainer>
        );
      })}
    </CommentsWrapper>
  );
};

export default DisplayingComments;
