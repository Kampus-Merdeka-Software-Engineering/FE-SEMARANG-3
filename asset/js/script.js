let navScroll = window.pageYOffset;
let screenWidth = window.innerWidth;

window.onscroll = function() {
    let currentNavScroll = window.pageYOffset;
    screenWidth = window.innerWidth;
    if (navScroll > currentNavScroll) {
        document.querySelector('.header').style.top = '0';
    } else {
        document.querySelector('.header').style.top = '-260px';
    }
    navScroll = currentNavScroll;
}

const navLink = document.getElementById("toggleButton");

navLink.addEventListener("click", () => {
    let responsiv = document.getElementById("navbarRight");
    if (responsiv.className === "navbar-right") {
        responsiv.className += " responsive";
    } else {
        responsiv.className = "navbar-right";
    }
});

const pop = document.querySelectorAll('.box');

pop.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
        element.style.transitionDuration = '0.3s';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
        element.style.transitionDuration = '0.3s';
    });
});
