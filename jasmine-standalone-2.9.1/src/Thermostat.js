function Thermostat (){
  this.temperature = 20
  this.MINTEMP = 10
  this.PSMAXTEMP = 25
  this.MAXTEMP = 32
  this.powerSaving = true
};

  Thermostat.prototype.increaseTemp = function(number) {
    if (this._isAboveMaxTemp(number)) throw `Temperate can not be increased above ${this._maxTemp()} degrees in current mode`
    return this.temperature += number;
  };

  Thermostat.prototype.decreaseTemp = function(number) {
    if (this._isBelowMinTemp(number)) throw "Temperature can not be reduced below 10 degrees"
    return this.temperature -= number;
  };

  Thermostat.prototype._isBelowMinTemp = function(number) {
    return this.temperature - number < this.MINTEMP
  };

  Thermostat.prototype._isAboveMaxTemp = function(number) {
    return this.temperature + number > this._maxTemp()
  };

  Thermostat.prototype.powerSavingOn = function() {
    this.powerSaving = true;
  };

  Thermostat.prototype.powerSavingOff = function() {
    this.powerSaving = false;
  };

  Thermostat.prototype._maxTemp = function() {
    return this.powerSaving ? this.PSMAXTEMP : this.MAXTEMP
  };
