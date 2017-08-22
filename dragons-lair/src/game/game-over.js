import React from 'react';
import logo from './images/dragons-lair-logo.png';
import dirkDaphne from './images/icon-dirk-and-daphne-512x512.png'

export function Lose(props) {
    return (
        <div className="main">
            <div>
                <img src={logo} alt="Dragon's Lair" height="50px"/>
                <br/>
                <video controls={false} autoPlay>
                    <source src="/videos/GameOver.mp4" />
                </video>
            </div>
            <h2>Game Over!</h2>
            <button className="button" onClick={props.handleClick} >TRY AGAIN</button>
        </div>
    )
}

export function Win(props) {
    return (
        <div className="main">
            <div>
                <img src={logo} alt="Dragon's Lair" height="50px"/>
                <br/>
                <img src={dirkDaphne} alt="Dirk and Daphne" />
            </div>
            <h2>You Saved Princess Daphne!</h2>
            <button className="button" onClick={props.handleClick} >PLAY AGAIN</button>
        </div>
    )
}
