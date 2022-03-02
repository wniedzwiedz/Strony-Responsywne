let options = {
    root: null,
    rootMargin: '0px 0px -400px 0px',
    threshold: 0
  }
  let target = document.querySelectorAll("p")
  let isPaused = false
  let observer = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.setAttribute("style","margin-left:0")
          console.log(entry.target)
        }else{
            console.log("hide")
            entry.target.setAttribute("style","margin-left:-90%")
        }
       
      });
  }, options);
target.forEach(p => { observer.observe(p) });
document.querySelectorAll('img').forEach(img => {observer.observe(img)})
