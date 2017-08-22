

module.exports = function move(princCurrent, playerCurrent) {
  let princDestIndex = Math.floor((Math.random() * princCurrent.doors.length));
  console.log('adj: ', princCurrent.doors[0].doors, playerCurrent.doors)
  let princDest = princCurrent.doors.includes(playerCurrent) ? playerCurrent : princCurrent.doors[princDestIndex];
  return princDest;
}

