
import React from 'react';

export default function getKeyPress(event) {
    switch (event.keyCode) {
        case 37: {
            return 'left';
        }
        case 38: {
            return 'up';
        }
        case 39: {
            return 'right';
        }
        case 40: {
            return 'down';
        }
        case 80: {
            return 'p';
        }
        case 68: {
            return 'd';
        }
        case 85: {
            return 'u';
        }
        case 83: {
            return 's';
        }
        default: {
            return 'invalid';
        }
    }
}