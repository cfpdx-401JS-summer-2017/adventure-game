
const penguin = {
    key: 'penguin',
    name: 'penguin',
    item: 'bamboo',    
    need: 'a fish',
    speech:[{
        right: 'Yay! Awesome sauce! Here is the bamboo!',
        wrong: 'No thank you, come again!',
        nothing: 'Please bring me a fish!'
    }]
}

const panda = {
    key: 'panda',
    name: 'panda',
    item: 'a key',    
    need: 'bamboo',
    speech:[{
        right: 'Yay! Awesome sauce! Here is the key!',
        wrong: 'No thank you, come again!',
        nothing: 'Please bring me bamboo!'
    }] 
}

const door = {
    key: 'door',
    name: 'locked door',
    item: '',    
    need: 'a key',
    speech:[]
}

const tiger = {
    key: 'tiger',
    name: 'tiger',
    item: '',    
    need: 'bahn mi',
    speech:[{
        right: 'Yay! You win!',
        wrong: 'No thank you, come again!',
        nothing: 'Please bring me bahn mi!'
    }]
}

const characters = [penguin, panda, door, tiger];

export default characters;