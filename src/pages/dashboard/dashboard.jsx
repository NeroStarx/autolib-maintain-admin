import React from 'react'
import {Switch
    , Route
    , useRouteMatch,
    Redirect} from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar'
import AgentView from '../agents/agents'
import TaskView from '../tasks/tasks'
import VehiculeView from '../vehicules/vehicules'
import TopBar from '../../components/topbar/topbar'

import TaskIcon from '../../assets/task.svg'
import AgentIcon from '../../assets/agent.svg'
import CarIcon from '../../assets/car.svg'
import './dashboard.css'


export default function MaintaintDashboard(props){
    let {parent, url} = useRouteMatch()
    const routes = [
        {
          path: url + "/agents",
          name: "Agents",
          icon: AgentIcon,
          view: () => getDashboardView("agent")
        },
        {
          path: url + "/tasks",
          name: "Taches",
          icon: TaskIcon,
          view: () => getDashboardView("task")
        },
        {
          path: url + "/vehicules",
          name: "Véhicules",
          icon: CarIcon,
          view: () => getDashboardView("Vehicules")
        }
      ];

    return(
        <div className="dashboard-container">
            <SideBar paths={routes}/>
            <Redirect from={url} to={url + "/agents"} />
            <Switch >
                {routes.map((route, index)=>(
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.view />}
                    />
                ))}
            </Switch>
        </div>
    )
}

function getDashboardView(mode){
        switch(mode){
            case "agent": {
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Agents" profileName="aaron nerostarx"/>
                        <div className="view">
                            <AgentView />
                        </div>
                    </div>)
            }
            case "task":{
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Taches" profileName="aaron nerostarx"/>
                        <div className="view">
                            <TaskView />
                        </div>
                    </div>)
            }
            default : {
                return(
                    <div className="dashboard-view">
                        <TopBar viewTitle="Véhicules" profileName="aaron nerostarx"/>
                        <div className="view">
                            <VehiculeView />
                        </div>
                    </div>)
            }
        }
        
}