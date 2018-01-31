'use strict';

describe('Thermostat', function(){
  var thermostat


  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('is initially set to 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  describe('increase', function() {
    it('increases the temperature', function(){
      thermostat.increaseTemp(1);
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe('decrease', function() {
    it('decreases the temperature', function(){
      thermostat.decreaseTemp(1);
      expect(thermostat.temperature).toEqual(19)
    });
  });
});
