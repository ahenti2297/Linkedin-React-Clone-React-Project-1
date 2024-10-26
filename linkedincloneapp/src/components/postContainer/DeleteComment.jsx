import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from '@mui/material/Menu';
import { MdDeleteForever } from "react-icons/md";
import { ToasterMessage } from "../helper/ToastHelper";
import axios from "axios";
import { likePostContext } from "../context/LikePostContext";
import { MenuItem } from "@mui/material";
const style = {
  position: "absolute",
  top: "42%",
  left: "55%",
  transform: "translate(60%, -50%)",
  width: "30px",
  height: "15px",
  bgcolor: "white",
  borderRadius: "5px",
  boxShadow: 24,
  p: "5px 5px 20px 5px",
  // display:"flex",
  // alignItems:"center",
  // justifyContent:"center"
};
const DeleteComments = ({ id, props }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { like, setLike } = likePostContext();

  const { refetchingPost, setRefetchingPost } = props;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://academics.newtonschool.co/api/v1/linkedin/comment/${commentId}`,
        {
          headers: {
            projectID: "60lfboqs7rjy",
            Authorization:
             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDFmN2JiYTUyYmMxYjdhMmNhN2EwYSIsImlhdCI6MTcyNTA4NzcyMCwiZXhwIjoxNzU2NjIzNzIwfQ.jykhOzvIzy9Z1tnbnrTcSDF7HWw2KUoxdbqAWaqoOXM",
          },
        }
      );
      console.log(response);
      if (response.status === 204) {
        ToasterMessage("info", "Post deleted");
        // setLike(like + 1);
        // window.location.reload();
        if (refetchingPost) {
          setRefetchingPost(!refetchingPost);
        }
        handleClose();
      }
    } catch (error) {}
  };

  return (
    <>           
            <div>
                <BsThreeDots onClick={handleMenu}/>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDelete}><MdDeleteForever/></MenuItem>
               
              </Menu>
            </div>
    </>
  );
};

export default DeleteComments;
