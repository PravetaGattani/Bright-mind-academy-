// Preloader
window.addEventListener('load', function() {
document.getElementById('preloader').style.display = 'none';
});

// Popup
window.onload = function() {
const popup = document.getElementById('popup');
const close = document.querySelector('.close');

popup.style.display = 'block';

close.onclick = function() {
popup.style.display = 'none';
}
window.onclick = function(event) {
if (event.target == popup) {
popup.style.display = 'none';
}
}
}

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
counter.innerText = '0';

const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;
const increment = target / 200;

if(count < target) {
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter, 10);
} else {
counter.innerText = target;
}
};
updateCounter();
});

// Testimonials Auto Slide
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonials() {
testimonials.forEach(testimonial => testimonial.classList.remove('active'));
testimonialIndex++;
if(testimonialIndex > testimonials.length) { testimonialIndex = 1 }
testimonials[testimonialIndex-1].classList.add('active');
setTimeout(showTestimonials, 4000);
}

showTestimonials();

// Sticky Navbar
window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');
navbar.classList.toggle('sticky', window.scrollY > 0);
});
