import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  FlexContainer,
  ReactionsContainer,
  SingleReaction,
} from "../../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios";
import { likePostContext } from "../../context/LikePostContext";
import { postContext } from "../../context/PostContext";
import { ToasterMessage } from "../../helper/ToastHelper";
import { useTheme } from "../../context/ThemeContext";


const Reactions = ({ likeProps, show, props }) => {
  // const [likedPost, setLikedPost] = useState(false);

  // const { like, setLike } = likePostContext();
  // console.log(props);
  // const { refetchingPost, setRefetchingPost } = props;
  const showComments = show.show;
  const setShowComments = show.setShow;
  // console.log(likeProps);
  const onHitLike = likeProps.onHitLike;
const[likedIcon, setLikedIcon] = useState(false);
  // setLikePost (likes)
  // console.log(setShowComments);
  // useEffect(()=>{
  //   likefetching();
  // },[])
  // const likefetching =()=>{
  //   setLike(post.likeCount)
  //   console.log('like', like);
  // }

  // console.log(likePost);

  // const handleLikeClick = async () => {
  //   setLikedPost(!likedPost);

  //   const response = await axios.post(
  //     `https://academics.newtonschool.co/api/v1/linkedin/like/${postId}`,
  //     "",
  //     {
  //       headers: {
  //         projectID: "hv45l4abtvvc",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
  //       },
  //     }
  //   );
  //   console.log(response);
  //   if (response.status === 201) {
  //     ToasterMessage("success", "Post liked successfully");
  //     setLikePost(likePost + 1);
  //   }
  // };

  const handleCommentClick = () => {
    // console.log(showComments);
    setShowComments(!showComments);
  };
  const handleClick = ()=>{
    setLikedIcon(!likedIcon);
    onHitLike();
  }

  const { themeName, toggleTheme } = useTheme();
  const reactStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 
  
  return (
    <Wrapper themeName={themeName}>
      <ReactionsContainer style={reactStyles}>
        <SingleReaction onClick={handleClick}>
          {/* <FaThumbsUp className="icon"/> */}
          {likedIcon ? (
            <FaThumbsUp className="icon" color="#378FE9" />
          ) : (
            <FaRegThumbsUp className="icon" />
          )}

          <h4 style={{color: reactStyles.color}}>Like</h4>
        </SingleReaction>
        <SingleReaction onClick={handleCommentClick} style={reactStyles}>
          <BsChatText style={reactStyles} />
          <h4 style={{color: reactStyles.color}}>Comment</h4> 
        </SingleReaction>
        <SingleReaction style={{ cursor: "not-allowed" }}>
          <BiRepost className="repost-icon" style={reactStyles}/>
          <h4 style={{color: reactStyles.color}}>Repost</h4>
        </SingleReaction>
        <SingleReaction style={{ cursor: "not-allowed" }}>
          <RiSendPlaneFill style={reactStyles}/>
          <h4 style={{color: reactStyles.color}}>Send</h4>
        </SingleReaction>
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Reactions;
