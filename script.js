const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});

document
.getElementById("volunteerForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for volunteering with DAAN Blessings Trust!");

});