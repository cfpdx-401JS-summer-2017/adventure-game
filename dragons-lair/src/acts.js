// moves
const R = 'RIGHT';
const L = 'LEFT';
const U = 'UP';
const D = 'DOWN';
const S = 'SWORD';
const N = 'NONE';
const US = 'UP-SWORD';
const DR = 'DOWN-RIGHT';
const DS = 'DOWN-SWORD'

const acts = {

    wizardsKitchen: {
        name: 'Wizard\'s Kitchen',
        scenes: [{ correct: R, buzz: S, instructions: 'Do you want to drink the potion? Choose RIGHT for yes, or LEFT for no' }]
    },
    mausoleum: {
        name: 'Mausoleum',
        scenes: [
            { correct: U, buzz: N, instructions: 'Bones are trying to get you!'},
            { correct: S, buzz: R, instructions: 'Skulls are trying to get you!'},
            { correct: U, buzz: S },
            { correct: S, buzz: L },
            { correct: L, buzz: US },
            { correct: S, buzz: N }
        ]
    },
    vestibule: {
        name: 'Vestibule',
        scenes: [
            { correct: DR, buzz: S },
            { correct: R, buzz: DS }
        ]
    },
    // flyingBarding: {
    //     name: 
    // },

    

}

export default acts;
