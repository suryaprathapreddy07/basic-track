"use strict";
// import Swiper from Swiper/bundle

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
    // homeSectionInput.style.display='none'
  } else {
    partialSearchBar.classList.add("hidden");
    // homeSectionInput.style.display='block'
  }
  console.log(homeSection.getBoundingClientRect());
});

// implementing swiper functionality
const swiper = new Swiper('.swiper', {
    
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

