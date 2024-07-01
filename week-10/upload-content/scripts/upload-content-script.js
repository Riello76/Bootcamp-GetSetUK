// // Without Jquery
// function contentUpload() {
//   document.querySelector("nav").innerHTML = "<p>Loading navigation...</p>";
//   document.querySelector("footer").innerHTML = "<p>Loading footer...</p>";

//   function loadContent(selector, url) {
//     fetch(url)
//       .then((response) => response.text())
//       .then((data) => {
//         document.querySelector(selector).innerHTML = data;
//       })
//       .catch((error) => {
//         console.error("Error loading content:", error);
//       });
//   }
//   loadContent("nav", "./components/navbar.html");
//   loadContent("footer", "./components/footer.html");
// }
// document.addEventListener("DOMContentLoaded", function () {
//   contentUpload();
// });

// With Jquery
function contentUpload() {
  $("nav").html("<p>Loading navigation...</P>");
  $("nav").load("./components/navbar.html");
  $("footer").html("<p>Loading footer...</P>");
  $("footer").load("./components/footer.html");
}
$(document).ready(function () {
  contentUpload();
});
