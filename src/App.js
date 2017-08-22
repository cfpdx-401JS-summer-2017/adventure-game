import React, { Component } from 'react';
import logo from './true.png';
import Room from './modules/Room';
import rooms from './modules/rooms';
import chars from './modules/chars';
import move from './modules/principal';
import challenges from './modules/challenges'
import Challenge from './modules/Challenge'
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
      message: '',
      challenge: {
        question: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        correctAnswer: '',
        state: ''
      }
    };
    this.handlePickup = this.handlePickup.bind(this);
    this.handleRoomRelations = this.handleRoomRelations.bind(this);
    this.handleChallengeAnswer = this.handleChallengeAnswer.bind(this);
  }

  handleRoomRelations(playerDest) {
    const {player, princRoom, rooms, playerRoom} = this.state;
    if(playerRoom === princRoom) {
      // console.log('playerRoom === princRoom: ',playerRoom.key, princRoom.key)
      console.log('same room');
      if(player.inventory.includes('hall pass') && (playerRoom.key === 'westHall' || playerRoom.key === 'eastHall')) {
        console.log('hall pass = safe!');
        this.setState({princRoom: rooms[1], playerRoom: playerDest})
      } else {
        console.log('time for a challenge!')
        // let playerWin = Math.trunc((Math.random() * 10)) > 5 ? true : false;
        // console.log('pw: ', playerWin);
        // this.setState({message: challenges[0].question})

        // if(playerWin) {
        //   this.setState({princRoom: rooms[1], playerRoom: playerDest})
        // } else {
        //   console.log('game over!')
        //   return;
        // }
      }
    }
    else if (playerDest === princRoom) {
      this.setState({playerRoom: playerDest})
    }
    else if(playerDest !== princRoom) {
      this.setState({playerRoom: playerDest})
      let princDest = move(princRoom, playerDest)
      this.setState({princRoom: princDest})
    }
  }

  handlePickup(item) {
    const { playerRoom, player, princRoom } = this.state;
    console.log('2 in pickup - about to handle: ', princRoom.key, playerRoom.key)
    this.handleRoomRelations(playerRoom)
    const index = playerRoom.items.indexOf(item);
    if (index > -1) playerRoom.items.splice(index, 1);
    player.inventory.push(item);

    let princDest = move(princRoom, playerRoom)
    this.setState({princRoom: princDest});
  }

  handleChallengeAnswer({target}) {
    console.log('handling: ', target);

    // console.log({this.state.challenge})

  }

  render() {
    const { player, playerRoom, challenge } = this.state;
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
      <Challenge challenge={this.state.challenge} onChoice={target => this.handleChallengeAnswer(target)}/>
      </div>
    );
  }
}

export default App;
