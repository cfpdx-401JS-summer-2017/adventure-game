import React from 'react';

export function Room({ room }) {
    const dirArr = room.directions;
    const roomDir = 'You see exits ' + dirArr.slice(0, dirArr.length - 1).join(', ') + ', and ' + dirArr.slice(-1) + '.';
    return (
      <div>
        <p>{roomDir}</p>
      </div>
    );
  }
  