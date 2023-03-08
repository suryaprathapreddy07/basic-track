// Activating strict mode
"use strict";


// selecting elements

let hamburger = document.querySelector(".bars");
let navbar = document.querySelector("#navbar");
let responsiveSidebar = document.querySelector(".responsive-navbar-sidebar");
let partialSearchBar = document.querySelector(".partial-search-bar");
let responsiveNav = document.querySelector(".responsive-navbar");
let homeSection = document.querySelector(".home-section");
let homeSectionInput = document.querySelector(".home-section-content-input");

// implementing hamburger  functionality
hamburger.addEventListener("click", () => {
  responsiveNav.classList.toggle("hidden");
  hamburger.classList.toggle("open");
  hamburger.style.color = "blue";

  //setting to top for responsive navbar sidebar
  let navbarHeight = navbar.clientHeight;
  responsiveSidebar.style.top = `${navbarHeight}px`;
});

//implementing partial searchbar functionality on scroll
window.addEventListener("scroll", () => {
  if (Math.floor(homeSection.getBoundingClientRect().y) < -420) {
    partialSearchBar.classList.remove("hidden");
  } else {
    partialSearchBar.classList.add("hidden");
  }
  console.log(homeSection.getBoundingClientRect());
});

// implementing swiper functionality
let blogSwiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".next-blog",
    prevEl: ".prev-blog",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



const mediaSwiper = new Swiper('.media-coverage2-content', {
    
  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

});



