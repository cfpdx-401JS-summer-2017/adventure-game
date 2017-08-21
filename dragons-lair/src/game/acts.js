// moves
const U = 'UP';
const D = 'DOWN';
const R = 'RIGHT';
const L = 'LEFT';
const S = 'SWORD';
const X = 'NONE';

const UR = U+R;
const UL = U+L;
const DR = D+R;
const DL = D+L;
const LR = L+R;
const US = U+S;
const DS = D+S;
const RS = R+S;
const LRS = L+R+S;
const DLRS = D+L+R+S;
const DLS = D+L+S;
const UDS = U+D+S;
const UDL = U+D+L;
const UDLR = U+D+L+R;
const URDS= U+R+D+S;

// dictionary

// we probably don't need the name and instructions properties
// maybe replace with video file, start and stop?

const acts = {
    ropes: {
        name: 'Ropes',
        instructions: 'Which way to swing?',
        video: 'http://media.w3.org/2010/05/bunny/movie.mp4',
        // successVideo: '/videos/S....mp3'
        // pauseTime
        // deathVideo
        // buzzVideo
        scenes: [
            { correct: R, buzz: S },
            { correct: R, buzz: S },
            { correct: R, buzz: S },
            { correct: R, buzz: S },
        ]
    },
    bedroom: {
        name: 'Bedroom',
        instructions: 'Someone is coming!',
        video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        scenes: [{ correct: U }],
    },
    flyingBarding: {
        name: 'Flying Barding',
        instructions: 'You\'re flying!',
        scenes: [
            { correct: R, buzz: DS },
            { correct: L, buzz: DS },
            { correct: R, buzz: DS },
            { correct: L, buzz: DS },
            { correct: L, buzz: DS },
            { correct: L, buzz: DS },
        ]
    },
    wizardsKitchen: {
        name: 'Wizard\'s Kitchen',
        instructions: 'Do you want to drink the potion? Choose RIGHT for yes, or LEFT for no',
        scenes: [{ correct: R, buzz: S }]
    },
    mausoleum: {
        name: 'Mausoleum',
        instructions: 'Skulls and bones are trying to get you!',
        scenes: [
            { correct: U, buzz: X },
            { correct: S, buzz: R },
            { correct: U, buzz: S },
            { correct: S, buzz: L },
            { correct: L, buzz: US },
            { correct: S, buzz: X },
        ]
    },
    piratesOfTheCaribbean: {
        name: 'Pirates of the Caribbean',
        instructions: 'Navigate the river',
        scenes: [
            { correct: L, buzz: DS},
            { correct: R, buzz: DS},
            { correct: L, buzz: DS},
            { correct: R, buzz: DS},
            { correct: UR, buzz: DS},
            { correct: UL, buzz: DS},
            { correct: UR, buzz: DS},
            { correct: UL, buzz: DS},
            { correct: R, buzz: DS},
            { correct: L, buzz: DS},
            { correct: R, buzz: DS},
            { correct: L, buzz: DS},
            { correct: UR, buzz: S},
        ]
    },
    elevatorFloor: {
        name: 'Elevator Floor',
        instructions: 'Which way?',
        scenes: [{ correct: L, buzz: S }]
    },
    vestibule: {
        name: 'Vestibule',
        instructions: 'The ceiling is crumbling on top of you!',
        scenes: [
            { correct: DR, buzz: S },
            { correct: R, buzz: DS },
        ]
    },
    boulderTrench: {
        name: 'Boulder Trench',
        instructions: 'Don\'t let the boulder roll over you!',
        scenes: [
            { correct: D, buzz: LRS },
            { correct: D, buzz: LRS },
            { correct: D, buzz: LRS },
            { correct: D, buzz: LRS },
            { correct: D, buzz: LRS },
            { correct: D, buzz: LRS },
            { correct: U, buzz: DLRS },
        ]
    },
    threeCaves: {
        name: 'Three Caves',
        instructions: 'Do something',
        scenes: [
            { correct: U, buzz: S },
            { correct: U, buzz: S },
            { correct: L, buzz: UDS },
        ]
    },
    blackKnight: {
        name: 'Black Knight',
        instructions: 'Do something',
        scenes: [
            { correct: X },
            { correct: L, buzz: DS },
            { correct: L, buzz: DS },
            { correct: R, buzz: S },
        ]
    },

    //TODO:
    //grimReaper
    //lizardKing
    //forge
    //breathingDoor
    //tentacles
    //mistRoom
    //wizardsChamber
    //ymcaRoom
    //spiralStaircase
    //fireRoom
    //yellowBrickRoad
    //catwalk
    //chapel
    //giantBat
    //throneRoom
    //tiltingRoom
    //mudmen

    elevatorFloor2: {
        name: 'Elevator Floor',
        instructions: 'Do something',
        scenes: [{ correct: LR, buzz: S }]
    },
    //FINAL ACT!!
    dragonsLair: {
        name: 'Dragon\'s Lair',
        instructions: 'Fight the dragon and save Princess Daphne from the bubble!',
        scenes: [
            { correct: L, buzz: URDS },
            { correct: L, buzz: D },
            { correct: L, buzz: URDS },
            { correct: DL, buzz: UR },
            { correct: X },
            { correct: DL },
            { correct: X },
            { correct: R, buzz: US },
            { correct: UR, buzz: DLS },
            { correct: RS, buzz: UDL },
            { correct: S },
            { correct: UL, buzz: DS },
            { correct: X },
            { correct: S, buzz: UDLR },
        ]
    }
};

// map the dictionary to an array
let actsArray = Object.keys(acts).map((key) => acts[key]);

export default actsArray;

// export default [acts.ropes, acts.bedroom];
