'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP = 25;
  this.currentTemp = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this.currentTemp;
};

Thermostat.prototype.increaseTemp = function(degrees) {
    this.currentTemp + degrees > this.MAXIMUM_TEMP ? this.currentTemp = this.MAXIMUM_TEMP : this.currentTemp += degrees;
    this.currentEnergyUsage(this.currentTemp);
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this.currentTemp - degrees < this.MINIMUM_TEMP ? this.currentTemp = this.MINIMUM_TEMP : this.currentTemp -= degrees;
  this.currentEnergyUsage(this.currentTemp);
};

Thermostat.prototype.setPowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode) {
    this.MAXIMUM_TEMP = 25;
  } else {
    this.MAXIMUM_TEMP = 32;
  }
  return this.powerSavingMode;
};

Thermostat.prototype.reset = function() {
  this.currentTemp = this.DEFAULT_TEMP;
  this.currentEnergyUsage(this.currentTemp);
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this.currentTemp < 18) {
    return 'low-usage';
  } else if (this.currentTemp < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
