import React, { Component } from 'react';
import './App.css';
import player from './components/player';
import rooms from './components/rooms';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player,
      rooms, 
      room: rooms[1]
    }
  }

  render() {
    const { player, room } = this.state;
    return (
      <div id="app">
        <Room room={room} />
      </div>
    );
  }
}

function Room({ room, player }) {
  const directions = "You see exits " + room.directions.slice(0, room.directions.length - 1).join(', ') + ", and " + room.directions.slice(-1) + ".";

  return (
    <div>
      <p>You are standing in a maze.</p>
      <p>{directions}</p>
      <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" /></p>
    </div>
  );
}

export default App;
