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
    it('will not allow temperature to increase above 25 degrees in powersaving mode', function(){
      expect(function() {thermostat.increaseTemp(6)}).toThrow("Temperate can not be increased above 25 degrees in current mode")
    })
  });

  describe('decrease', function() {
    it('decreases the temperature', function(){
      thermostat.decreaseTemp(1);
      expect(thermostat.temperature).toEqual(19)
    });
    it('will not allow temperature to be reduced below 10 degrees', function(){
      thermostat.decreaseTemp(10)
      expect(function() {thermostat.decreaseTemp(1)}).toThrow("Temperature can not be reduced below 10 degrees")
    })
  });

  describe('powersaving', function() {
    it('powersaving mode can be turned on', function(){
      thermostat.powerSavingOn()
      expect(thermostat.powerSaving).toBe(true)
    });

    it('powersaving mode can be turned off', function(){
      thermostat.powerSavingOff()
      expect(thermostat.powerSaving).toBe(false)
    });

    it('powersaving mode is on by default', function(){
      expect(thermostat.powerSaving).toBe(true)
    })
  });

});
