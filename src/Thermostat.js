function Thermostat() {
  var DEFAULT_TEMP = 20;
  var MINIMUM_TEMP = 10;
  var MAXIMUM_TEMP = 25;
  this.temp = DEFAULT_TEMP;
  this.defaultTemp = DEFAULT_TEMP;
  this.minimumTemp = MINIMUM_TEMP;
  this.maximumTemp = MAXIMUM_TEMP;
  this.powerSavingMode = true;
  this.energyUsage = 'medium-usage';
}

Thermostat.prototype.increaseTemp = function(degrees) {
    this.temp + degrees > this.maximumTemp ? this.temp = this.maximumTemp : this.temp += degrees;
    this.currentEnergyUsage(this.temp);
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this.temp - degrees < this.minimumTemp ? this.temp = this.minimumTemp : this.temp -= degrees;
  this.currentEnergyUsage(this.temp);
};

Thermostat.prototype.setPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode) {
    this.maximumTemp = 25;
  } else {
    this.maximumTemp = 32;
  }
  return this.powerSavingMode;
};

Thermostat.prototype.reset = function() {
  this.temp = this.defaultTemp;
  this.currentEnergyUsage(this.temp);
};

Thermostat.prototype.currentEnergyUsage = function(currentTemp) {
  if (currentTemp < 18) {
    this.energyUsage = 'low-usage';
  } else if (currentTemp < 25) {
    this.energyUsage = 'medium-usage';
  } else {
    this.energyUsage = 'high-usage';
  }
};
