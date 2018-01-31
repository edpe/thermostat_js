function Thermostat (){
  this.temperature = 20
};

  Thermostat.prototype.increaseTemp = function(number) {
    return this.temperature += number;
  };

  Thermostat.prototype.decreaseTemp = function(number) {
    return this.temperature -= number;
  };
