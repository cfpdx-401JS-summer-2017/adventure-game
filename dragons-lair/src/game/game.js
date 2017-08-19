import React from 'react';

export function Game({ player, actNum, sceneNum }) {
    return (
        <div className="main">

            <PlayerStatus lives={player.lives} coins={player.coins} />

            <p>Act: {acts[actNum].name}</p>
            <p>Scene: {sceneNum + 1}</p>
            <p>{acts[actNum].scenes[sceneNum].instructions}</p>

            <div>
                <MoveButton label="up" value="UP"
                onClick = {this.handleMove.bind(this)} />
                
                <MoveButton label="down" value="DOWN"
                onClick = {this.handleMove.bind(this)} />

                <MoveButton label="right" value="RIGHT"
                onClick = {this.handleMove.bind(this)} />

                <MoveButton label="left" value="LEFT"
                onClick = {this.handleMove.bind(this)} />

                <MoveButton label="sword" value="SWORD"
                onClick = {this.handleMove.bind(this)} />
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

function PlayerStatus({ lives, coins }) {
    return (
        <table>
        <tbody>
            <tr>
            <th>Lives</th>
            <th>Coins</th>
            </tr>
            <tr>
            <td>{lives}</td>
            <td>{coins}</td>
            </tr>
        </tbody>
        </table>
    )
}
