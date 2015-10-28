this.Atomic.module('$animation.circ', [], function () {
  
  function circ(progress) {
    return 1 - Math.sin(Math.acos(progress));
  }

  return circ;
  
});