let options = {
  root: null,
  rootMargin: '1px',
  threshold: 1.0
}

function callback(entries, observer)
{
  video = entries[0].target
  if (video.paused && entries[0].isIntersecting) 
    video.play()
  
  if (!entries[0].isIntersecting)
    video.pause()
}

let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector("video"))
