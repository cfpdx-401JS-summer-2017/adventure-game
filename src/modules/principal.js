

module.exports = function move(princCurrent, playerCurrent) {
  let princDestIndex = Math.floor((Math.random() * princCurrent.doors.length));
  // console.log('adj: ', princCurrent.doors[0].doors, playerCurrent.doors)
  // return princCurrent.doors[0].doors.map(door => {
  //   if (playerCurrent.doors.indexOf(door) < 0)
  //     console.log(playerCurrent.doors)
  // })
  // console.log('mD:',mutualDoors)
  let princDest = princCurrent.doors.includes(playerCurrent) ? playerCurrent : princCurrent.doors[princDestIndex];
  // console.log('pd: ', princDest)
  return princDest;
}

