import React from 'react';

export function Room({ room }) {
  
  const dirArr = room.directions;
  
  const roomMsg = makeSentence(dirArr);
  
  let itemMsg = '';
  if (room.items.length > 0 && room.items[0].hidden === false) itemMsg = ' You see a ' + room.items[0].item + ' on the ground.';
  
  let charMsg = '';
  if (room.characters.length > 0) charMsg = ' You see ' + room.characters[0] + '.';
  
  return (
    <div>
      <p>
        <span className="roomMsg">{roomMsg}</span>
        <span className="itemMsg">{itemMsg}</span>
        <span className="charMsg">{charMsg}</span>
      </p>
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