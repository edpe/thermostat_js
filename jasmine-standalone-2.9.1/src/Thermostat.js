function Thermostat (){
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
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

  Thermostat.prototype.reset = function(){
    this.temperature = this.DEFAULT_TEMP
  }

  Thermostat.prototype.currentUsage = function() {
    if (this.temperature > 25){
      return "high-usage"
    } else if (this.temperature > 18) {
      return "medium-usage"
    } else {
      return "low-usage"
    }
  }
