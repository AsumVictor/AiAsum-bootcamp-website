import getTutors from "./dynamic_pages/tutors_page.js";
import getCourses from "./dynamic_pages/courses_page.js";
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

document.addEventListener('DOMContentLoaded', ()=>{
  getTutors()
  getCourses()
  let tutorCards = document.querySelectorAll(".tutor-card");
  let viewMoreTutorBtn =  document.querySelector(".view-more");

  //Show all tutorcard when user clicks on view more 
  viewMoreTutorBtn.addEventListener("click",()=>{
    tutorCards.forEach((card) => {
      card.classList.toggle('show')
    })
  })
})