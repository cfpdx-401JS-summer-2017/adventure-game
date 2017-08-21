import React, { Component } from 'react';
import './App.css';
import player from './components/player';
import rooms from './components/rooms';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player,
      rooms
    }
  }

  render() {
    return (
      <div id="app">
        <p>
          You are standing in a maze.
        </p>
      </div>
    );
  }
}

export default App;
