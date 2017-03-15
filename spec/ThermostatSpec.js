describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('increases the temperature by 1', function() {
    thermostat.increaseTemp(1)
    expect(thermostat.temp).toEqual(21);
  });

  it('decreases the temperature by 1', function() {
    thermostat.decreaseTemp(1)
    expect(thermostat.temp).toEqual(19);
  });


});
