if(!!window.IntersectionObserver){
	var videos = document.querySelectorAll('video');
    console.log(videos);
	
    let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
            if(entry.target.className == "myvideo"){
                if(entry.intersectionRatio>0.3){
                    entry.target.play();
                    console.log(entry.target);
                }
                else {
                    entry.target.pause();
                }
            }
		});
	}, {threshold: 0});

    videos.forEach(video =>{
	observer.observe(video);}
    );
}