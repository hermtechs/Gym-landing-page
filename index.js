'use strict'
const verticalNav = document.querySelector('.nav-menu-vertical');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('.nav-link');

verticalNav.style.transform = 'translateX(-100%)'; /*avoids having to double click  
                                                     for the nav btn to work*/


//closing and opening nav, showing and hiding overlay                                                  
hamburger.addEventListener('click', ShowMenu);
function ShowMenu(){
    if(verticalNav.style.transform === 'translateX(-100%)'){
        verticalNav.style.transform = 'translateX(0%)';
        overlay.style.visibility = 'visible';
    }
    else{
        verticalNav.style.transform = 'translateX(-100%)';
        overlay.style.visibility = 'hidden';
    }
}

// closing Nav Menu after clicking on links
navLink.forEach((link)=>link.addEventListener('click',(()=>{
    verticalNav.style.transform = 'translateX(-100%)'
})))
// closing navigation menu when user clicks outside it
overlay.addEventListener('click', (()=>{

    verticalNav.style.transform = 'translateX(-100%)';
    overlay.style.visibility = 'hidden';
}))

// CODE FOR THE GOOGLE MAP
 
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const myLocation = { lat: 25.29649, lng: 51.46794 };
    // The map, centered at Al Rayyan Park/my Location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLocation,
    });
    // The marker, positioned at myLocation
    const marker = new google.maps.Marker({
      position: myLocation,
      map: map,
    });
  }
