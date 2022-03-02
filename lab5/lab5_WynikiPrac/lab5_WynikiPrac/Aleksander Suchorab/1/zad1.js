function videoAutoplayListener(entries) {
    entries.forEach(elem => {
        if (elem.isIntersecting) {
            elem.target.play()
        } else {
            elem.target.pause()
        }
    })
}

const videoIntersectionOptions = {
    threshold: 1.0
}

let videoObserver = new IntersectionObserver(videoAutoplayListener, videoIntersectionOptions)

document.querySelectorAll("video").forEach(video => {
    videoObserver.observe(video)
})