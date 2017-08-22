
import characters from './characters';

const rooms = [
    {
        key: 0,
        directions: ['right'],
        items: ['a fish'],
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
        items: [],
        characters: [characters[1]]
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
        items: ['bahn mi'],
        characters: []
    },
    {
        key: 7,
        directions: ['down'],
        items: [],
        characters: [characters[0]]
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
        items: [],
        characters: [characters[2]]
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
        characters: [characters[3]]
    }
];

export default rooms;