import React, { Component } from 'react';
import logo from './img/icon-dragons-lair-logo-512x512.png';
import './App.css';
import acts from './acts.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // status: 'intro', //'active', 'game-over'
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
    return (
      <div>
        <div className="main">
          <img src={logo} alt="logo" />
          <h2>Save Princess Daphne!</h2>

          <PlayerStatus lives={this.state.player.lives} coins={this.state.player.coins} />

          <p>Act: {acts[this.state.act].name}</p>
          <p>Scene: {this.state.scene + 1}</p>
          <p>{acts[this.state.act].scenes[this.state.scene].instructions}</p>

          <div>
            <MoveButton label="up" value="UP"
            onClick = {this.handleMove.bind(this)} />
            
            <MoveButton label="down" value="DOWN"
            onClick = {this.handleMove.bind(this)} />

            <MoveButton label="right" value="RIGHT"
            onClick = {this.handleMove.bind(this)} />

            <MoveButton label="left" value="LEFT"
            onClick = {this.handleMove.bind(this)} />

            <MoveButton label="sword" value="SWORD"
            onClick = {this.handleMove.bind(this)} />
          </div>

        </div>
      </div>
    );
  }
}

function MoveButton({ label, value, onClick }) {
  return (
    <button value={value} onClick={() => onClick(value)} >
      {label}
    </button>
  );
}

function PlayerStatus({ lives, coins }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Lives</th>
          <th>Coins</th>
        </tr>
        <tr>
          <td>{lives}</td>
          <td>{coins}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default App;
