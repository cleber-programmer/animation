this.Atomic.module('$animation.elastic', [], function () {
  
  function elastic(progress, x) {
    return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
  }

  return elastic;
  
});