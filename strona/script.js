let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.remove("invisible");
            observer.unobserve(entry.target);
            console.log('showing...');
        }

    });
}, { rootMargin: "0px 0px 100px 0px" });

const loads = document.querySelectorAll('.invisible');
loads.forEach(i => { observer.observe(i) });


const topMenu = document.getElementById("main-menu");
const menuItems = topMenu.getElementsByClassName("item");

let menuobserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.remove("active");
                if (menuItems[i].attributes.href.nodeValue=="#"+entry.target.attributes.id.nodeValue){
                    menuItems[i].classList.add("active");   
                }
            }
        }

    });
}, { rootMargin: "0% 0% -50% -50%" });


const parts = document.querySelectorAll('.parallax__group');
parts.forEach(i => { menuobserver.observe(i) });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});