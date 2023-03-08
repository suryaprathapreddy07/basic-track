'use strict';

// selecting elements

let hamburger=document.querySelector('.bars')
let navbar=document.querySelector('#navbar')
let responsiveSidebar=document.querySelector('.responsive-navbar-sidebar')
let partialSearchBar=document.querySelector('.partial-search-bar')
let responsiveNav=document.querySelector('.responsive-navbar')
let homeSection=document.querySelector('.home-section')
let homeSectionInput=document.querySelector('.home-section-content-input')

// implementing hamburger  functionality
hamburger.addEventListener('click',()=>{
    responsiveNav.classList.toggle('hidden')
    //setting to top for responsive navbar sidebar
let navbarHeight=navbar.clientHeight
responsiveSidebar.style.top=`${navbarHeight}px`


})



console.log(navbarHeight)

//implementing partial searchbar functionality on scroll
window.addEventListener('scroll',()=>{

    if(Math.floor(homeSection.getBoundingClientRect().y)<-420){
        partialSearchBar.classList.remove('hidden')
        // homeSectionInput.style.display='none'
    }
    else{
        partialSearchBar.classList.add('hidden')
        // homeSectionInput.style.display='block'
    }
    console.log(homeSection.getBoundingClientRect())
})
