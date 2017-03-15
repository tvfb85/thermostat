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
      thermostat.adjustTemp(23);
      thermostat.reset();
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

  });

  describe('temperature adjustment', function() {

    it('increases the temperature to 21', function() {
      thermostat.adjustTemp(21);
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it('decreases the temperature to 18', function() {
      thermostat.adjustTemp(18);
      expect(thermostat.getCurrentTemp()).toEqual(18);
    });

  });

  describe('minimum and maximum temperatures', function() {

    it('temperature cannot be set below 10 degrees', function() {
      thermostat.adjustTemp(9);
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });

    it('cannot increase temp past 32 when PSM is off', function() {
      thermostat.setPowerSavingMode();
      thermostat.adjustTemp(33);
      expect(thermostat.getCurrentTemp()).toEqual(32);
    });

  });

  describe('power saving mode', function() {

    it('power saving mode is on by default', function() {
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('power saving mode sets maximum temperature to 25', function() {
      thermostat.adjustTemp(26);
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });

    it('can set power saving mode to off', function() {
      thermostat.setPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });

  });

  describe('energy usage', function() {

    it('reports low usage when below 18 degrees', function() {
      thermostat.adjustTemp(15);
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('reports medium usage by default at 20 degrees ', function() {
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });

    it('reports high usage when below 32 degrees but above 24', function() {
      thermostat.adjustTemp(28);
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });
  });

});
