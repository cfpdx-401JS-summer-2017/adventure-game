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

const scenes = [
    // bridge
    {
        start: 0,
        stop: 11,
        correct: S,
        challengeVideo: '/videos/S01Home.mp4#t=0,11',
        deathVideo: '/videos/S02D1.mp4'
    },
    // three doors
    {
        start: 22,
        stop: 24,
        correct: R,
        prevSuccessVideo: '/videos/S01Home.mp4#t=11,22',
        challengeVideo: '/videos/S01Home.mp4#t=22,24',
        deathVideo: '/videos/S02D3.mp4'
    },
    // tentacles
    {
        start: 0,
        stop: 3, 
        correct: S,
        prevSuccessVideo: '/videos/S01Home.mp4#t=24,26',
        challengeVideo: '/videos/S03.mp4#0,3',
        deathVideo: '/videos/S03D1.mp4'
    },{
        start: 5,
        stop: 6,
        correct: U,
        prevSuccessVideo: '/videos/S03.mp4#3,4',
        challengeVideo: '/videos/S03.mp4#5,6',
        deathVideo: '/videos/S03D2.mp4'
    },{
        start: 7,
        stop: 8,
        correct: R,
        prevSuccessVideo: '/videos/S03.mp4#6,7',
        challengeVideo: '/videos/S03.mp4#7,8',
        deathVideo: 'S03D4.mp4'
    },{
        start: 9,
        stop: 10,
        correct: D,
        prevSuccessVideo: '/videos/S03.mp4#8,9',
        challengeVideo: '/videos/S03.mp4#9,10',
        deathVideo: 'S03D3.mp4'
    },{
        start: 11,
        stop: 12,
        correct: L,
        prevSuccessVideo: '/videos/S03.mp4#10,11',
        challengeVideo: '/videos/S03.mp4#11,12',
        deathVideo: 'S03D3.mp4'
    }
];

export default scenes;
