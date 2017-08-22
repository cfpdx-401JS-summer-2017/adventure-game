import React from 'react';
import logo from './images/icon-dragons-lair-logo-512x512.png';

export function Splash(props) {
    return (
        <div className="main">
            <img src={logo} alt="Dragon's Lair" />
            <h2>Save Princess Daphne!</h2>
            <button className="button" onClick={props.handleClick} >PLAY</button>
        </div>
    )
}
