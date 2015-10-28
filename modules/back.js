this.Atomic.module('$animation.back', [], function () {
  
  function back(progress, x) {
    return Math.pow(progress, 2) * ((x + 1) * progress - x);
  }

  return back;
  
});