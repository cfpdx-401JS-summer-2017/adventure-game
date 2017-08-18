const playground = {
  key: 'playground',
  name: 'Playground',
  items: [],
  doors: ['gym']
}

const cafeteria = {
  key: 'cafeteria',
  name: 'Food Trough',
  items: [],
  doors: ['eastHall', 'westHall', 'gym']
}

const gym = {
  key: 'gym',
  name: 'Gym',
  items: [],
  doors: ['eastHall', 'cafeteria', 'playground']
}

const eastHall = {
  key: 'eastHall',
  name: 'East Hall',
  items: [],
  doors: ['gym', 'office', 'cafeteria', 'westHall','artRoom']
}

const westHall = {
  key: 'westHall',
  name: 'West Hall',
  items: [],
  doors: ['cafeteria', 'mathRoom', 'eastHall']
}

const mathRoom = {
  key: 'mathRoom',
  name: 'Algebra for Everyone',
  items: [],
  doors: ['westHall', 'artRoom']
}

const artRoom = {
  key: 'artRoom',
  name: 'Painting for People',
  items: [],
  doors: ['mathRoom', 'eastHall']
}

const office = {
  key: 'office',
  name: 'Principal\'s Office',
  items: [],
  doors: ['eastHall']

}