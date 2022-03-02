var marginSlider = document.getElementById("margin");
var thresholdSlider = document.getElementById("threshold");

var marginOutput = document.getElementById("marginPrintValue");
var thresholdOutput = document.getElementById("thresholdPrintValue");

var globalMargin = 0;
var globalThreshold = 0;

// Update the current slider value (each time you drag the slider handle)
thresholdSlider.oninput = function() {
    thresholdOutput.innerHTML = this.value/100;
    globalThreshold = this.value/100;
    console.log(globalThreshold);
    updateObserver();
}

marginSlider.oninput = function() {
    marginOutput.innerHTML = this.value;
    globalMargin = this.value;
    console.log(globalMargin);
    updateObserver();
}

function updateObserver(){

    var lazyImages = document.querySelectorAll(".lazy-loaded-image");
    console.log(lazyImages);

    let options = {
        root: null,
        rootMargin: globalMargin.toString() + "px",
        threshold: globalThreshold
    }
    
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
            }
            else{
                let lazyImage = entry.target;
                lazyImage.src = "./images/loading.png";
            }
        });
    };

    let lazyImageObserver = new IntersectionObserver(callback, options);

    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
}

   
