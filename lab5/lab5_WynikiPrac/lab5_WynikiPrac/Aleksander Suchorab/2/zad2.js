let imageLoadingOptions = {
    margin: 0,
    threshold: 0
}
let imageObserver = null

function updateObserveOptions() {
    let options = {
        rootMargin: `${imageLoadingOptions.margin}px`,
        threshold: imageLoadingOptions.threshold
    }
    if (imageObserver) {
        imageObserver.disconnect()
    }
    imageObserver = new IntersectionObserver(imageLoadListener, options)
    document.querySelectorAll("img").forEach(img => {
        imageObserver.observe(img)
    })
}

function imageLoadListener(entries) {
    entries.forEach(elem => {
        if (elem.isIntersecting) {
            elem.target.src = elem.target.dataset.src
        } else {
            elem.target.src = "img/placeholder.jpg"
        }
    })
}

function sliderUpdateListener(event) {
    event.target.nextElementSibling.value = event.target.value
    imageLoadingOptions[event.target.id] = event.target.value
    updateObserveOptions()
}

document.querySelectorAll(".slider-container > input").forEach(elem => {
    elem.addEventListener("input", sliderUpdateListener)
})

updateObserveOptions()