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
      princRoom: rooms[1],
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

  handleExit(playerRoom) {
    //for both player and principal
    const {princRoom} = this.state;
    let princDest = Math.floor((Math.random() * princRoom.doors.length));
    console.log(princDest)
    console.log('principalroom: ',princRoom.doors, princRoom.doors[princDest]);

    this.setState({ playerRoom: playerRoom, princRoom:  princRoom.doors[princDest] });
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);

    let princDestIndex = Math.floor((Math.random() * princRoom.doors.length));
    let princDest = princRoom.doors[princDestIndex];

    this.setState({
      playerRoom, player, princRoom:  princDest
    });

  }




  render() {
    // console.log(player)
    const { player, playerRoom } = this.state;
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
