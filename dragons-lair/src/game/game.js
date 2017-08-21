import React from 'react';
import logo from './images/dragons-lair-logo.png';
import placeholderPicture from './images/vector-dirk-and-daphne.jpg';

export function Game(props) {

    return (
        <div className="main">

            <div>
                <img src={logo} alt="Dragon's Lair" height="50px"/>
                <br/>
                <img src={placeholderPicture} alt="Dirk Saves Daphne" height="400px"/>

                {/* <Player */}
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Act</th>
                            <th>Scene</th>
                            <th>Lives</th>
                            <th>Coins</th>
                        </tr>
                        <tr>
                            <td>{props.act}</td>
                            <td>{props.scene}</td>
                            <td>{props.player.lives}</td>
                            <td>{props.player.coins}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <h2>{props.name}</h2>
            <h3>{props.instructions}</h3>

            <div>
                <MoveButton className="sword-button" label="S" value="SWORD" onClick = {props.handleClick} /> 

                <div>
                    <MoveButton className="button" label="up" value="UP" onClick = {props.handleClick} />
                    <MoveButton className="button" label="down" value="DOWN" onClick = {props.handleClick} />
                    <MoveButton className="button" label="right" value="RIGHT" onClick = {props.handleClick} />
                    <MoveButton className="button" label="left" value="LEFT" onClick = {props.handleClick} />
                    <br/>
                    <MoveButton className="button" label="up-right" value="UPRIGHT" onClick = {props.handleClick} />
                    <MoveButton className="button" label="up-left" value="UPLEFT" onClick = {props.handleClick} />
                    <br/>
                    <MoveButton className="button" label="down-right" value="DOWNRIGHT" onClick = {props.handleClick} />
                    <MoveButton className="button" label="down-left" value="DOWNLEFT" onClick = {props.handleClick} />
                    <br/>
                    <MoveButton className="button" label="none" value="NONE" onClick = {props.handleClick} />
                </div>
                
                <MoveButton className="sword-button" label="S" value="SWORD" onClick = {props.handleClick} />
            </div>
        </div>
    )
}

function MoveButton({ label, value, className, onClick }) {
    return (
      <button value={value} className={className} onClick={() => onClick(value)} >
        {label}
      </button>
    );
}
