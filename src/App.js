import React, { Component } from 'react';
import logo from './true.png';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
import './App.css';

// TODO passing in hall problem
// TODO challenges
// TODO adjacent room warning

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
    this.handlePickup = this.handlePickup.bind(this);
    this.handleRoomRelations = this.handleRoomRelations.bind(this);
  }

  handleRoomRelations(playerDest) {
    const {player, princRoom, rooms, playerRoom} = this.state;
    if(playerRoom !== princRoom) {
      // console.log('not same room: ', princRoom,'play: ', playerDest )
      this.setState({playerRoom: playerDest})
      let princDest = move(princRoom, playerRoom)
      this.setState({princRoom: princDest})
      // this.handleRoomRelations(playerRoom)
    }
    else if(playerRoom ===  princRoom) {
      console.log('handling: ',playerRoom, princRoom)
      // console.log('same room');
      console.log('testing hall pass: ', player.inventory, 'pr: ',playerRoom.key)
      if(player.inventory.includes('hall pass') && (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')) {
        console.log('hall pass = safe!');
        this.setState({princRoom: rooms[1], playerRoom: playerDest})
      } else {
        console.log('time for a challenge!')
        let playerWin = Math.trunc((Math.random() * 10)) > 5 ? true : false;
        console.log('pw: ', playerWin);
        if(playerWin) {
          this.setState({princRoom: rooms[1], playerRoom: playerDest})
        } else {
          console.log('game over!')
          return;
        }
      }
    }
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);
    let princDest = move(princRoom, playerRoom)
    this.setState({
      player, princRoom:  princDest
    });
    this.handleRoomRelations(playerRoom)
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
      onExit={this.handleRoomRelations}
      onPickup={this.handlePickup}
      />
      </div>
    );
  }
}



export default App;
