import React from 'react';

export function Room({ room }) {
  const dirArr = room.directions;
  let roomMsg = makeSentence(dirArr);
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

function makeSentence(dirArr) {
  if (dirArr.length === 1) {
    if (dirArr[0] === 'up' || dirArr[0] === 'down') return 'You see an exit ' + dirArr[0] + '.';
    return 'You see an exit to the ' + dirArr[0] + '.';
  }
  if (dirArr.length === 2) return 'You see exits ' + dirArr[0] + ' and ' + dirArr[1] + '.';
  return 'You see exits ' + dirArr.slice(0, dirArr.length - 1).join(', ') + ', and ' + dirArr.slice(-1) + '.';
}