import React from 'react';

export function Start({onStart}) {
  return (
    <div className="startWrapper" style={{ width: '100%', height: '100%', zIndex: '100', backgroundColor: 'white'}}>
      <h2>Welcome to the Game of School</h2>
      <p>
				You are the prime jokester at your school, but your glory days may be over. Unless you can gather all evidence of your pranks and dispose of it quickly, the principal will suspend you for good.
      </p>
      <p>
				Search the rooms of your school for incriminating evidence. Pick up all of the items to win the game. If the principal catches you, use your wits to get free, or else you lose!
      </p>
      <button onClick={() => onStart()}>Play the Game!</button>
    </div>
  );
}

export function Win({onWin}) {
  return (
    <div className="startWrapper" style={{ width: '100%', height: '100%', zIndex: '100', backgroundColor: 'white'}}>
      <h2>Congratulations! You Won!</h2>
      <p>
				Percy Prankster makes his way out of the school with all the evidence of his dirty deeds.
      </p>
      <button onClick={() => onWin()}>Restart the Game</button>
    </div>
  );
}