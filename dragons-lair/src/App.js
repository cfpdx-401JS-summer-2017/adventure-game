import React, { Component } from 'react';
import logo from './img/icon-dragons-lair-logo-512x512.png';
import './App.css';
import acts from './acts.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      acts,
      act: acts.mausoleum,
      scene: 0,
      moves: [],
      player: {
        lives: 3,
        // inventory: [],
      },
    }

    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(move) {
    console.log('USER PICKED', move);
    let correct = this.state.act.scenes[this.state.scene].correct;
    console.log('CORRECT MOVE', correct);

    if (move === correct) {
      alert('you clicked the correct move');
      
      if(this.state.scene < this.state.act.scenes.length) {
        alert('you are are moving to the next scene');
        let nextScene = this.state.scene + 1;
        this.setState({ scene: nextScene })

      } else {
        alert('you are moving on to next act');

      }

    } else {
      alert('you clicked the death move');
      // check number of lives
      
        // remove a life

        // end game
    }

  }


  render() {
    return (
      <div>
        <div className="main">
          <img src={logo} alt="logo" />
          <h2>Save Princess Daphne!</h2>

          <p>{this.state.act.name}</p>
          <p>{this.state.act.scenes[this.state.scene].instructions}</p>

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

export default App;
