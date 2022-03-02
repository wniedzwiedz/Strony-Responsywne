let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  }
  let target = document.querySelector("video")
  let isPaused = false
  let observer = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !target.paused){
          entry.target.pause(); isPaused = true;
        }
        else if(isPaused) {entry.target.play(); isPaused=false}
  
      });
  }, options);
observer.observe(target);

