import React, { Component } from 'react';
import './App.css';
import rooms from './components/rooms';
import { Player } from './components/Player';
import { Room } from './components/Room';
import handleKeyPress from './components/handleKeyPress';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rooms, 
      room: rooms[1],
      player: {
        name: '',
        items: []
      }
    };
    // handleKeyPress = handleKeyPress.bind(this);
  }

  

  // handleKeyPress(event) {
  //   console.log(event.key);
  //
  // }
  // }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <p>You are standing in a maze.</p>
        <Room room={room} />
        <Player player={player} />
        <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" onKeyDown={(event) => handleKeyPress(event, room)} placeholder="&#8593;=up, &#8595;=down"/></p>
      </div>
    );
  }
}


export default App;
