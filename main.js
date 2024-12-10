let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('#nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

 const minDate = "1950-06-01";
 const today = new Date();
 const maxDate = today.getFullYear() + "-" +
                 String(today.getMonth() + 1).padStart(2, '0') + "-" +
                 String(today.getDate()).padStart(2, '0');
 const dobInput = document.getElementById("dob");
 dobInput.setAttribute("min", minDate);
 dobInput.setAttribute("max", maxDate);

