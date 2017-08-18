import React, { Component } from 'react';
import logo from './logo.svg';
import rooms from './modules/rooms'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: rooms,
      room: {key:'start'},
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
      const { player, room } = this.state;
      console.log(player, rooms);
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h6>{player.name}</h6>
            <h6>{player.inventory.join(', ')}</h6>
          </div>
          <Room room={room}
            onExit={this.handleExit}
            onPickup={this.handlePickup}
          />
        </div>
      );
    }
}

function Room({ room, onExit, onPickup }) {
  return (
    <div>
      <h2>{room.name}</h2>
      <p>You see: { room.items.map((item, i) => (
        <button key={i} onClick={() => onPickup(item)}>
            {item}
        </button>
      )) }</p>
      {room.doors.map((door, i) => {
        return (
          <button key={i} onClick={() => onExit(door)}>
            Door to {door.key}
          </button>
        );
      })}
    </div>
  );
}

export default App;
