import React, { Component } from 'react';
import logo from './true.png';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
import {Start, Win, Lose} from './modules/screens';
import challenges from './modules/challenges';
import Challenge from './modules/Challenge';

import './App.css';

// TODO adjacent room warning

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: 'startScreen',
      // win: null,
      rooms: rooms,
      playerRoom: rooms[0],
      princRoom: rooms[1],
      item: {
        key: '',
        name: ''
      },
      player: chars.player,
      principal: chars.principal,
      playerAnswer: '',
      challenge: {},
      visible: false,
      win: false
    };
    this.initialState = this.state;
    this.handlePickup = this.handlePickup.bind(this);
    this.handleRoomRelations = this.handleRoomRelations.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
  }

  changeScreen() {
    if(this.state.screen === 'startScreen') this.setState({ screen: 'gameScreen' });
    else window.location.reload(true);
  }

  handleRoomRelations(playerDest) {
    this.setState({win:false});
    const { player, princRoom, rooms, playerRoom } = this.state;
    if(playerRoom !== princRoom) {
      console.log('not same room: ', 'player is in this room: ', playerRoom);
      this.setState({playerRoom: playerDest});
      let princDest = move(princRoom, playerRoom);
      this.setState({princRoom: princDest});
      // this.handleRoomRelations(playerRoom)
    }
    else if(playerRoom ===  princRoom) {
      console.log('handling: ',playerRoom, princRoom);
      console.log('testing hall pass: ', player.inventory, 'pr: ',playerRoom.key);
      if(player.inventory.includes('hall pass') && (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')) {
        console.log('hall pass = safe!');
        this.setState({princRoom: rooms[1], playerRoom: playerDest});
      } else {
        console.log('time for a challenge!');
        this.setState({playerRoom: playerDest})
         let index = Math.trunc(Math.random() * 10);
        this.setState({ visible: true });
        this.setState({ challenge: challenges[index] });
        }
    } else if (playerDest === princRoom) {
      this.setState({ playerRoom: playerDest });
    } else if (playerDest !== princRoom) {
      this.setState({ playerRoom: playerDest });
      let princDest = move(princRoom, playerDest);
      this.setState({ princRoom: princDest });
    }
    if(player.inventory.length >= 9
        && (playerDest.key === 'westHall' || playerDest.key === 'playground')) {
      console.log('Congratulations!');
      this.setState({ screen: 'winScreen' });
    }
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    this.handleRoomRelations(playerRoom);
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);
    let princDest = move(princRoom, playerRoom);
    this.setState({ princRoom: princDest });
  }

  handleChallengeAnswer({ target }) {
    this.setState({ playerAnswer: target.value });
    const { challenge, playerAnswer, win } = this.state;
    if (target.name === 'submit') {
      if (
        playerAnswer === challenge.correctAnswer &&
        target.name === 'submit'
      ) {
        this.setState({ visible: false });
        this.setState({ win: true });
        this.setState({ princRoom: rooms[1] });
      } else {
          this.setState({ screen: 'loseScreen' });
      }
    }

  }

  render() {
    const {
      player,
      playerRoom,
      challenge,
      visible,
      playerAnswer,
      win,
      screen
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h6>{player.name}</h6>
            <h6>{player.inventory.join(', ')}</h6>
            </div>
        <div className="start">
          {this.state.screen === 'startScreen' && <Start onStart={this.changeScreen} />}
        </div>
        <div className="game">
          {this.state.screen === 'gameScreen' && visible !== true &&
          <div>
            <Room room={playerRoom}
              onExit={this.handleRoomRelations}
              onPickup={this.handlePickup}
            />
          </div>}
        {win && <div className="win">You are correct!</div>}
        {visible && screen === 'gameScreen' &&
          <Challenge
            challenge={challenge}
            value={playerAnswer}
            onSubmit={target => this.handleChallengeAnswer(target)}
          />}
          </div>
        <div className="win">
          {screen === 'winScreen' &&
          <div>
            <Win onWin={this.changeScreen} />
          </div>}
        </div>
        <div className="lose">
          {screen === 'loseScreen' &&
          <div>
            <Lose onLose={this.changeScreen} />
          </div> }
        </div>
</div>
    );
  }
}
export default App;
