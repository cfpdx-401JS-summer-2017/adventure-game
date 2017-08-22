import React from 'react';

export function Room({ room }) {
  
  const dirArr = room.directions;
  
  const roomMsg = makeSentence(dirArr);
  
  let itemMsg = '';
  if ( room.items.length > 0 ) itemMsg = ' You see ' + room.items[0] + ' on the ground.';
  
  let charMsg = '';
  console.log(room.characters);
  if (room.characters.length > 0) charMsg = ' You see a ' + room.characters[0].name + '.';
  
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