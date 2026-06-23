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

// Donation Form
document.getElementById("donationForm")?.addEventListener("submit", function(e){

    e.preventDefault();

    const formData = {
        donorName: this.donorName.value,
        phone: this.phone.value,
        email: this.email.value,
        amount: this.amount.value,
        upiRef: this.upiRef.value,
        message: this.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbwNo2cwB7QRM5V2H82WDN8pNN6o_tfRocTkUsNqqr94hDUFulYWgyZtUwFpwMuUyw033A/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(() => {
        document.getElementById("donationSuccess").innerHTML =
        "? Thank you! Donation recorded successfully.";
        this.reset();
    });
});


// Volunteer Form
document.getElementById("volunteerForm")?.addEventListener("submit", function(e){

    e.preventDefault();

    const formData = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        city: this.city.value,
        message: this.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbyaKlqd7B3HsSF1-o1q3eXzavoo46oqOF_FnML37l6c6c789vR_j6o8Vty7sZIhZ79avg/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(() => {
        document.getElementById("volunteerSuccess").innerHTML =
        "? Thank you for volunteering! We will contact you soon.";
        this.reset();
    });
});
