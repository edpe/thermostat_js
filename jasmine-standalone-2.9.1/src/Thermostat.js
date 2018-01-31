function Thermostat (){
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.MIN_TEMP = 10
  this.PS_MAX_TEMP = 25
  this.MAX_TEMP = 32
  this.HIGH_ENERGY_LIMIT = 25
  this.MEDIUM_ENERGY_LIMIT = 18
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
    return this.temperature - number < this.MIN_TEMP
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
    return this.powerSaving ? this.PS_MAX_TEMP : this.MAX_TEMP
  };

  Thermostat.prototype.reset = function(){
    this.temperature = this.DEFAULT_TEMP
  }

  Thermostat.prototype.currentUsage = function() {
    if (this.temperature > this.HIGH_ENERGY_LIMIT){
      return "high-usage"
    } else if (this.temperature > this.MEDIUM_ENERGY_LIMIT) {
      return "medium-usage"
    } else {
      return "low-usage"
    }
  }
