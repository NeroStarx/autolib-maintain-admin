import React from 'react'
import AgentView from '../../components/agentview/agentview'
import Button from '../../components/button/button'
import './agents.css'


export default function agents(props){
    //let agentsList = props.Agents
    return(
        <div className="agent-list-container">
            <div className="header-actions">
                <input type="search" name="agnet-list-search" 
                    id="agent-list-search" 
                    placeholder="rechercher des agents"
                    className="agent-search"/>
                <Button text="Ajouter agent" mode="light_mode" />
            </div>
            <div className="agent-header-container">
                <p className="header-title">informations d'agent</p>
                <p className="header-title">Tache courante</p>
            </div>
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            <AgentView />
            {/*agentsList.map((index,agent)=>(
                <AgentView key={index} />
            ))*/}
        </div>
    )
}