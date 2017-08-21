import React, { Component } from 'react';
import logo from './logo.svg';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
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
    const {princRoom, player} = this.state;
    let princDest = move(princRoom, playerRoom)
    console.log('playerNow: ',playerRoom, 'princNow: ', princDest);
    if(playerRoom === princDest) {
      console.log('same room');
      console.log('testing hall pass: ', player.inventory, 'pr: ',playerRoom)
      if(player.inventory.includes('hall pass') && (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')) {
        console.log('hall pass = safe!');
        this.setState({princRoom: rooms[1]})
        this.handleExit(playerRoom);
      } else {
        console.log('time for a challenge!')
        this.setState({princRoom: rooms[1]})
        this.handleExit(playerRoom);
      }
    }
    this.setState({ playerRoom: playerRoom, princRoom:  princDest });
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);
    let princDest = move(princRoom, playerRoom)
    this.setState({
      playerRoom, player, princRoom:  princDest
    });

  }

  // handleRoomRelations





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
