const playground = {
  key: 'playground',
  name: 'Playground',
  items: ['cellPhone'],
  doors: ['gym']
}

const cafeteria = {
  key: 'cafeteria',
  name: 'Food Trough',
  items: ['cellPhone'],
  doors: ['eastHall', 'westHall', 'gym']
}

const gym = {
  key: 'gym',
  name: 'Gym',
  items: ['cellPhone'],
  doors: ['eastHall', 'cafeteria', 'playground']
}

const eastHall = {
  key: 'eastHall',
  name: 'East Hall',
  items: ['cellPhone'],
  doors: ['gym', 'office', 'cafeteria', 'westHall','artRoom']
}

const westHall = {
  key: 'westHall',
  name: 'West Hall',
  items: ['cellPhone'],
  doors: ['cafeteria', 'mathRoom', 'eastHall']
}

const mathRoom = {
  key: 'mathRoom',
  name: 'Algebra for Everyone',
  items: ['cellPhone'],
  doors: ['westHall', 'artRoom']
}

const artRoom = {
  key: 'artRoom',
  name: 'Painting for People',
  items: ['cellPhone'],
  doors: ['mathRoom', 'eastHall']
}

const office = {
  key: 'office',
  name: 'Principal\'s Office',
  items: ['cellPhone'],
  doors: ['eastHall']

}

const rooms = [office, cafeteria, gym, westHall, eastHall, artRoom, mathRoom, playground]

rooms.forEach(room => {
  room.doors = room.doors.map(door => {
      return rooms.find(r => r.key === door);
  });
});



export default rooms;

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

