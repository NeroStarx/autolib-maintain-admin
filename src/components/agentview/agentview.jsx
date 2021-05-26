import React from 'react'
import './agentview.css'
import image from '../../assets/profile_pic.png'

export default function AgentView(props){
    return(
        <div className="agent-view-container">
            <img src={image} alt="agent" className="agent-image"/>
            <div className="agent-divider-info">
                <p className="agent-title">Agent name</p>
                <p className="agent-subtitle">updated 10mins ago</p>
            </div>
            <div className="agent-divider-task">
                <p className="agent-title">Netoyer véhicule N200</p>
                <p className="agent-subtitle">20 mars 2021</p>
            </div>
        </div>
    )
}