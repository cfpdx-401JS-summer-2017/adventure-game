import React, { Component } from 'react';
import './App.css';
import rooms from './components/rooms';
import { Player } from './components/Player';
import { Room } from './components/Room';
import getKeyPress from './utils/getKeyPress';

let roomNum = 1;

class App extends Component {
  constructor() {
    super();
    this.state = {
      rooms, 
      room: rooms[roomNum],
      player: {
        name: '',
        items: []
      },
      message: '',
      value: ''
    }
    this.handleExit = this.handleExit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleExit(roomNum) {
    this.setState({ room: rooms[roomNum] });
  }

  handleKeyPress(event) {
    const keyVal = getKeyPress(event);
    if (keyVal[0] === 'invalid') {
      this.setState({
        message: 'invalid command'
      })
    } else if (keyVal[0] === 'up' || keyVal[0] === 'down' || keyVal[0] === 'left' || keyVal[0] === 'right') {
      if (rooms[roomNum].directions.includes(keyVal[0])) {
        roomNum += keyVal[1];
        this.setState({
          room: rooms[roomNum],
          message: 'You went ' + keyVal[0]
        });
      } else {
        this.setState({
          message: 'Bump! Can\'t go that way.'
        });
      }
    }
  }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <p>You are standing in a maze.</p>
        <Room room={room} />
        <Player player={player} />
        <p>&gt; <input ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" onKeyDown={this.handleKeyPress} placeholder="&#8593;=up, &#8595;=down, &#8594;=right, &#8592;=left, p=pickup, d=drop, s=speak, u=use" value={this.state.value}></input></p>
        <p id="message">{this.state.message}</p>
      </div>
    );
  }
}


export default App;
