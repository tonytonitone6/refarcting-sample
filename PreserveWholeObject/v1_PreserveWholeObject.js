// caller
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!aPlan.withinRange(low, high)) {
  alerts.push('room temperature went outside range');
}

class HeatingPlan {
  constructor() {
    this._temperatureRange = {
      low: 100,
      high: 200,
    }
  }

  withinRange(bottom, top) {
    return (bottom >= this.temperatureRange.low) && (top <= this._temperatureRange.high);
  }
}