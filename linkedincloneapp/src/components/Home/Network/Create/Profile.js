// import React from 'react'
import React, { useState } from 'react';
import './Profile.css'; 
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


export default function Profile() {
    
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const { setUserDetail} = useContext(noteContext);
  const navigate = useNavigate();


  return (
    <div className='createCard'>
       
                <div className='createProfileData'>
                    <div className='createBackground'>
                        <img className='createProfileImg' src={backg} alt=''/>
                        {/* <ModeEditOutlineIcon className='editPen'/>       */}
                    </div>
                                                            
                        <img className='profileImg' src={group} alt=''/>
                        {/* <ModeEditOutlineIcon className='editProfile'/> */}
                </div>
                <ul className='profileContainer'>
                 
                </ul>
             
      </div>
      
  );
}
