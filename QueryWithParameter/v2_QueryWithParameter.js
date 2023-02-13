class HeatingPlan {
  constructor() {
    this._max = xxx;
    this._min = xxx;
  }

  get targetTemperature() {
    return this.xxxNewTargetTemperature(thermostat.selectedTemperature);
  }

  xxxNewTargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// caller
if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
else setOff();