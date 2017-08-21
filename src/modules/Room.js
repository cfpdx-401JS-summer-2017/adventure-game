import roomData from './rooms';

const rooms = roomData;
const items = ['cell phone', 'hall pass', 'math homework', 'banana peel', 'toilet paper statue', 'incriminating photograph', 'greasy pizza box'];
const maxItm = 3;

rooms.forEach(room => {
  room.doors = room.doors.map(door => {
    return rooms.find(r => r.key === door);
  });
});

function placeRandom(item) {
  let randomIndex = Math.floor((Math.random() * rooms.length));
  rooms[randomIndex].items.length === maxItm ? placeRandom(item) : rooms[randomIndex].items.push(item);
}

items.forEach(item => placeRandom(item));

export default rooms;