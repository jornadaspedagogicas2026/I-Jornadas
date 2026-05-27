const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('active');

});

const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navLinks.classList.remove('active');

    });

});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow =
        "0 2px 10px rgba(0,0,0,.05)";

    }

});

const carousel = document.querySelector('.carousel');

const prevBtn = document.querySelector('.carousel-btn.prev');

const nextBtn = document.querySelector('.carousel-btn.next');

const scrollAmount = 340;

nextBtn.addEventListener('click', () => {

    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });

});

prevBtn.addEventListener('click', () => {

    carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });

});