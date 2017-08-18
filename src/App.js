import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      items: [],
      player : {
        name: 'Percy Prankster',
        inventory: []
      }

    }
    this.handleExit = this.handleExit.bind(this);
    this.handlePickup = this.handlePickup.bind(this);

  }



handleExit() {
  this.setState({ room });

}

handlePickup() {
  const { room, player } = this.state;
  const index = room.items.indexOf(item);
  if(index > -1) room.items.splice(index, 1);

  player.inventory.push(items);

  this.setState({
    room, player
  })
}




    render() {
      const { player, rooms } = this.state;
      console.log(player, rooms);
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h6>{player.name}</h6>
            <h6>{player.inventory.join(', ')}</h6>
          </div>
          <Room room={rooms[0]}
            onExit={this.handleExit}
            onPickup={this.handlePickup}
          />
        </div>
      );
    }
}

export default App;
