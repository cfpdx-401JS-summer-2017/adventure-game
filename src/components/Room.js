import React from 'react';

export function Room({ room }) {
    const dirArr = room.directions;
    let roomMsg = 'You see exits ' + dirArr.slice(0, dirArr.length - 1).join(', ') + ', and ' + dirArr.slice(-1) + '.';
    if (room.items.length > 0) {
      roomMsg += ' You see a ' + room.items[0] + '.';
    }
    if (room.characters.length > 0) {
      roomMsg += ' You see a ' + room.characters[0] + '.';
    }
    return (
      <div>
        <p>{roomMsg}</p>
      </div>
    );
  }
  