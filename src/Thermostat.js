function Thermostat() {
  var DEFAULT_TEMP = 20
  this.temp = DEFAULT_TEMP;
}


Thermostat.prototype.increaseTemp = function(degrees) {
  this.temp += degrees;
}

Thermostat.prototype.decreaseTemp = function(degrees) {
  this.temp -= degrees;
}
