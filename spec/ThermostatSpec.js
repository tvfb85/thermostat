'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat default properties', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('resets the temperature to the default', function() {
      thermostat.increaseTemp(3);
      thermostat.reset();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

  });

  describe('temperature adjustment', function() {

    it('increases the temperature by 1', function() {
      thermostat.increaseTemp(1);
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('decreases the temperature by 1', function() {
      thermostat.decreaseTemp(1);
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });

  });

  describe('minimum and maximum temperatures', function() {

    it('temperature cannot be set below 10 degrees', function() {
      thermostat.decreaseTemp(11);
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it('cannot increase temp past 32 when PSM is off', function() {
      thermostat.setPowerSavingMode();
      thermostat.increaseTemp(13);
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });

  });

  describe('power saving mode', function() {

    it('power saving mode is on by default', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('power saving mode sets maximum temperature to 25', function() {
      thermostat.increaseTemp(6);
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });

    it('can set power saving mode to off', function() {
      thermostat.setPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

  });

  describe('energy usage', function() {

    it('reports low usage when below 18 degrees', function() {
      thermostat.decreaseTemp(3);
      expect(thermostat.energyUsage).toEqual('low-usage');
    });

    it('reports medium usage by default at 20 degrees ', function() {
      expect(thermostat.energyUsage).toEqual('medium-usage');
    });

    it('reports high usage when below 32 degrees but above 24', function() {
      thermostat.increaseTemp(8);
      expect(thermostat.energyUsage).toEqual('high-usage');
    });

  });

});
