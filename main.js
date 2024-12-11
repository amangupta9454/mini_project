let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('#nav-links a');
function showDetails(name, specialization, description, image) {
  document.getElementById("doctor-name").textContent = name;
  document.getElementById("doctor-specialization").textContent = specialization;
  document.getElementById("doctor-description").textContent = description;


  const modal = document.getElementById("doctor-details-modal");
  modal.style.display = "flex";
}

function closeDetails() {
  const modal = document.getElementById("doctor-details-modal");
  modal.style.display = "none";
}
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

