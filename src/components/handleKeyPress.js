
import React from 'react';
// import rooms from './components/rooms';

export default function handleKeyPress(event, room) {
        console.log(event);
switch(event.keyCode){
    case 38:
    const direction= 'up';
    const message = room.directions.includes(direction) ? 'You go up' : 'Bump';
    console.log(message);
    break;
}        
// if(event.key === 'ArrowUp') {
//       console.log('up arrow pressed');
// }
}

// const actions = {
//     key: 'action',
//     North: 


// }

// export default action;