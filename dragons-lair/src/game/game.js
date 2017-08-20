import React from 'react';
import logo from './images/vector-dragons-lair-logo.jpg';
import placeholderPicture from './images/vector-dirk-and-daphne.jpg';

export function Game(props) {

    return (
        <div className="main">

            <div>
                <img src={logo} alt="Dragon's Lair" height="50px"/>
                <br/>
                <img src={placeholderPicture} alt="Dirk Saves Daphne" height="400px"/>
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

            <h3>
                Instructions:
                {/* {props.acts[props.act].scenes[props.scene].instructions} */}
            </h3>

            <div>
                <MoveButton label="up" value="UP" onClick = {props.handleClick} />
                <MoveButton label="down" value="DOWN" onClick = {props.handleClick} />
                <MoveButton label="right" value="RIGHT" onClick = {props.handleClick} />
                <MoveButton label="left" value="LEFT" onClick = {props.handleClick} />
                <MoveButton label="sword" value="SWORD" onClick = {props.handleClick} />
            </div>
        </div>
    )
}

function MoveButton({ label, value, onClick }) {
    return (
      <button value={value} onClick={() => onClick(value)} >
        {label}
      </button>
    );
}
