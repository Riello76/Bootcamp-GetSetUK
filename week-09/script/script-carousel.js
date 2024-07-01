
// // Selecting all the image elements inside the carousel
// const slides = document.querySelectorAll(".carousel-slide img");

// // Selecting all the bullet elements inside the carousel
// const bullets = document.querySelectorAll(".carousel-bullets .bullet");

// // Variable to keep track of the current slide index
// let currentSlide = 0;
 
// // Function to show a particular slide
// function showSlide(n) {
//   // Removing 'active' class from all slides and bullets
//   slides.forEach((slide) => slide.classList.remove("active"));
//   bullets.forEach((bullet) => bullet.classList.remove("active"));
 
//   // Handling overflow or underflow conditions for the slide index
//   if (n >= slides.length) {
//     currentSlide = 0;
//   } else if (n < 0) {
//     currentSlide = slides.length - 1;
//   } else {
//     currentSlide = n;
//   }
 
//   // Adding 'active' class to the current slide and bullet
//   slides[currentSlide].classList.add("active");
//   bullets[currentSlide].classList.add("active");
// }
 
// // Function to show the next slide
// function nextSlide() {
//   showSlide(currentSlide + 1);
// }
 
// // Function to show the previous slide
// function prevSlide() {
//   showSlide(currentSlide - 1);
// }
 
// // Adding click event listeners to the next and previous buttons
// document.querySelector(".next").addEventListener("click", nextSlide);
// document.querySelector(".prev").addEventListener("click", prevSlide);
 
// // Adding click event listeners to the bullets for direct slide navigation
// bullets.forEach((bullet, index) => {
//   bullet.addEventListener("click", () => {
//     showSlide(index);
//   });
// });
 
// // Function to automatically slide to the next image every 2 seconds
// function autoSlide() {
//   nextSlide();
// }
 
// // Setting up an interval to call autoSlide function every 2 seconds
// setInterval(autoSlide, 2000);
 


// Seleziona tutti gli elementi immagine e bullet all'interno del carosello
const slides = document.querySelectorAll(".carousel-slide img");
const bullets = document.querySelectorAll(".carousel-bullets .bullet");

// Variabile per tenere traccia dell'indice della slide corrente
let currentSlide = 0;

// Funzione per mostrare una slide particolare
const showSlide = (n) => {
  currentSlide = (n + slides.length) % slides.length; 
  slides.forEach((slide, index) => slide.classList.toggle("active", index === currentSlide));
  bullets.forEach((bullet, index) => bullet.classList.toggle("active", index === currentSlide));
};

// Aggiunge listener per il click sui bottoni 'next', 'prev' e sui bullet
document.querySelector(".next").onclick = () => showSlide(currentSlide + 1);
document.querySelector(".prev").onclick = () => showSlide(currentSlide - 1);
bullets.forEach((bullet, index) => bullet.onclick = () => showSlide(index));

// Cambia automaticamente alla slide successiva ogni 2 secondi
setInterval(() => showSlide(currentSlide + 1), 2000);
