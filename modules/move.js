this.Atomic.module('$animation.move', ['$animation'], function ($animation) {
  
  function move(element, delta, from, to, duration) {
    
    $animation({
      delay: 10,
      duration: duration || 1000,
      delta: delta,
      step: function(delta) {
        element.style.left = (from + (to * delta)) + "px";
      }
    });
    
  }

  return move;
  
});