// JavaScript for Sticky Navigation Bar

window.addEventListener("scroll", function(){
    
    var header = document.querySelector("#Header");
    header.classList.toggle("sticky", window.scrollY > 0);
    
    
})

// JavaScript for Hero Slider

$('.hero-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:true,
  items:1,
  animateOut: 'fadeOut',
  autoplay: true,
  smartSpeed: 1000,
  navText:['<img src="assets/images/left-chevron-white.png"/>','<img src="assets/images/right-chevron-white.png"/>']
})


// Swiper JavaScript for Slider

 var swiper = new Swiper(".mySwiper", {
     effect: "coverflow",
     grabCursor: true,
     centeredSlides: true,
     loop: true,
     slidesPerView: "auto",
     coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
     },
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     pagination: {
      el: ".swiper-pagination",
    },
   });


// JavaScript for Button Active

$(document).ready(function(){
  $(".tab-btn").on("click", function(){
    $(this).addClass("tab-btn-active").siblings().removeClass("tab-btn-active");
  })
})

// Menu Tab

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('tab-active')
        })
        target.classList.add('tab-active')
    })
})

// JavaScript for Mneu Button Slider

$('.menu-carousel').owlCarousel({
  loop:true,
  responsive:{
    0:{
        items:1,
    },
    600:{
        items:3,
    },
    1000:{
        items:5,
    }
  },
  navText:['<img src="assets/images/left-chevron.png"/>','<img src="assets/images/right-chevron.png"/>']
})


// JavaScript Code for Gallery

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});
