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
        move: null,
        moveTime: null,
      },
      
    }

    this.newGame = this.newGame.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.evaluateMove = this.evaluateMove.bind(this);

    this.handleMove = this.handleMove.bind(this);
    this.handleVideoPause = this.handleVideoPause.bind(this);
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
  
  handleVideoPause() {
    console.log('video paused');
    console.log('>>>>> ACT', this.state.act, 'SCENE', this.state.scene, '<<<<<')
    this.evaluateMove();
  }

  handleVideoEnd() {
    console.log('video ended');
    let nextVideo = acts[this.state.act].scenes[this.state.scene].challengeVideo;
    this.playVideo(nextVideo);
  }
  
  handleMove(move) {
    let moveTime = document.getElementById("dragonPlayer").currentTime;
    let lives = this.state.lives;
    this.setState({ player: { move, moveTime, lives } });
    
    console.log('user move', move, 'time', moveTime);
  }
  
  evaluateMove() {
    let correctMove = acts[this.state.act].scenes[this.state.scene].correct;
    let correctTimeStart = acts[this.state.act].scenes[this.state.scene].start;
    let correctTimeStop = acts[this.state.act].scenes[this.state.scene].stop;
    let nextVideo = null;
    
    if (this.state.player.move === correctMove) { 
      // check if game is won
      if (this.state.act === acts.length && this.state.scene === acts[this.state.act].scenes.length) {
        this.setState({ gameStatus: 'win' });
      } else if(this.state.scene < (acts[this.state.act].scenes.length - 1)) {
        // go to next scene
        let scene = this.state.scene + 1;
        this.setState({ scene })

        // play next videos
        nextVideo = acts[this.state.act].scenes[this.state.scene].prevSuccessVideo;
        this.playVideo(nextVideo);
        // nextVideo = acts[this.state.act].scenes[this.state.scene].challengeVideo;
        // this.playVideo(nextVideo);


      } else {
        // go to next act
        let act = this.state.act + 1;
        this.setState({ act, scene: 0 })

        // play next videos
        // nextVideo = acts[this.state.act].scenes[this.state.scene].prevSuccessVideo;
        // this.playVideo(nextVideo);

        nextVideo = acts[this.state.act].scenes[this.state.scene].challengeVideo;
        this.playVideo(nextVideo);
      }
    } else {
      // check if user has lives
      if (this.state.player.lives > 0) {
        // take away a life
        let lives = this.state.player.lives - 1;
        this.setState({ player: { lives } })
        nextVideo = acts[this.state.act].scenes[this.state.scene].deathVideo;
        this.playVideo(nextVideo);
        
        // play next challenge....

      } else {
        //show death scene
        nextVideo = acts[this.state.act].scenes[this.state.scene].deathVideo;
        this.playVideo(nextVideo);
        // go to game over
        this.setState({ gameStatus: "lose"});
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
      }
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
        <Game player = {this.state.player}
              act = {this.state.act}
              scene = {this.state.scene}
              name = {acts[this.state.act].name}
              instructions = {acts[this.state.act].instructions}
              handleClick = {this.handleMove}
              videoSource = {acts[this.state.act].scenes[this.state.scene].challengeVideo}
              handleVideoPause = {this.handleVideoPause}
              handleVideoEnd = {this.handleVideoEnd}
              />
      )
    
    if(this.state.gameStatus === 'lose') return <Lose handleClick = {this.newGame} />;

    if(this.state.gameStatus === 'win') return <Win handleClick = {this.newGame} />;
  }

}

export default App;
