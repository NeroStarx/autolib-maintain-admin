import React from 'react'
import {Switch
    , Route
    , useRouteMatch,
    Redirect} from 'react-router-dom'

import SideBar from '../../components/sidebar/sidebar'
import AgentView from '../agents/agents'
import TaskView from '../tasks/tasks'
import VehiculeView from '../vehicules/vehicules'

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
          view: () => <div className="dashboard-view">
                          <AgentView />
                      </div>
        },
        {
          path: url + "/tasks",
          name: "Taches",
          icon: TaskIcon,
          view: () => <div className="dashboard-view">
                          <TaskView />
                      </div>
        },
        {
          path: url + "/vehicules",
          name: "Véhicules",
          icon: CarIcon,
          view: () => <div className="dashboard-view">
                          <VehiculeView />
                      </div>
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