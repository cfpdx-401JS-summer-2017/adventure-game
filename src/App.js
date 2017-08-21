import React, { Component } from 'react';
import './App.css';
import player from './components/player';
import rooms from './components/rooms';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rooms, 
      room: rooms[1],
      player
    }
  }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <Room room={room} player={player} />
      </div>
    );
  }
}

function Room({ room, player }) {
  const dirArr = room.directions;
  const playerDir = 'You see exits ' + dirArr.slice(0, dirArr.length - 1).join(', ') + ', and ' + dirArr.slice(-1) + '.';
  const playerItems = 'You are carrying ' + player.items + '.';

  return (
    <div>
      <p>You are standing in a maze.</p>
      <p>{playerDir} {playerItems}</p>
      <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" /></p>
    </div>
  );
}

export default App;
