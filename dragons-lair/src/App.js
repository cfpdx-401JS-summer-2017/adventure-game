import React, { Component } from 'react';
import './App.css';
import { Splash } from './game/splash.js';
import acts from './game/acts.js';
import Game from './game/game.js';
import { Lose, Win } from './game/game-over.js';

console.log('ANSWERS:', acts); // keep this for testing

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameStatus: 'splash', //'active', 'lose', 'win'
      act: 0,
      scene: 0,
      player: {
        lives: 3,
        coins: 0,
      }
    }

    this.handleMove = this.handleMove.bind(this);;
    this.newGame = this.newGame.bind(this);
    this.handleVideoEnd = this.handleVideoEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  
  handleKeyDown(event) {
    let key = event.keyCode;
    if (key === 37) this.handleMove('LEFT');
    if (key === 38) this.handleMove('UP');
    if (key === 39) this.handleMove('RIGHT');
    if (key === 40) this.handleMove('DOWN');
    if (key === 83) this.handleMove('SWORD');
    if (key === 88) this.handleMove('NONE');
  }
  
  handleVideoEnd() {
    alert('video had ended');
  }

  handleMove(move) {
    
    let userTime = document.getElementById("dragonPlayer").currentTime;
    console.log('user pressed', move, 'time', userTime);

    let correctTimeStart = acts[this.state.act].scenes[this.state.scene].start;
    let correctTimeStop = acts[this.state.act].scenes[this.state.scene].stop;
    let correctMove = acts[this.state.act].scenes[this.state.scene].correct;
    console.log('correct time', correctTimeStart, correctTimeStop, 'move', move);


    // check if input is allowed at this time
    if (userTime <= correctTimeStop && userTime >= correctTimeStart) {

      if (move === correctMove) { 
        // check if won game
        if(this.state.act === acts.length && this.state.scene === acts[this.state.act].scenes.length) {
          this.setState({ gameStatus: 'win' });
        } else if(this.state.scene < (acts[this.state.act].scenes.length - 1)) {
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
          //show death scene...
        } else {
          //show death scene...
          // go to game over
          this.setState({ gameStatus: "lose"});
        }
      }

    }
    else {
      console.log('can not submit move');
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
              handleClick = {this.handleMove}
              videoSource = {acts[this.state.act].video}
              handleVideoEnd = {this.handleVideoEnd}
              />
      )
    
    if(this.state.gameStatus === 'lose') return <Lose handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'win') return <Win handleClick = {this.newGame} />;
  }

}

export default App;
