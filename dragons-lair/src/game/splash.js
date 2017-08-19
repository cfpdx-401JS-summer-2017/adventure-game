import React from 'react';
import logo from './images/icon-dragons-lair-logo-512x512.png';

export function Splash() {
    return (
        <div className="main">
            <img src={logo} alt="logo" />
            <h2>Save Princess Daphne!</h2>
            <button>PLAY!</button>
        </div>
    )
}
