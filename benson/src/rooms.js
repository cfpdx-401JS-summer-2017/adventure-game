import enemies from './enemies';

const field = {
    key: 'field',
    name: 'A Pleasant Field',
    items: ['Magic Bean'],
    enemies: [enemies.cuddlefish],
    doors: ['foyer'],
    initText: 'Benson Wigglepuff, a noteworthy puggle of great importance, woke up to find that the Divine Cheeseburger he\'d been saving for breakfast was stolen from his rucksack while he dreamt. Using his dog-like sense of whiffing, he whiffed out the thief\'s tracks and they\'ve led him to this field. Benson sees a fertile patch of soil, and a magic bean. All in order. But lo\'! The dreaded Cuddlefish, in all its adorable-yet-eldritch horror levitates between him and the bean.'
};

const foyer = {
    key: 'foyer',
    name: 'Castle Entrance',
    items: [],
    enemies: null,
    doors: ['throne', 'hallway'],
    initText: 'Benson plants the magic bean and a great stalk sprouts, climbing up to the heavens. Having climbed the beanstalk, Benson spies a great castle resting atop the clouds. The smell of the divine burg is strong, and Benson finds himself in a grand foyer within the castle. Testing all the door handles,he finds that the only unlocked areas seem to be through a grand set of double-doors as tall as twenty Bensons, and an unassuming doorway that seems to lead further in.'
};

const hallway = {
    key: 'hallway',
    name: 'Long Hallway',
    items: [],
    enemies: null,
    doors: ['garage', 'lounge', 'foyer'],
    initText: 'Benson finds himself in the hallway, which is adorned with pictures of Nazi generals. A grim revelation that Benson\'s wrongdoers are of the lowest breed of criminal. A much lower breed than puggles such as Mr. Wigglepuff, which are a delightful breed of pup. Two doors stand out to Benson as viable options, one labeled Employee Lounge and one labeled Garage.'
};

const garage = {
    key: 'garage',
    name: 'Garage',
    items: ['Staplegun'],
    enemies: null,
    doors: ['hallway'],
    initText: 'Benson stands in a garage full of supply crates and floating space cars, for traveling the clouds. Among wrenches and screwdrivers, Benson sees a staple gun. He also sees no sign of his burger. All the grease in here is leaking from a space car, not from delicious beef.'
};

const lounge = {
    key: 'lounge',
    name: 'Employee Lounge',
    items: ['Luger'],
    enemies: [enemies.jimbo],
    doors: ['hallway'],
    initText: 'Benson stands in an employee lounge, lit dimly by those awful flourescent tube lights.'
};

const throne = {
    key: 'throne',
    name: 'Throne Room',
    items:['Burger'],
    enemies: [enemies.glaarg],
    doors: ['foyer'],
    initText: 'Benson stands in a throne room, the walls and ceiling plated with gold, and untold treasures piled high in the corners closest to the throne.'
};

const rooms = [field, foyer, hallway, garage, lounge, throne];

rooms.forEach(room => {
    room.doors = room.doors.map(door => {
        return rooms.find(r => r.key === door);
    });
});

export default rooms;