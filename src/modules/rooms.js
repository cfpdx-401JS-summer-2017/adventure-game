
const playground = {
  key: 'playground',
  name: 'Playground',
  items: [],
  doors: ['gym']
};
const cafeteria = {
  key: 'cafeteria',
  name: 'Food Trough',
  items: [],
  doors: ['westHall', 'gym']
};

const gym = {
  key: 'gym',
  name: 'Gym',
  items: [],
  doors: ['eastHall', 'cafeteria', 'playground']
};

const eastHall = {
  key: 'eastHall',
  name: 'East Hall',
  items: [],
  doors: ['gym', 'office', 'westHall','artRoom']
};

const westHall = {
  key: 'westHall',
  name: 'West Hall',
  items: [],
  doors: ['cafeteria', 'mathRoom', 'eastHall', 'scienceLab']
};

const mathRoom = {
  key: 'mathRoom',
  name: 'Algebra for Everyone',
  items: [],
  doors: ['westHall', 'artRoom']
};

const artRoom = {
  key: 'artRoom',
  name: 'Painting for People',
  items: [],
  doors: ['mathRoom', 'eastHall', 'office']
};

const office = {
  key: 'office',
  name: 'Principal\'s Office',
  items: [],
  doors: ['eastHall', 'artRoom']
};
const scienceLab = {
  key: 'scienceLab',
  name: 'Science Lab',
  items: [],
  doors: ['westHall','garden']
};
const garden = {
  key: 'garden',
  name: 'Garden',
  items: [],
  doors:['scienceLab']
}

const rooms = [westHall, office, cafeteria, gym, eastHall, artRoom, mathRoom, playground, garden, scienceLab];
const items = ['math homework', 'cell phone', 'hall pass', 'banana peel', 'toilet paper statue', 'embarrassing photograph', 'greasy pizza box', 'catapult','report card', 'empty spray paint can'];

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