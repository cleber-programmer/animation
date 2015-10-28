this.Atomic.module('$animation', [], function () {
  
  function animation(description) {
    
    var start = new Date();
    var id = setInterval(function() {
      
      var timePassed = new Date() - start;
      var progress = timePassed / description.duration;
      
      if (progress > 1) progress = 1;
    
      var delta = description.delta(progress);
      
      description.step(delta);
      
      if (progress == 1) {
        clearInterval(id);
      }
      
    }, description.delay || 10);

  }
  
  return animation;
  
});