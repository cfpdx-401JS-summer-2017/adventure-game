import React, { Component } from 'react';
import logo from './img/icon-dragons-lair-logo-512x512.png';
import './App.css';
import rooms from './rooms.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms,
      room: rooms[0],
      moves: [],
      player: {
        lives: 3,
        // inventory: [],
      },
    }

    this.handleCorrectMove = this.handleCorrectMove.bind(this);
    this.handleDeathMove = this.handleDeathMove.bind(this);
  }

  handleMove(move) {
    //not sure if this will work
    // let newMoves = this.state.moves;
    // newMoves.push(move);
    // this.setState({ moves: newMoves });

    alert('you clicked ' + move);
    //evaulate
  }

  // handleCorrectMove(move) {
  //   console.log('correct move!');
  //   // this.setState({})
  // }

  // handleDeathMove(move) {
  //   console.log('death move!');
  // }

  // handlePickup(item) { }

  render() {
    return (
      <div>
        <div className="main">
          <img src={logo} alt="logo" />
          <h2>Save Princess Daphne!</h2>

          <p>text will go here...</p>

          <MoveButton label="up" value="U"
           onClick = {this.handleMove.bind(this)} />


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
