import React from 'react'
import './login.css'
import Form from '../../components/form/loginform'
import Button from '../../components/button/button'

export default function login(props){
    return(
        <div className="main-header-container">
            <div className="description">
                <p className="sub-title">Louer une voiture</p>
                <p className="title">librement et rapidement</p>
                <p className="text">Nous vous offrons les meileurs services</p>
                <p className="text">Inscrivez vous, c’est gratuit !</p>
                <Button text="Savoir plus" mode="dark_mode"/>
            </div>
            <div >
                <Form onClick={props.onClick}/>
            </div>
        </div>
    )
}