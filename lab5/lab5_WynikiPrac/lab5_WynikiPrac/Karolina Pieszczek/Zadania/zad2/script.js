
if(!!window.IntersectionObserver){
    let slider = document.querySelector('#slider');
var margin = "0px 0px -"+ slider.value+"px 0px";
let mark = document.querySelector("#mark")
let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.src = entry.target.dataset.src;
    }else{    
      entry.target.src="600px-PlaceholderLC.png"
    }
    });
  }, {rootMargin: margin});
slider.addEventListener("change",function(){
    console.log(slider.value)
    mark.style.bottom = slider.value+"px";
    margin = "0px 0px -"+ slider.value+"px 0px";
    observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            entry.target.src="600px-PlaceholderLC.png"
        if(entry.isIntersecting){
          entry.target.src = entry.target.dataset.src;
        }else{
          entry.target.src="600px-PlaceholderLC.png"
        }
        });
      }, {rootMargin: margin});
      document.querySelectorAll('img').forEach(img => { observer.observe(img) });
  
},false)
  
    document.querySelectorAll('img').forEach(img => { observer.observe(img) });
  }
  
 