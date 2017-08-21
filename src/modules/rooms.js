
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
  doors: ['eastHall', 'westHall', 'gym']
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
  doors: ['gym', 'office', 'cafeteria', 'westHall','artRoom']
};

const westHall = {
  key: 'westHall',
  name: 'West Hall',
  items: [],
  doors: ['cafeteria', 'mathRoom', 'eastHall']
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
  doors: ['mathRoom', 'eastHall']
};

const office = {
  key: 'office',
  name: 'Principal\'s Office',
  items: [],
  doors: ['eastHall']
};

const rooms = [westHall, office, cafeteria, gym, eastHall, artRoom, mathRoom, playground];

export default rooms;

// let maxItm = 3;
// let minItm = 1;

// function propagateItems(room) {
//   let roomItems = gameItems;
//   let numbOfItems = Math.random()* (maxItm-minItm) + minItm;
  
//   for(let i = 0; i <= numbOfItems; i++) {
//     let randomIndex = Math.random()* (roomItems.length-0);
//     roomItems.push(roomItems[randomIndex]);
//     roomItems.splice(randomIndex,1);
//   }
//   console.log(roomItems);
//   return roomItems;
// }

// rooms.forEach(room => {
//   room.items = propagateItems(room);
//   room.doors = room.doors.map(door => {
//     return rooms.find(r => r.key === door);
//   });
//   return room;
// });

// const rooms = [
// {
//     key: 'playground',
//     name: 'Playground',
//     items: [],
//     doors: ['gym']
// },

// {
//   key: 'cafeteria',
//   name: 'Food Trough',
//   items: [],
//   doors: ['eastHall', 'westHall', 'gym']
// },
// {
//   key: 'gym',
//   name: 'Gym',
//   items: [],
//   doors: ['eastHall', 'cafeteria', 'playground']
// },

// {
//   key: 'eastHall',
//   name: 'East Hall',
//   items: [],
//   doors: ['gym', 'office', 'cafeteria', 'westHall','artRoom']
// },

// {
//   key: 'westHall',
//   name: 'West Hall',
//   items: [],
//   doors: ['cafeteria', 'mathRoom', 'eastHall']
// },

//  {
//   key: 'mathRoom',
//   name: 'Algebra for Everyone',
//   items: [],
//   doors: ['westHall', 'artRoom']
// },

//  {
//   key: 'artRoom',
//   name: 'Painting for People',
//   items: [],
//   doors: ['mathRoom', 'eastHall']
// },

//  {
//   key: 'office',
//   name: 'Principal\'s Office',
//   items: [],
//   doors: ['eastHall']

// }
// ];

