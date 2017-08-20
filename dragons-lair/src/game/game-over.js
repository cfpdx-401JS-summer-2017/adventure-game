import React from 'react';
import logo from './images/vector-dragons-lair-logo.jpg';
import deadDirk from './gifs/amiga-dragons-lair-esc-fire-ropes-disintegrate.gif';

export function GameOver(props) {
    return (
        <div className="main">
            <div>
                <img src={logo} alt="Dragon's Lair" height="50px"/>
                <br/>
                <img src={deadDirk} alt="Dirk is Dead" />
            </div>
            <h2>Game Over!</h2>
            <button onClick={props.handleClick} >PLAY AGAIN</button>
        </div>
    )
}
