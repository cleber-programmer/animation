this.Atomic.module('$animation.makeEaseInOut', [], function() {
  
  function makeEaseInOut(delta) {  
    return function(progress) {
      return progress < .5 ? delta(2 * progress) / 2 : (2 - delta(2 * (1 - progress))) / 2;
    };
  }

  return makeEaseInOut;
  
});