

module.exports = function move(princCurrent, playerCurrent) {
  let princDestIndex = Math.floor((Math.random() * princCurrent.doors.length));
  let princDest = princCurrent.doors.includes(playerCurrent) ? playerCurrent : princCurrent.doors[princDestIndex];
  return princDest;
}

