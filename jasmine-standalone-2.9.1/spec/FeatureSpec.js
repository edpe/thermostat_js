'use strict';

describe('Feature Test:', function(){
  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat();

  });

  it('can change temperature', function(){
    expect(thermostat.temperature).toEqual(20)
    thermostat.increaseTemp(1)
    expect(thermostat.temperature).toEqual(21)
    thermostat.decreaseTemp(2)
    expect(thermostat.temperature).toEqual(19)
  });
  
  it('keeps temperature between min of 10 and max of 25 degrees in power saving mode', function(){
    thermostat.decreaseTemp(10)
    expect(function() {thermostat.decreaseTemp(1)}).toThrow("Temperature can not be reduced below 10 degrees")
    expect(function() {thermostat.increaseTemp(16)}).toThrow("Temperate can not be increased above 25 degrees in powersaving mode")
  })
});
