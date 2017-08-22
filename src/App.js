import React, { Component } from 'react';
import './App.css';
import rooms from './components/rooms';
import { Player } from './components/Player';
import { Room } from './components/Room';
import getKeyPress from './utils/getKeyPress';

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
    }
    this.handleExit = this.handleExit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleExit(roomNum) {
    this.setState({ room: rooms[roomNum] });
  }

  handleKeyPress(event) {
    const keyVal = getKeyPress(event);
    console.log('keyVal', keyVal);
  }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <p>You are standing in a maze.</p>
        <Room room={room} />
        <Player player={player} />
        <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" onKeyDown={this.handleKeyPress} placeholder="&#8593;=up, &#8595;=down, &#8594;=right, &#8592;=left, p=pickup, d=drop, s=speak, u=use"></input></p>
      </div>
    );
  }
}


export default App;
