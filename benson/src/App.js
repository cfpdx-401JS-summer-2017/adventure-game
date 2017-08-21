import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rooms from './models/rooms.js';
// import benson from './models/player.js';
import enemies from './models/enemies.js';

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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  };
}

function Room({room, onExit, onPickup}) {
  return(
    <div>
      <h2>{room.name}</h2>
    </div>
  )
}

export default App;
