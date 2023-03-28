const navLinks = document.getElementById("navbar-links");
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("show");
});
