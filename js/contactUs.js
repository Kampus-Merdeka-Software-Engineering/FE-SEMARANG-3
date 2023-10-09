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

// POST Form Data
const formCustomer = document.getElementById('formCustomer');

formCustomer.addEventListener('submit', (e) => {
e.preventDefault()
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const feedbackData = {
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  phone: phone.value,
  message: message.value
};

fetch('https://sore-plum-magpie-sari.cyclic.app/proses_feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(feedbackData)
}).then( (res) =>{
  if(res.ok){
    alert('Thank You For Your Message!')
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
  }else{
    alert('Send Message Failed.')
  }
}).catch((error) => {
  alert(`Error message: ${error.message}`);
})
});