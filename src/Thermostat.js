function Thermostat() {
  var DEFAULT_TEMP = 20;
  var MINIMUM_TEMP = 10;
  this.temp = DEFAULT_TEMP;
  this.minimumTemp = MINIMUM_TEMP;
  this.maximumTemp = 32;
  this.powerSavingMode = true;
}

Thermostat.prototype.increaseTemp = function(degrees) {
    this.temp + degrees > this.maximumTemp ? this.temp = this.maximumTemp : this.temp += degrees;
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this.temp - degrees < this.minimumTemp ? this.temp = this.minimumTemp : this.temp -= degrees;
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
