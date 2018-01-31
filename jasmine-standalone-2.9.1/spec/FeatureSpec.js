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
});
