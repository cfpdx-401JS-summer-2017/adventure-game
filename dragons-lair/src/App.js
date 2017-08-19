import React, { Component } from 'react';
import './App.css';
import { Splash } from './game/splash.js'
import acts from './acts.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameStatus: 'splash', //'active', 'game-over'
      act: 0,
      scene: 0,
      moves: [],
      player: {
        lives: 3,
        coins: 0,
      },
    }

    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(move) {
    console.log('user picked', move);
    let correct = acts[this.state.act].scenes[this.state.scene].correct;

    if (move === correct) {
      if(this.state.scene < (acts[this.state.act].scenes.length - 1)) {
        // go to next scene
        let scene = this.state.scene + 1;
        this.setState({ scene })
      } else {
        // go to next act
        let act = this.state.act + 1;
        this.setState({ act, scene: 0 })
      }

    } else {
      if(this.state.player.lives > 0) {
        // take away a life
        let lives = this.state.player.lives - 1;
        this.setState({ player: { lives, coins: 0 } })
      } else {
        //TODO: 
        alert('game over!');
      }
    }

  }


  render() {
    if(this.state.state === 'splash') return Splash;
    if(this.state.state === 'splash') return Splash;
  }
}

export default App;
