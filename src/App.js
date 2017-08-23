import React, { Component } from 'react';
import logo from './true.png';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
import challenges from './modules/challenges';
import Challenge from './modules/Challenge';
import './App.css';

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
      principal: chars.principal,
      playerAnswer: '',
      challenge: {},
      visible: false,
      win: false
    };
    this.handlePickup = this.handlePickup.bind(this);
    this.handleRoomRelations = this.handleRoomRelations.bind(this);
  }

  handleRoomRelations(playerDest) {
    this.setState({win:false});
    const { player, princRoom, rooms, playerRoom } = this.state;
    if (playerRoom === princRoom) {
      if (
        player.inventory.includes('hall pass') &&
        (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')
      ) {
        this.setState({ princRoom: rooms[1], playerRoom: playerDest });
      } else {
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
        console.log('game over!');
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
      win
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h6>
            {player.name}
          </h6>
          <h6>
            {player.inventory.join(', ')}
          </h6>
        </div>
        {visible !== true &&
          <Room
            room={playerRoom}
            onExit={this.handleRoomRelations}
            onPickup={this.handlePickup}
          />}
        {win && <div className="win">You are correct!</div>}
        {visible &&
          <Challenge
            challenge={challenge}
            value={playerAnswer}
            onSubmit={target => this.handleChallengeAnswer(target)}
          />}
      </div>
    );
  }
}
export default App;
