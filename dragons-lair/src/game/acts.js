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

const acts = [
    {
        name: 'Ropes',
        instructions: 'Which way to swing?',
        scenes: [
            { correct: R },
            { correct: R },
            { correct: R },
            { correct: R }
        ]
    },{
        name: 'Bedroom',
        instructions: 'Someone is coming!',
        scenes: [{ correct: U }],
    },{
        name: 'Wizard\'s Kitchen',
        instructions: 'Do you want to drink the potion? Choose RIGHT for yes, or LEFT for no',
        scenes: [{ correct: R, buzz: S }]
    },{
        name: 'Mausoleum',
        instructions: 'Skulls and bones are trying to get you!',
        scenes: [
            { correct: U, buzz: X },
            { correct: S, buzz: R },
            { correct: U, buzz: S },
            { correct: S, buzz: L },
            { correct: L, buzz: U }, //U S
            { correct: S, buzz: X }
        ]
    },{
        name: 'Vestibule',
        instructions: 'The ceiling is crumbling on top of you!',
        scenes: [
            { correct: D, buzz: S }, // D R
            { correct: R, buzz: D } //D S
        ]
    },{
        //FINAL ACT!!
        name: 'Dragon\'s Lair',
        instructions: 'Fight the dragon and save Princess Daphne from the bubble!',
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
];

export default acts;