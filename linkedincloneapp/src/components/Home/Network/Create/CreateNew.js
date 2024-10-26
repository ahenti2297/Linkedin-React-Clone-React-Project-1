// import React from 'react'
import React, { useState } from 'react';
import './CreateNew.css'; 
import backg from './A/background.png';
import group from './A/group.png';
import Box from '@mui/material/Box';
import * as Yup from "yup";
import Modal from '@mui/material/Modal';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Description, Group, Height } from '@mui/icons-material';


import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useContext } from 'react';
import PostService from '../../../service/PostService';
import noteContext from '../../../Context/noteContext';

const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',   
    boxShadow: 24,
    p: 4,
  };

export default function CreateNew() {
    
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const { setUserDetail} = useContext(noteContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    GroupName: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    Description: Yup.string()
      .required("Description is required")
      .min(10, "Description is too short! Must be at least 10 characters."),
  });

  const formik = useFormik({
    initialValues: {
      GroupName: '',
      Description: '',
    },
    
  });



  return (
    <div className='createCard'>
       
            <Box sx={style}>
                <div className='createProfileData'>
                    <div className='createBackground'>
                        <img className='createProfileImg' src={backg} alt=''/>
                        {/* <ModeEditOutlineIcon className='editPen'/>       */}
                    </div>
                                                            
                        <img className='profileImg' src={group} alt=''/>
                        {/* <ModeEditOutlineIcon className='editProfile'/> */}
                </div>
                <ul className='createContainer'>
                  <li className='group-name'>  
                  <label className="groupName" htmlFor='outlined-basic'>Group Name</label><br/>
                    <OutlinedInput
                        style={{ width: 1000 }}
                        name='Group Name'
                        id="outlined-basic"
                        placeholder="Group Name"
                        value={formik.values.GroupName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.GroupName && Boolean(formik.errors.GroupName)}
                      />
                      {formik.touched.GroupName && formik.errors.GroupName && (
                        <div className="error">{formik.errors.GroupName}</div>
                      )}

                  </li>
                  <li className='group-description'>
                  <label className="description" htmlFor='outlined-basic'>Description</label><br/>
                    <OutlinedInput
                        style={{ width: 1000 }}
                        name='Description'
                        id="outlined-basic"
                        placeholder="Description"
                        value={formik.values.Description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.Description && Boolean(formik.errors.Description)}
                      />
                      {formik.touched.Description && formik.errors.Description && (
                        <div className="error">{formik.errors.Description}</div>
                      )}

                  </li>
                </ul>
                <button className='createBtn' >Create</button>
            </Box>
      </div>
      
  );
}
