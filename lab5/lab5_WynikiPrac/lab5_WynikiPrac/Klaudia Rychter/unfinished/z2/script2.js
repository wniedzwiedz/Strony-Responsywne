
let picture = document.querySelector("img");

let observer = new IntersectionObserver((entries, observer) => { 
  entries.forEach(entry => {
	if (entry.isIntersecting){
		let im = entry.target;
		console.log("here");		
	}
   
  });
});
observer.observe(picture);



var slider = document.getElementById("myRange");
var output = document.getElementById("test_slider");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var marg1 = 0;
marg1=silder.value;
let options = {
	root: null,
	rootMargin: marg1+'px',
	threshold: 0
}




