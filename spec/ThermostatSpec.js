describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increases the temperature by 1', function() {
    thermostat.increaseTemp(1);
    expect(thermostat.temp).toEqual(21);
  });

  it('decreases the temperature by 1', function() {
    thermostat.decreaseTemp(1);
    expect(thermostat.temp).toEqual(19);
  });

  it('temperature cannot be set below 10 degrees', function() {
    thermostat.decreaseTemp(11);
    expect(thermostat.temp).toEqual(10);
  });

  it('power saving mode is on by default', function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });

  it('power saving mode sets maximum temperature to 25', function() {
    thermostat.increaseTemp(6);
    expect(thermostat.temp).toEqual(25);
  });

  it('cannot increase temp past 32 when PSM is off', function() {
    thermostat.setPowerSavingMode();
    thermostat.increaseTemp(13);
    expect(thermostat.temp).toEqual(32);
  });

  it('sets power saving mode on or off when called', function() {
    thermostat.setPowerSavingMode();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('resets the temperature to the default', function() {
    thermostat.increaseTemp(3);
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

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
