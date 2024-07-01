// Wait for the entire HTML document to be completely loaded and parsed
document.addEventListener("DOMContentLoaded", function () {

    // Select the element with the class 'burger-menu'
    const burgerMenu = document.querySelector(".burger-menu");
  
    // Select the element with the class 'menu'
    const menu = document.querySelector(".menu");
  
    // Add a click event listener to the 'burger-menu' element
    burgerMenu.addEventListener("click", function () {
  
        // Toggle the 'show-menu' class on the 'menu' element when 'burger-menu' is clicked
        menu.classList.toggle("show-menu");
  
    });

});
