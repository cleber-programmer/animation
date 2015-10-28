this.Atomic.module('$animation.quad', [],  function () {

  function quad(progress) {
    return Math.pow(progress, 2);
  }
  
  return quad;
  
});