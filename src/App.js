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
      gameMsg: '',
      errorMsg: '',
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
    const { player } = this.state;

    if (keyVal[0] === 'invalid') {
      this.setState({
        gameMsg: '',
        errorMsg: 'invalid command.'
      })
    } 
    
    else if (keyVal[0] === 'up' || keyVal[0] === 'down' || keyVal[0] === 'left' || keyVal[0] === 'right') {
      if (rooms[roomNum].directions.includes(keyVal[0])) {
        roomNum += keyVal[1];
        this.setState({
          room: rooms[roomNum],
          gameMsg: 'You went ' + keyVal[0] + '.',
          errorMsg: ''
        });
      } else {
        this.setState({
          gameMsg: '',
          errorMsg: 'You try to go ' + keyVal[0] + '. Bump! You hit a wall.'
        });
      }
    } 
    
    else if (keyVal[0] === 'p') {
      if (rooms[roomNum].items.length > 0 && rooms[roomNum].items[0].hidden === false) {
        player.items.push(rooms[roomNum].items[0].item);
        rooms[roomNum].items = [];
        this.setState({
          player: player,
          gameMsg: 'You picked up ' + player.items[0] + '.',
          errorMsg: ''
        })
      } else {
        this.setState({
          gameMsg: '',
          errorMsg: 'Pick up what? Nothing here.'
        });
      }
    }
    
    else if (keyVal[0] === 'd') {
      if (player.items.length > 0) {
        // update what got dropped!
      } else {
        this.setState({
          gameMsg: '',
          errorMsg: 'You empty your pockets, but find nothing to drop.'
        });
      }
    }
    
  }

  render() {
    const { room, player } = this.state;
    return (
      <div id="app">
        <p>YOU ARE STANDING IN A MAZE.</p>
        <Room room={room} />
        <Player player={player} />
        <p id="input">
          <span id="inputLeft">&gt;</span> 
          <span id="inputRight"><textarea rows="2" ref={input => input && input.focus()} type="text" name="gameInput" className="gameInput" onKeyDown={this.handleKeyPress} placeholder="&#8593;=up, &#8595;=down, &#8594;=right, &#8592;=left, p=pickup, d=drop, s=speak, u=use" value={this.state.value}></textarea></span>
        </p>
        <p>
          <span className="gameMsg">{this.state.gameMsg}</span>
          <span className="errorMsg">{this.state.errorMsg}</span>
        </p>
      </div>
    );
  }
}


export default App;
