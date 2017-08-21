const field = {
    key: 'field',
    name: 'A Pleasant Field',
    items: ['Magic Bean'],
    enemies: ['cuddlefish'],
    doors: ['bean stalk'],
    initText: 'Benson Wigglepuff, a noteworthy puggle of great importance, woke up to find that the Divine Cheeseburger he\'d been saving for breakfast was stolen from his rucksack while he dreamt. Using his dog-like sense of whiffing, he whiffed out the thief\'s tracks and they\'ve led him to this field. Benson sees a fertile patch of soil, and a magic bean. All in order. But lo\'! The dreaded Cuddlefish, in all its adorable-yet-eldritch horror levitates between him and the bean.'
};

const foyer = {
    key: 'foyer',
    name: 'Foyer',
    items: [],
    enemies: [],
    doors: ['throne', 'hallway'],
    initText: 'Having climbed the beanstalk, Benson spies a great castle resting atop the clouds. The smell of the divine burg is strong, and benson soon finds himself in a grand foyer within the castle. Testing all the door handles,he finds that the only unlocked areas seem to be through a grand set of double-doors as tall as twenty Bensons, and an unassuming doorway that seems to lead further in.'
};

const hallway = {
    key: 'hallway',
    name: 'Long Hallway',
    items: [],
    enemies: [],
    doors: ['garage', 'lounge'],
    initText: 'Benson steps through the less grandiose of his two options forward, and emerges in a hallway adorned with pictures of Nazi generals. A grim revelation that Benson\'s wrongdoers are of the lowest breed of criminal. A much lower breed than puggles such as Mr. Wigglepuff, which are a delightful breed of pup. Two doors stand out to Benson as viable options, one labeled Employee Lounge and one labeled Garage.'
};

const garage = {
    key: 'garage',
    name: 'Garage',
    items: ['Knife', 'Staplegun'],
    enemies: [],
    doors: ['hallway']
};

const lounge = {
    key: 'lounge',
    name: 'Employee Lounge',
    items: ['Luger'],
    enemies: ['jimbo'],
    doors: ['hallway']
};

const throne = {
    key: 'throne',
    name: 'Throne Room',
    items:['Burger', 'Parachute'],
    enemies: ['glaarg'],
    doors: ['foyer', 'window']
};

const rooms = [field, foyer, hallway, garage, lounge, throne];

rooms.forEach(room => {
    room.doors = room.doors.map(door => {
        return rooms.find(r => r.key === door);
    });
});

export default rooms;