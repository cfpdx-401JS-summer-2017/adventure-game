import React, { Component } from 'react';
import './App.css';
import scenes from './game/scenes.js';
import Game from './game/game.js';
import { Splash } from './game/splash.js';
import { Lose, Win } from './game/game-over.js';

console.log('ANSWERS:', scenes); // keep this for testing

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gameStatus: 'splash', //'active', 'lose', 'win'
      scene: 0,
      lives: 3,
      move: null,
      moveTime: null,
      playingDeathVideo: false,
    }

    this.newGame = this.newGame.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.evaluateMove = this.evaluateMove.bind(this);

    this.handleVideoPause = this.handleVideoPause.bind(this);
    this.handleVideoEnd = this.handleVideoEnd.bind(this);
    this.handleVideoTimeUpdate = this.handleVideoTimeUpdate.bind(this);
    this.handleMove = this.handleMove.bind(this);
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
  
  handleVideoPause() {
    console.log('video paused');
    console.log('death video playing on pause?', this.state.playingDeathVideo);
    
    if (!this.state.playingDeathVideo) this.evaluateMove();
  }
  
  handleVideoEnd() {
    console.log('video ended');
    console.log('death video playing on end?', this.state.playingDeathVideo);

    if (this.state.playingDeathVideo === true) {
      this.setState({ playingDeathVideo: false });
      this.playVideo(scenes[this.state.scene].challengeVideo);
    } else {
      if (this.state.scene < (scenes.length - 1)) {
        this.playVideo(scenes[this.state.scene].challengeVideo);
      }
    }
  }

  handleVideoTimeUpdate() {
    let player = document.getElementById('dragonPlayer');
    let start = scenes[this.state.scene].start;
    let stop = scenes[this.state.scene].stop;

    if (player.currentTime >= start) console.log('TIME WINDOW OPEN');
    if (player.currentTime >= stop) console.log('TIME WINDOW CLOSED');
    // console.log('player time:', player.currentTime);
  }
  
  handleMove(move) {
    let moveTime = document.getElementById('dragonPlayer').currentTime;
    let start = scenes[this.state.scene].start;
    let stop = scenes[this.state.scene].stop;

    // only set the move state if null and within time window
    if (this.state.move === null && (moveTime >= start && moveTime <= stop)) {
      this.setState({ move, moveTime });
      console.log('SET STATE --> user move', move, 'time', moveTime);
    } else {
      console.log('ignoring move', move);
    }
  }
  
  evaluateMove() {
    console.log('evaluating move...');
    let correctMove = scenes[this.state.scene].correct;
    let correctTimeStart = scenes[this.state.scene].start;
    let correctTimeStop = scenes[this.state.scene].stop;

    // console.log('EVALUATING MOVE -> the correct move is', correctMove, 'between', correctTimeStart, 'and', correctTimeStop);
    
    // check if move was correct, and was made at the correct time
    if (this.state.move === correctMove
        && this.state.moveTime >= correctTimeStart
        && this.state.moveTime <= correctTimeStop) {

        console.log('move was correct');

      // check if game is won (on last scene)
      if (this.state.scene === (scenes.length - 1)) {
        this.setState({ gameStatus: 'win' });
      } else {
        console.log('going to the next scene....');
        let scene = this.state.scene + 1;
        this.setState({ scene, move: null, moveTime: null });
        this.playVideo(scenes[this.state.scene].prevSuccessVideo);
      }
    } else {
      console.log('you died');
      // check if user has lives
      if (this.state.lives > 1) {
        // take away a life
        console.log('taking away one life');
        let lives = this.state.lives - 1;
        this.setState({ playingDeathVideo: true, lives });

        // play the death video
        console.log('playing the DEATH video');
        this.playVideo(scenes[this.state.scene].deathVideo);
        
      } else {
        //show death scene
        this.playVideo(scenes[this.state.scene].deathVideo);

        // go to game over
        this.setState({ playingDeathVideo: true, gameStatus: 'lose'});
      }
    }

  }

  newGame() {
    this.setState({
      gameStatus: 'active',
      scene: 0,
      player: {
        lives: 3,
        move: null,
        moveTime: null,
      },
      playingDeathVideo: false,
    });
  }

  playVideo(videoSource) {
    let player = document.getElementById('dragonPlayer');
    player.src = videoSource;
    player.load();
    player.play();
  }

  render() {
    if(this.state.gameStatus === 'splash') return <Splash handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'active')
      return (
        <Game scene = {this.state.scene}
              lives = {this.state.lives}
              videoSource = {scenes[this.state.scene].challengeVideo}
              handleClick = {this.handleMove}
              handleVideoPause = {this.handleVideoPause}
              handleVideoEnd = {this.handleVideoEnd}
              handleVideoTimeUpdate = {this.handleVideoTimeUpdate}
              />
      )
    
    if(this.state.gameStatus === 'lose') return <Lose handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'win') return <Win handleClick = {this.newGame} />;
  }

}

export default App;
