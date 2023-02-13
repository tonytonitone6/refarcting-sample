// caller
if (!aPlan.xxxNewWithinRange(aRoom.daysTempRange)) {
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

  // it's a temp function to replace withinRange
  xxxNewWithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}