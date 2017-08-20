import React, { Component } from 'react';
import './App.css';
import { Splash } from './game/splash.js'
import { Game } from './game/game.js'
import { GameOver } from './game/game-over.js'
import acts from './game/acts.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameStatus: 'splash', //'active', 'game-over'
      act: 0,
      scene: 0,
      player: {
        lives: 3,
        coins: 0,
      },
    }

    this.handleMove = this.handleMove.bind(this);
    this.goToActive = this.goToActive.bind(this);
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
        this.setState({ gameStatus: "game-over"});
      }
    }

  }

  goToActive() {
    this.setState({ gameStatus: 'active' });
  }

  newGame() {
    
  }

  render() {
    if(this.state.gameStatus === 'splash') return <Splash handleClick={this.goToActive} />;

    if(this.state.gameStatus === 'active')
      return (
        <Game player={this.state.player}
              act={this.state.act}
              scene={this.state.act}
              handleClick={this.handleMove} />
      )
    
    if(this.state.gameStatus === 'game-over') return <GameOver handleClick={this.goToActive} />;
  }

}

export default App;

function doTheThing() {

}