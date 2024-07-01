// Navbar Buttons Script

// Get references to the buttons by their IDs
const homeBtn = document.getElementById("home"),
  infoBtn = document.getElementById("info"),
  lineUpBtn = document.getElementById("line-up"),
  areasBtn = document.getElementById("areas"),
  galleryBtn = document.getElementById("gallery"),
  shopBtn = document.getElementById("shop"),
  newsBtn = document.getElementById("news");

// Add an event listener to the "Home" button
homeBtn.addEventListener("click", function () {
  // When the "Home" button is clicked, navigate to the index.html page
  window.location.href = "/my-final-project/index.html";
});

// Add an event listener to the "Info" button
infoBtn.addEventListener("click", function () {
  // When the "Info" button is clicked, navigate to the info.html page
  window.location.href = "/my-final-project/pages/info.html";
});

// Add an event listener to the "Line-Up" button
lineUpBtn.addEventListener("click", function () {
  // When the "Line-Up" button is clicked, navigate to the line-up.html page
  window.location.href = "/my-final-project/pages/line-up.html";
});

// Add an event listener to the "Areas" button
areasBtn.addEventListener("click", function () {
  // When the "Areas" button is clicked, navigate to the areas.html page
  window.location.href = "/my-final-project/pages/areas.html";
});

// Add an event listener to the "Gallery" button
galleryBtn.addEventListener("click", function () {
  // When the "Gallery" button is clicked, navigate to the gallery.html page
  window.location.href = "/my-final-project/pages/gallery.html";
});

// Add an event listener to the "Shop" button
shopBtn.addEventListener("click", function () {
  // When the "Shop" button is clicked, navigate to the shop.html page
  window.location.href = "/my-final-project/pages/shop.html";
});

// Add an event listener to the "News" button
newsBtn.addEventListener("click", function () {
  // When the "News" button is clicked, navigate to the news.html page
  window.location.href = "/my-final-project/pages/news.html";
});


// Carousel Script

// Select all slide images and bullet elements
const slides = document.querySelectorAll(".carousel-slide img"),
  bullets = document.querySelectorAll(".carousel-bullets .bullet");

// Initialize the current slide index
let currentSlide = 0;

// Function to show a specific slide
const showSlide = (index) => {
  // Calculate the new slide index, wrapping around if necessary
  currentSlide = (index + slides.length) % slides.length;

  // Remove the "active" class from all slides and bullets
  slides.forEach((slide, i) => slide.classList.remove("active"));
  bullets.forEach((bullet, i) => bullet.classList.remove("active"));

  // Add the "active" class to the current slide and bullet
  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
};

// Add click event listener for the "next" button to show the next slide
document.querySelector(".next").onclick = () => showSlide(currentSlide + 1);

// Add click event listener for the "prev" button to show the previous slide
document.querySelector(".prev").onclick = () => showSlide(currentSlide - 1);

// Add click event listeners to each bullet to show the corresponding slide
bullets.forEach((bullet, index) => {
  bullet.onclick = () => showSlide(index);
});

// Automatically show the next slide every 2 seconds
setInterval(() => showSlide(currentSlide + 1), 2000);

// Hamburger Menu Script

function toggleMenu() {
    const navbarButtons = document.querySelector('.navbar-buttons');
    navbarButtons.classList.toggle('active');
}
