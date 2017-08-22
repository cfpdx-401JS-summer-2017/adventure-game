

module.exports = function move(princCurrent, playerCurrent) {
  let princDestIndex = Math.floor((Math.random() * princCurrent.doors.length));
  // console.log('princCurr: ',princCurrent, 'playCurr: ', playerCurrent);
  let princDest = princCurrent.doors.includes(playerCurrent) ? playerCurrent : princCurrent.doors[princDestIndex];
  // let princDest = princCurrent.doors[princDestIndex];
  return princDest;
}

