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
    thermostat.powerSavingOn()
    expect(function() {thermostat.decreaseTemp(11)}).toThrow("Temperature can not be reduced below 10 degrees")
    expect(function() {thermostat.increaseTemp(20)}).toThrow("Temperate can not be increased above 25 degrees in current mode")
  })

  it('keeps temperature between min of 10 and max of 32 degrees in power saving mode', function(){
    thermostat.powerSavingOff()
    expect(function() {thermostat.increaseTemp(15)}).toThrow("Temperate can not be increased above 32 degrees in current mode")
  })
  it('can reset the temperate back to default temperature 20 degrees',function(){
    thermostat.increaseTemp(5)
    thermostat.decreaseTemp(10)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })

  it('can return current energy usage',function(){
    expect(thermostat.currentUsage()).toEqual("medium-usage")
    thermostat.decreaseTemp(10)
    expect(thermostat.currentUsage()).toEqual("low-usage")
    thermostat.powerSavingOff()
    thermostat.increaseTemp(16)
    expect(thermostat.currentUsage()).toEqual("high-usage")
  })
});
