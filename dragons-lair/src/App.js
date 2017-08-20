import React, { Component } from 'react';
import './App.css';
import { Splash } from './game/splash.js'
import acts from './game/acts.js'
import { Game } from './game/game.js'
import { GameOver } from './game/game-over.js'

console.log('ANSWERS:', acts); // keep this for testing

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
    this.newGame = this.newGame.bind(this);
  }

  handleMove(move) {
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
        // let soundOfDeath = new Audio('./sounds/death.mp3');
        // soundOfDeath.play();
        
        let lives = this.state.player.lives - 1;
        this.setState({ player: { lives, coins: 0 } })
      } else {
        // go to game over
        this.setState({ gameStatus: "game-over"});
      }
    }

  }

  newGame() {
    this.setState({
      gameStatus: 'active',
      act: 0,
      scene: 0,
      player: {
        lives: 3,
        coins: 0,
      }
    });
  }

  render() {
    if(this.state.gameStatus === 'splash') return <Splash handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'active')
      return (
        <Game player = {this.state.player}
              act = {this.state.act}
              scene = {this.state.scene}
              name = {acts[this.state.act].name}
              instructions = {acts[this.state.act].instructions}
              handleClick = {this.handleMove} />
      )
    
    if(this.state.gameStatus === 'game-over') return <GameOver handleClick = {this.newGame} />;
  }

}

export default App;
