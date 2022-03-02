
let video = document.getElementById("vid");

let observer = new IntersectionObserver((entries, observer) => { 
  entries.forEach(entry => {
	let isPaused = false; 
    if(entry.intersectionRatio!=1  && !video.paused){
      video.pause(); 
	  isPaused = true;
    }
    else if(isPaused) {video.play(); isPaused=false}
  });
}, {threshold: 1});
observer.observe(video);

