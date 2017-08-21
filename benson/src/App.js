import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rooms from './rooms';
// import benson from './models/player.js';
import enemies from './enemies';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rooms,
      room: rooms[0],
      player: {
        name: 'Benson Wigglepuff',
        inventory: ['Sailor Cap', 'Fishnet Stockings']
      }
    }
    this.handleExit = this.handleExit.bind(this);
    this.handlePickup = this.handlePickup.bind(this);
  }

  handleExit(room) {
    this.setState({room});
  }

  handlePickup(item) {
    const {room, player} = this.state;
    const index = room.items.indexOf(item);
    if(index > -1) room.items.splice(index, 1);
    player.inventory.push(item);
    this.setState({room, player})
  }

  render() {
    const {player, room} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Benson's Burger</h2>
          <h6>{player.name}</h6>
          <h6>{player.inventory.join(', ')}</h6>
        </div>
        <Room room = {room}
          onExit = {this.handleExit}
          onPickup = {this.handlePickup}
        />
      </div>
    );
  };
}

function Room({room, onExit, onPickup}) {
  return(
    <div>
      <h2>{room.name}</h2>
      <p>{room.initText}</p>
      {room.enemies &&
        <p>
          {room.enemies.enemyText}
        </p>
      }
      {room.enemies === null &&
        <p>
          {room.items.map((item, i) => (
          <button key = {i} onClick = {() => onPickup(item)}>
            Pick up {item}
          </button>
        ))}
        </p>
      }
      {room.doors.map((door, i) =>{
        return(
          <button key={i} onClick={() => onExit(door)}> 
            Door to {door.name}
          </button>
        );
      })}
    </div>
  );
}



export default App;
