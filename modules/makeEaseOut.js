this.Atomic.module('$animation.makeEaseOut', [], function () {
  
  function makeEaseOut(delta) {  
    return function(progress) {
      return 1 - delta(1 - progress);
    };
  }

  return makeEaseOut;

});