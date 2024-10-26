import React from 'react'
import './Profile.css'
// import Nav from '../../navigation/Nav'
import Navbar from "../../../navbar/Navbar"
import Profile from './Profile'
import CreateNew from './CreateNew'

export default function Join() {
  return (
    <div>
        <Navbar/>
        <CreateNew className='createIdea'/>
    </div>
  )
}
