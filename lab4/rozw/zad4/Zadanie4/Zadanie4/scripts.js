counter = document.querySelector('p');
buttonEnabler = document.querySelector('button#enabler');
button = document.querySelector('button#clicker');

clicks = 0;
eventIncrement = 0;

buttonEnabler.addEventListener('click',addRemoveEvent)
button.addEventListener('click', increment)

function increment() {
    clicks++;
    console.log(clicks);
    counter.innerHTML = clicks;
}

function addRemoveEvent(){
    if(eventIncrement%2==0){
        button.removeEventListener('click', increment)
        clicks = 0;
        counter.innerHTML = clicks;
    } else{
        button.addEventListener('click', increment)
    }

    eventIncrement++;
}