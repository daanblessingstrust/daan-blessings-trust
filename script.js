const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

fetch("https://script.google.com/macros/s/AKfycbwjEJcvX5dNM6iKx9PUEgf0G2pFp1Mb260hBW8skaJESETN64-Vm-hhe0tYIXOecdqV/exec")
.then(res => res.json())
.then(data => {

    animateCounter(
        document.getElementById("lives"),
        data.lives
    );

    animateCounter(
        document.getElementById("volunteers"),
        data.volunteers
    );

    animateCounter(
        document.getElementById("donors"),
        data.donors
    );

    animateCounter(
        document.getElementById("community"),
        data.community
    );

})
.catch(err => console.log(err));

function animateCounter(element, target){

    let count = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        count += increment;

        if(count >= target){
            count = target;
            clearInterval(timer);
        }

        element.innerHTML = count + "+";

    }, 20);
}

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
        "✅ Thank you! Donation recorded successfully.";
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
       "✅ Thank you for volunteering! We will contact you soon.";
        this.reset();
    });
});

fetch(
"https://script.google.com/macros/s/AKfycbwNo2cwB7QRM5V2H82WDN8pNN6o_tfRocTkUsNqqr94hDUFulYWgyZtUwFpwMuUyw033A/exec"
)
.then(res=>res.json())
.then(data=>{

    // Recent Donors

    let html="";

    data.recent.forEach(donor=>{

        html += `
        <div class="donor-card">
            ❤️ <strong>${donor.name}</strong>
            donated
            <strong>₹${donor.amount}</strong>
        </div>`;

    });

    document.getElementById(
        "donorTicker"
    ).innerHTML = html;

   // Dashboard

document.getElementById(
    "totalDonation"
).innerHTML =
    "₹"+data.total;

document.getElementById(
    "totalDonors"
).innerHTML =
    data.donors;

document.getElementById(
    "highestDonation"
).innerHTML =
    "₹"+data.highest;

document.getElementById(
    "averageDonation"
).innerHTML =
    "₹"+data.average;

// Analytics Dashboard

document.getElementById(
    "todayDonation"
).innerHTML =
    "₹"+data.total;

document.getElementById(
    "monthDonation"
).innerHTML =
    "₹"+data.total;

document.getElementById(
    "avgDonation"
).innerHTML =
    "₹"+data.average;

document.getElementById(
    "highestDonation2"
).innerHTML =
    "₹"+data.highest;

})
.catch(err=>console.log(err));

// ===============================
// Volunteer Dashboard
// ===============================

fetch(
"https://script.google.com/macros/s/AKfycbyaKlqd7B3HsSF1-o1q3eXzavoo46oqOF_FnML37l6c6c789vR_j6o8Vty7sZIhZ79avg/exec"
)
.then(res => res.json())
.then(data => {

    document.getElementById(
        "totalVolunteers"
    ).innerHTML =
        data.volunteers || 0;

    document.getElementById(
        "cities"
    ).innerHTML =
        data.cities || 0;

    document.getElementById(
        "countries"
    ).innerHTML =
        data.countries || 0;

    document.getElementById(
        "services"
    ).innerHTML =
        data.services || 0;

})
.catch(err => console.log(err));