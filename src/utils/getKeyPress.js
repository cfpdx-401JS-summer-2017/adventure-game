
export default function getKeyPress(event) {
    switch (event.keyCode) {
        case 37: {
            return ['left', -1];
        }
        case 38: {
            return ['up', 4];
        }
        case 39: {
            return ['right', 1];
        }
        case 40: {
            return ['down', -4];
        }
        case 80: {
            return ['p'];
        }
        case 68: {
            return ['d'];
        }
        case 85: {
            return ['u'];
        }
        case 83: {
            return ['s'];
        }
        default: {
            return ['invalid'];
        }
    }
}