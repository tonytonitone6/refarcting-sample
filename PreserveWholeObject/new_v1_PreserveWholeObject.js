// caller 

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!AnimationPlaybackEvent.withinRange(low, high)) {
  alerts.push("room temperature went outside range");
}

// caller v2

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
const isWithRange = aPlan.withinRange(low, high);
if (!isWithRange) {
  alerts.push('room temperature went outside range');
}

// caller v3
const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const hight = tempRange.high;
const isWithRange = aPlan.withinRange(low, high);
if (!isWithRange) {
  alerts.push('room temperature went outside range');
}

// caller v4
const tempRange = aRoom.daysTempRange;
const isWithRange = xxxNewWithinRange(aPlan, tempRange);
if (!isWithRange) {
  alerts.push('room temperature went outside range');
}

function xxxNewWithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithRange = aPlan.withinRange(low, high);

  return isWithRange;
}