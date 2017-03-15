function Thermostat() {
  var DEFAULT_TEMP = 20;
  var MINIMUM_TEMP = 10;
  this.temp = DEFAULT_TEMP;
  this.minimumTemp = MINIMUM_TEMP;
}

Thermostat.prototype.increaseTemp = function(degrees) {
  this.temp += degrees;
};

Thermostat.prototype.decreaseTemp = function(degrees) {
  this.temp - degrees < this.minimumTemp ? this.temp = this.minimumTemp : this.temp -= degrees;
};
