this.Atomic.module('$animation.move', ['$animation', '$curry'], function ($animation, $curry) {
  
  function move(element, delta, duration) {
    
    var to = 500;
    
    $animation({
      delay: 10,
      duration: duration || 1000,
      delta: delta,
      step: function(delta) {
        element.style.left = (to * delta) + "px";
      }
    });
    
  }

  return $curry(move);
  
});