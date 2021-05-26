import React from 'react'
import TaskView from '../../components/taskview/taskview'
import './tasks.css'

export default function tasks(props){
    return(
        <div className="tasks-container">
            <div className="tasks-header">
                <p className="task-header-text">taches</p>
                <p className="task-header-text">date</p>
                <p className="task-header-text">état</p>
            </div>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={false}/>
            <TaskView affected={false}/>
            <TaskView affected={false}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={false}/>
            <TaskView affected={false}/>
            <TaskView affected={false}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>
            <TaskView affected={true}/>

        </div>
    )
}