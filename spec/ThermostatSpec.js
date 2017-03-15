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
  //
  // it('power saving mode sets maximum temperature to 25', function() {
  //   expect(thermostat.powerSavingMode).toEqual(true);
  //   expect(thermostat.maximumTemp).toEqual(25);
  // });

  it('sets power saving mode on or off when called', function() {
    thermostat.setPowerSavingMode();
    expect(thermostat.powerSavingMode).toEqual(false);
  });
});
