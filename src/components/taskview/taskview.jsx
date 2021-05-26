import React from 'react'
import './taskview.css'

export default function taskView(props){
    return(
        <div className="task-view-container">
            <div className="task-bubble"></div>
            <p className="task-title">this is a task</p>
            <p className="task-subtitle">20 may 2021</p>
            <div className={(props.affected ? "affected" : "non-affected") +" task-state"} >
                {props.affected ? "Affecté" : "Libre"}
            </div>
        </div>
    )
}