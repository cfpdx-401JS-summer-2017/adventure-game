// moves
const R = 'RIGHT';
const L = 'LEFT';
const U = 'UP';
const D = 'DOWN';
const S = 'SWORD';
const X = 'NONE';
// const US = 'UP-SWORD';
// const DR = 'DOWN-RIGHT';
// const DS = 'DOWN-SWORD'

const acts = {

    //STILL WORKING ON THIS

    ropes: {
        name: 'Ropes',
        scenes: [
            { correct: R },
            { correct: R },
            { correct: R },
            { correct: R }
        ]
    },

    bedroom: {
        name: 'Bedroom',
        scenes: [{ correct: U }],
    },
    
    wizardsKitchen: {
        name: 'Wizard\'s Kitchen',
        scenes: [{ correct: R, buzz: S, instructions: 'Do you want to drink the potion? Choose RIGHT for yes, or LEFT for no' }]
    },
    mausoleum: {
        name: 'Mausoleum',
        scenes: [
            { correct: U, buzz: X, instructions: 'Bones are trying to get you!'},
            { correct: S, buzz: R, instructions: 'Skulls are trying to get you!'},
            { correct: U, buzz: S },
            { correct: S, buzz: L },
            { correct: L, buzz: U }, //U S
            { correct: S, buzz: X }
        ]
    },
    vestibule: {
        name: 'Vestibule',
        scenes: [
            { correct: D, buzz: S, instructions: 'The ceiling is crumbling next to you!'}, // D R
            { correct: R, buzz: D, instructions: 'The ceiling is crumbling on top of you!' } //D S
        ]
    },

    //FINAL ACT!!
    dragonslair: {
        name: 'Dragon\'s Lair',
        scenes: [
            { correct: L },	
            { correct: L },
            { correct: L },
            { correct: D }, //D L	
            { correct: X },
            { correct: D }, //D L	
            { correct: X },
            { correct: R },
            { correct: U }, //U R	
            { correct: R }, //R S	
            { correct: S },
            { correct: U }, // U L	
            { correct: X },
            { correct: S }

            //buzz: U D R S	D	U D R S	U R	 	 	 	U S	D L S	U D L	 	D S	 	U D L R
        ]
    }
    

}

export default [acts.ropes, acts.bedroom, acts.vestibule, acts.wizardsKitchen, acts.mausoleum, acts.dragonsLair];
