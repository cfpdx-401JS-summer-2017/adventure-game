
import React from 'react';

export function Player({ player }) {
    let playerItems = 'You are carrying ' + player.items + '.';
    if (player.items.length === 0) {
      playerItems = 'You are carrying nothing.';
    } 
    return (
      <div>
        <p>
          <span className="playerMsg">{playerItems}</span>
        </p>
      </div>
    );
  }
  
