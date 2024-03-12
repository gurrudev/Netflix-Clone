import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import {auth} from '../../helper/firebase'
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function ProfileScreen() {

  const user = useSelector(selectUser)
  const navigate = useNavigate()
  // console.log(user)

  return (
    <div className='profile-screen'>
        <Nav/>
        <div className="profile-screen-body">
          <h1>Edit Profile</h1>
          <div className="profile-screen-info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" srcSet="" />

            <div className="profile-screen-details">
              <h2>{user.email}</h2>
              <div className="profile-screen-plans">
                <h3>Plans</h3>
                <button className='profile-screen-signOut-btn' onClick={()=>{ auth.signOut(); navigate('/')}}>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileScreen