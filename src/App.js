import React, { Component } from 'react';
import logo from './true.png';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
import {Start, Win, Lose} from './modules/screens';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'startScreen',
      win: null,
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
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen() {
    if(this.state.screen === 'startScreen') this.setState({ screen: 'gameScreen' });
    // else if(this.state.screen === 'gameScreen' && this.win === true) this.setState({ screen: 'winScreen' });
    else if(this.state.screen === 'gameScreen' && this.win === false) this.setState({ screen: 'loseScreen' });
    // else this.setState({ screen: 'startScreen' });
  }

  handleRoomRelations(playerDest) {
    const {player, princRoom, rooms, playerRoom} = this.state;
    if(playerRoom !== princRoom) {
      console.log('not same room: ', 'player is in this room: ', playerRoom);
      this.setState({playerRoom: playerDest});
      let princDest = move(princRoom, playerRoom);
      this.setState({princRoom: princDest});
      // this.handleRoomRelations(playerRoom)
    }
    else if(playerRoom ===  princRoom) {
      console.log('handling: ',playerRoom, princRoom);
      // console.log('same room');
      console.log('testing hall pass: ', player.inventory, 'pr: ',playerRoom.key);
      if(player.inventory.includes('hall pass') && (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')) {
        console.log('hall pass = safe!');
        this.setState({princRoom: rooms[1], playerRoom: playerDest});
      } else {
        console.log('time for a challenge!');
        let playerContinue = Math.trunc((Math.random() * 10)) > 5 ? true : false;
        console.log('player continue value: ', playerContinue);
        if(playerContinue) {
          this.setState({princRoom: rooms[1], playerRoom: playerDest});
        } else {
          console.log('game over!');
          return;
        }
      }
    }
    if(player.inventory.length >= 9
      
      // every(function (element, index, array) { ['cell phone',
      // 'banana peel',
      // 'toilet paper statue',
      // 'embarrassing photograph',
      // 'greasy pizza box',
      // 'catapult',
      // 'report card',
      // 'empty spray paint can'].includes(element); })
      // .includes(
      //   'cell phone',
      //   'banana peel',
      //   'toilet paper statue',
      //   'embarrassing photograph',
      //   'greasy pizza box',
      //   'catapult',
      //   'report card',
      //   'empty spray paint can') 
        && (playerDest.key === 'westHall' || playerDest.key === 'playground')) {
      console.log('Congratulations!');
      this.setState({ screen: 'winScreen' });
    }
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);
    let princDest = move(princRoom, playerRoom);
    this.setState({
      player, princRoom:  princDest
    });
    this.handleRoomRelations(playerRoom);
  }

  render() {
    // console.log(player)
    const { player, playerRoom } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="start">
          {this.state.screen === 'startScreen' && <Start onStart={this.changeScreen} />}
        </div>
        <div className="game">
          {this.state.screen === 'gameScreen' && 
          <div> 
            <h6>{player.name}</h6>
            <h6>{player.inventory.join(', ')}</h6>
            <Room room={playerRoom}
              onExit={this.handleRoomRelations}
              onPickup={this.handlePickup}
            />
          </div>}
        </div>
        <div className="win">
          {this.state.screen === 'winScreen' && 
          <div>
            <Win onWin={this.changeScreen} />
          </div>} 
        </div>
        <div className="lose">
          {this.state.screen === 'loseScreen' && 
          <div>

          </div>} 
        </div>

      </div>
    );
  }
}



export default App;
