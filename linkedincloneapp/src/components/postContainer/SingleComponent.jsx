import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  PostMarginContainer,
  PostPara,
  PostUserDetails,
  SinglePost,
} from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { MdPublic } from "react-icons/md";
import PostMoreOptionModal from "../modal/PostMoreOptionModal";
import Carousel from "react-material-ui-carousel";
import DisplayReactions from "../Home/post/DisplayReactions";
import ReactionsAndComments from "../Home/post/ReactionsAndComments";
import axios from "axios";
import { ToasterMessage } from "../helper/ToastHelper";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const SingleComponent = ({ item, date, props }) => {
  const [likePost, setLikePost] = useState(0);
  const likeCount = item.likeCount;
  const navigate = useNavigate();
//   console.log(likeCount);

  const Item = (props) => {
    return (
      <img
        src={props.img}
        alt="image"
        width={"100%"}
        height={"350px"}
        loading="lazy"
      />
    );
  };

  useEffect(() => {
    setLikePost(likeCount)
  },[likeCount]);

  const { themeName, toggleTheme } = useTheme();
  const postcontainStyles = {
    backgroundColor: themeName === 'dark' ? '#3d3c3c' : '#ffffff', // Dark background for dark theme
    color: themeName === 'dark' ? '#ffffff' : '#000000', // White text for dark theme
  } 

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  const handleLikeClick = async () => {

    const response = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${item._id}`,
      "",
      {
        headers: {
          projectID: "60lfboqs7rjy",
          Authorization:
           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
        },
      }
    );
    // console.log(response);
    if (response.status === 201) {
      ToasterMessage("success", "Post liked successfully");
      setLikePost(likePost + 1);
    }
  };
//   console.log(item);
  return (
    <SinglePost key={item.author.createdAt} style={postcontainStyles}>
      <FlexContainer
        style={{ justifyContent: "space-between", marginRight: "25px" }}
      >
        <PostMarginContainer onClick={() => handleUserClick(item.author._id)}>
          <UserImage
            userImageStyling={{
              width: 35,
              height: 35,
              marginTop: "2px",
              backgroundColor: "green",
              color: "white !important",
              fontSize: 12,
            }}
            profileImage={item.author.profileImage}
            name={item.author.name}
          />

          <PostUserDetails style={{color: postcontainStyles.color}}>
            <h4>{item.author.name}</h4>
            <p>
              {date}hrs •{" "}
              <span>
                <MdPublic />
              </span>
            </p>
          </PostUserDetails>
        </PostMarginContainer>

        <PostMoreOptionModal id={item._id} props={props} />
      </FlexContainer>

      <PostPara>{item.content}</PostPara>
      <Carousel autoPlay={false} animation={"slide"} cycleNavigation={false} style={{color: postcontainStyles.color}}>
        {item?.images?.map((img) => (
          <Item img={img} />
        ))}
      </Carousel>
      <DisplayReactions style={{color: postcontainStyles.color}}
        props={{
          likes: item.likeCount,
          comments: item.commentCount,
          likePost: likePost,
          
        }}
      />
      <ReactionsAndComments style={{color: postcontainStyles.color}}
        likeProps={{
          likes: item.likeCount,
          postId: item._id,
       
          likePost: likePost,
          onHitLike : handleLikeClick
        }}
        props={props}
      />
    </SinglePost>
  );
};

export default SingleComponent;
