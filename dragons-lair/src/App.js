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
      player: {
        lives: 3,
        move: null,
        moveTime: null,
      },
      playingDeathVideo: false,
      
    }

    this.newGame = this.newGame.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.evaluateMove = this.evaluateMove.bind(this);

    this.handleVideoPause = this.handleVideoPause.bind(this);
    this.handleVideoEnd = this.handleVideoEnd.bind(this);
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
    if (this.state.playingDeathVideo) this.setState({ playingDeathVideo: false });

    this.playVideo(scenes[this.state.scene].challengeVideo);
  }
  
  handleMove(move) {
    let moveTime = document.getElementById('dragonPlayer').currentTime;
    let lives = this.state.player.lives;
    this.setState({ player: { move, moveTime, lives } });
    
    console.log('user move', move, 'time', moveTime);
  }
  
  evaluateMove() {
    let correctMove = scenes[this.state.scene].correct;
    let correctTimeStart = scenes[this.state.scene].start;
    let correctTimeStop = scenes[this.state.scene].stop;

    console.log('EVALUATING MOVE -> the correct move is', correctMove, 'between', correctTimeStart, 'and', correctTimeStop);
    
    // check if move was correct, and was made at the correct time
    if (this.state.player.move === correctMove
        && this.state.player.moveTime >= correctTimeStart
        && this.state.player.moveTime <= correctTimeStop) {

          console.log('move was correct');

      // check if game is won (on last scene)
      if (this.state.scene === scenes.length) {
        // show the win screen
        this.setState({ gameStatus: 'win' });
      } else {
        console.log('going to the next scene....');
        // go to next scene
        let scene = this.state.scene + 1;
        let lives = this.state.player.lives;
        this.setState({ scene, player: { move: null, moveTime: null, lives } });
        // play the success video
        this.playVideo(scenes[this.state.scene].prevSuccessVideo);
      }
    } else {
      console.log('you died');

      // check if user has lives
      if (this.state.player.lives > 1) {
        // take away a life
        console.log('taking away one life');
        let lives = this.state.player.lives - 1;
        this.setState({ playingDeathVideo: true, player: { lives } }); //QUESTION: do i need to set the move & move time

        // play the death video
        console.log('playing the DEATH video');
        this.playVideo(scenes[this.state.scene].deathVideo);
        
      }
      
      else {
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
    console.log('playing video', videoSource);
    let player = document.getElementById('dragonPlayer');
    player.src = videoSource;
    player.load();
    player.play();
  }

  render() {
    if(this.state.gameStatus === 'splash') return <Splash handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'active')
      return (
        <Game player = {this.state.player}
              scene = {this.state.scene}
              videoSource = {scenes[this.state.scene].challengeVideo}
              handleClick = {this.handleMove}
              handleVideoPause = {this.handleVideoPause}
              handleVideoEnd = {this.handleVideoEnd}
              />
      )
    
    if(this.state.gameStatus === 'lose') return <Lose handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'win') return <Win handleClick = {this.newGame} />;
  }

}

export default App;
