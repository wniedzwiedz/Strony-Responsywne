let pics = ["https://images.unsplash.com/photo-1504272017915-32d1bd315a59?fit=crop&w=600&q=80",
 "https://googlechrome.github.io/samples/picture-element/images/kitten-small.png",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQY4FDE_g8oNBEok8NMEi0PXpFz2v4mMBR54wLwqTliusJsunS7mJejoAz4ThJudfCumg&usqp=CAU",
 "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/water_fish.png","https://www.w3schools.com/w3css/img_lights.jpg",
 "https://i.pinimg.com/originals/19/cf/62/19cf6282717fb6a89b8130d4d8c56d96.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnaMCm0b9dkdlP7rZv1tt7kuy28SXcgIMmg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRMCelQlfOWyzAnydo3-GudV0D1yJf7s9-t4quYPJgacSIPyMoTldqn6pgP29-EwIbWU&usqp=CAU",
"https://www.w3schools.com/css/paris.jpg",
"https://html.com/wp-content/uploads/flamingo-fallback.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3ODQ4n_3xLUCO9tEu8dcqAck5l7Vf7AG2g&usqp=CAU"]
    let imgCount = 0;

    var img = false;
    let options = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      }
      let section = document.querySelector("section")
      let target = document.querySelector("footer");
      let isPaused = false
      let observer = new IntersectionObserver(function(entries){
        entries.forEach(entry => {
            console.log(entry.intersectionRatio)

            if(entry.isIntersecting && imgCount<10){
                var newImg = document.createElement("img");
                newImg.src = pics[Math.floor(Math.random() * 10)]
             section.appendChild(newImg)
             imgCount+=1
            }
            if(entry.isIntersecting && imgCount>=10){
                imgCount=0;
                var p = document.createElement("p");
                p.innerHTML=" SECTION TXT";
                p.style.height="300px";
                p.style.backgroundColor="red";
           
                section.appendChild(p);
            }
          });
      }, options);
    observer.observe(target);


