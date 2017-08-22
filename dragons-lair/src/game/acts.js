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

// start and stop are in seconds

const acts = {
    // FIRST ACT
    bridgeAndThreeDoors: {
        revive: '/videos/S02R.mp4',
        scenes: [
            {
                start: 0,
                stop: 11,
                correct: S,
                challengeVideo: '/videos/S01Home.mp4#t=0,11',
                // successVideo: '/videos/S01Home.mp4#t=11,21',
                deathVideo: '/videos/S02D1.mp4'
            },
            {
                start: 22,
                stop: 24,
                correct: R,
                challengeVideo: '/videos/S01Home.mp4#t=11,24',
                successVideo: '/videos/S01Home.mp4#t=24,26',
                deathVideo: '/videos/S02D3.mp4' },
        ]
    },
    tentacles: {
        video: '/videos/S03.mp4',
        revive: '/videos/S03R.mp4',
        scenes: [
            {
                start: 1,
                stop: 3, 
                correct: S,
                challengeVideo: '/videos/S03.mp4#1,3',
                // successVideo: '/videos/S03.mp4#3,4',
                deathVideo: 'S03D1.mp4'
            },
            {
                start: 5,
                stop: 6,
                correct: U,
                challengeVideo: '/videos/S03.mp4#5,6',
                // successVideo: '/videos/S03.mp4#5,6',
                deathVideo: 'S03D2.mp4' },
            // { challengeVideo: '/videos/S03.mp4#7,8', start: 7, stop: 8, correct: R, deathVideo: 'S03D4.mp4' },
            // { challengeVideo: '/videos/S03.mp4#9,10', start: 9, stop: 10, correct: D, deathVideo: 'S03D3.mp4' },
            // { challengeVideo: '/videos/S03.mp4#11,12', start: 11, stop: 12, correct: L, deathVideo: 'S03D3.mp4' },
        ]
    }

    // ropes: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: R, buzz: S },
    //         { correct: R, buzz: S },
    //         { correct: R, buzz: S },
    //         { correct: R, buzz: S },
    //     ]
    // },
    // bedroom: {
    //     video: '.mp4',
    //     video: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    //     scenes: [{ correct: U }],
    // },
    // flyingBarding: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: R, buzz: DS },
    //         { correct: L, buzz: DS },
    //         { correct: R, buzz: DS },
    //         { correct: L, buzz: DS },
    //         { correct: L, buzz: DS },
    //         { correct: L, buzz: DS },
    //     ]
    // },
    // wizardsKitchen: {
    //     video: '.mp4',
    //     scenes: [{ correct: R, buzz: S }]
    // },
    // mausoleum: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: U, buzz: X },
    //         { correct: S, buzz: R },
    //         { correct: U, buzz: S },
    //         { correct: S, buzz: L },
    //         { correct: L, buzz: US },
    //         { correct: S, buzz: X },
    //     ]
    // },
    // piratesOfTheCaribbean: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: L, buzz: DS},
    //         { correct: R, buzz: DS},
    //         { correct: L, buzz: DS},
    //         { correct: R, buzz: DS},
    //         { correct: UR, buzz: DS},
    //         { correct: UL, buzz: DS},
    //         { correct: UR, buzz: DS},
    //         { correct: UL, buzz: DS},
    //         { correct: R, buzz: DS},
    //         { correct: L, buzz: DS},
    //         { correct: R, buzz: DS},
    //         { correct: L, buzz: DS},
    //         { correct: UR, buzz: S},
    //     ]
    // },
    // elevatorFloor: {
    //     video: '.mp4',
    //     scenes: [{ correct: L, buzz: S }]
    // },
    // vestibule: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: DR, buzz: S },
    //         { correct: R, buzz: DS },
    //     ]
    // },
    // boulderTrench: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: D, buzz: LRS },
    //         { correct: D, buzz: LRS },
    //         { correct: D, buzz: LRS },
    //         { correct: D, buzz: LRS },
    //         { correct: D, buzz: LRS },
    //         { correct: D, buzz: LRS },
    //         { correct: U, buzz: DLRS },
    //     ]
    // },
    // threeCaves: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: U, buzz: S },
    //         { correct: U, buzz: S },
    //         { correct: L, buzz: UDS },
    //     ]
    // },
    // blackKnight: {
    //     video: '.mp4',
    //     scenes: [
    //         { correct: X },
    //         { correct: L, buzz: DS },
    //         { correct: L, buzz: DS },
    //         { correct: R, buzz: S },
    //     ]
    // },

    // //TODO:
    // //grimReaper
    // //lizardKing
    // //forge
    // //breathingDoor
    // //mistRoom
    // //wizardsChamber
    // //ymcaRoom
    // //spiralStaircase
    // //fireRoom
    // //yellowBrickRoad
    // //catwalk
    // //chapel
    // //giantBat
    // //throneRoom
    // //tiltingRoom
    // //mudmen

    // elevatorFloor2: {
    //     name: 'Elevator Floor',
    //     instructions: 'Do something',
    //     scenes: [{ correct: LR, buzz: S }]
    // },
    // //FINAL ACT!!
    // dragonsLair: {
    //     name: 'Dragon\'s Lair',
    //     instructions: 'Fight the dragon and save Princess Daphne from the bubble!',
    //     scenes: [
    //         { correct: L, buzz: URDS },
    //         { correct: L, buzz: D },
    //         { correct: L, buzz: URDS },
    //         { correct: DL, buzz: UR },
    //         { correct: X },
    //         { correct: DL },
    //         { correct: X },
    //         { correct: R, buzz: US },
    //         { correct: UR, buzz: DLS },
    //         { correct: RS, buzz: UDL },
    //         { correct: S },
    //         { correct: UL, buzz: DS },
    //         { correct: X },
    //         { correct: S, buzz: UDLR },
    //     ]
    // }
};

// map the dictionary to an array
let actsArray = Object.keys(acts).map((key) => acts[key]);

export default actsArray;
