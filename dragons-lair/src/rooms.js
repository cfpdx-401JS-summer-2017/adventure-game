// moves
const R = 'right';
const L = 'left';
const U = 'up';
const D = 'down';
const S = 'sword';

const wizardsKitchen = {
    name: 'Wizard\'s Kitchen',
    correct: [R],
    death: [U, D, L]
}

//TODO: add more rooms

const rooms = [wizardsKitchen];

// rooms.forEach(room => {
//     rooms.doors = rooms.doors.map(door => {
//         return rooms.find(r => r.key === door);
//     });
// });

export default rooms;
