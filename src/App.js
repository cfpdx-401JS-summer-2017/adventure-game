import React, { Component } from 'react';
import './App.css';
import rooms from './components/rooms';
import player from './components/player';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rooms, 
      room: rooms[1],
      player
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  console.log(event.target.value);
  }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <p>You are standing in a maze.</p>
        <Room room={room} />
        <Player player={player} />
        <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" onChange={this.handleChange} /></p>
      </div>
    );
  }
}

function Room({ room }) {
  const dirArr = room.directions;
  const roomDir = 'You see exits ' + dirArr.slice(0, dirArr.length - 1).join(', ') + ', and ' + dirArr.slice(-1) + '.';
  return (
    <div>
      <p>{roomDir}</p>
    </div>
  );
}

function Player({ player }) {
  const playerItems = 'You are carrying ' + player.items + '.';
  return (
    <div>
      <p>{playerItems}</p>
    </div>
  );
}

export default App;
