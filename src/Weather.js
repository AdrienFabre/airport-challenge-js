'use strict';

function Weather() {
  this.CHANCE_OF_STORMY = 0.5;
};

Weather.prototype.isStormy = function(){
  return (Math.random() > this.CHANCE_OF_STORMY);
};
