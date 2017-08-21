import React, { Component } from 'react';
import logo from './logo.svg';
import Room from './modules/Room';
import rooms from './modules/rooms';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: rooms,
      room: rooms[0],
      item: {
        key: '',
        name: ''
      },
      player: {
        name: 'Percy Prankster',
        inventory: []
      }
    };
    this.handleExit = this.handleExit.bind(this);
    this.handlePickup = this.handlePickup.bind(this);

  }

  handleExit(room) {
    this.setState({ room });

  }

  handlePickup(item) {
    const { room, player } = this.state;
    const index = room.items.indexOf(item);
    if (index > -1) room.items.splice(index, 1);

    player.inventory.push(item);

    this.setState({
      room, player
    });
  }




  render() {
    const { player, room } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h6>{player.name}</h6>
          <h6>{player.inventory.join(', ')}</h6>
        </div>
        <Room room={room}
          onExit={this.handleExit}
          onPickup={this.handlePickup}
        />
      </div>
    );
  }
}



export default App;
