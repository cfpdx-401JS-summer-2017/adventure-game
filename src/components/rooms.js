
const rooms = [
    {
        key: 0,
        directions: ['right'],
        items: [{
            item: 'a fish',
            hidden: false
        }],
        characters: []
    },
    {
        key: 1,
        directions: ['up', 'right', 'left'],
        items: [],
        characters: []
    },
    {
        key: 2,
        directions: ['right', 'left'],
        items: [],
        characters: []
    },
    {
        key: 3,
        directions: ['up', 'left'],
        items: [],
        characters: []
    },
    {
        key: 4,
        directions: ['up'],
        items: [{
            item: 'key',
            hidden: true
        }],
        characters: ['panda']
    },
    {
        key: 5,
        directions: ['up', 'down'],
        items: [],
        characters: []
    },
    {
        key: 6,
        directions: ['up'],
        items: [{
            item: 'bahn mi',
            hidden: false
        }],
        characters: []
    },
    {
        key: 7,
        directions: ['down'],
        items: [{
            item: 'bamboo',
            hidden: true
        }],
        characters: ['penguin']
    },
    {
        key: 8,
        directions: ['up', 'right', 'down'],
        items: [],
        characters: []
    },
    {
        key: 9,
        directions: ['down', 'left'],
        items: [],
        characters: []
    },
    {
        key: 10,
        directions: ['up', 'right', 'down'],
        items: [],
        characters: []
    },
    {
        key: 11,
        directions: ['up', 'left'],
        items: [],
        characters: []
    },
    {
        key: 12,
        directions: ['right', 'down'],
        items: [],
        characters: []
    },
    {
        key: 13,
        directions: ['right', 'left'],
        items: [{
            item: 'locked door',
            hidden: false
        }],
        characters: []
    },
    {
        key: 14,
        directions: ['down', 'left'],
        items: [],
        characters: []
    },
    {
        key: 15,
        directions: ['down'],
        items: [],
        characters: ['tiger']
    }
];

export default rooms;