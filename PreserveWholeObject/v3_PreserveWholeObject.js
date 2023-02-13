// caller
if (!aPlan.withinRange(aRoom.daysTempRange)) {
  alerts.push('room temperature went outside range');
}


class HeatingPlan {
  constructor() {
    this._temperatureRange = {
      low: 100,
      high: 200,
    }
  }

  withinRange(aNumberRange) {
    return aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high;
  }
}