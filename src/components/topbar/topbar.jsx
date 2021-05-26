import React from 'react'
import {
    NavLink} from 'react-router-dom'

import profilePic from '../../assets/profile_pic.png'
import notificationIcon from '../../assets/notification_icon.png'
import './topbar.css'

export default function topBar(props){
    return(
        <div className="wrapper">
            <div className="topbar-container">
                <p className="view-name">{props.viewTitle}</p>
                <NavLink to={props.route.path}>
                    <img src={notificationIcon} 
                            alt="notifications" 
                            className="notification-icon"/>
                </NavLink>
                <p className="profile-name">{props.profileName}</p>
                <img src={profilePic} alt="profile" className="topbar-picture" />
            </div>
        </div>
    )
}