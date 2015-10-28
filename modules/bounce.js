this.Atomic.module('$animation.bounce', [], function () {
  
  function bounce(progress) {
    for(var a = 0, b = 1; !0; a += b, b /= 2) {
      if (progress >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
      }
    }
  }
  
  return bounce;

});