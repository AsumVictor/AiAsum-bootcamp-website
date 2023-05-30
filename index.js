const mobileMenu = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".humberger");
const navLinks = document.querySelectorAll(".mobile-links li a");

//When user clicks on humber icon
openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
  document.body.style.overflowY = "hidden";
});

//When user click on the close button
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("flex");
  mobileMenu.classList.add("hidden");
  document.body.style.overflowY = "scroll";
});

//When user clicks on any of the menu links
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    document.body.style.overflowY = "scroll";
  });
});
