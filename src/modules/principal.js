

module.exports = function move(princCurrent, playerCurrent) {
  let princDestIndex = Math.floor((Math.random() * princCurrent.doors.length));
  // console.log('princCurr: ',princCurrent, 'playCurr: ', playerCurrent);
    console.log('adjrooms: ',princCurrent.doors.includes(playerCurrent));

  let princDest = princCurrent.doors.includes(playerCurrent) ? playerCurrent : princCurrent.doors[princDestIndex];
  return princDest;
}

