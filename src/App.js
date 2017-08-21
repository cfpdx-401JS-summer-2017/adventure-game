import React, { Component } from 'react';
import logo from './logo.svg';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: rooms,
      playerRoom: rooms[0],
      princRoom: rooms[7],
      item: {
        key: '',
        name: ''
      },
      player: chars.player,
      principal: chars.principal
    };
    this.handleExit = this.handleExit.bind(this);
    this.handlePickup = this.handlePickup.bind(this);

  }

  handleExit(room) {
    //for both player and principal
    this.setState({ room });

  }

  handlePickup(item) {
    const { playerRoom, player } = this.state;
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);

    player.inventory.push(item);
    this.setState({
      playerRoom, player
    });
  }




  render() {
    // console.log(player)
    const { player, principal, playerRoom, principalRoom } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h6>{player.name}</h6>
          <h6>{player.inventory.join(', ')}</h6>
        </div>
        <Room room={playerRoom}
          onExit={this.handleExit}
          onPickup={this.handlePickup}
        />
      </div>
    );
  }
}



export default App;
