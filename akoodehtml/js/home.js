
(function ($) {
// SLIDER
var events_slider_images = new Swiper('.events-slider-images', {
  spaceBetween: 0,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  loop: true,
  effect: 'fade',
  loopedSlides: 1,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  thumbs: {
    swiper: event_slider_content
  }
});


// SLIDER CONTENT
var event_slider_content = new Swiper('.events-slider-content', {
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 1,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  loop: true,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});

if ($(".events-slider-images")[0]) {
  events_slider_images.controller.control = event_slider_content;
  event_slider_content.controller.control = events_slider_images;
} else {}


 // DATA BACKGROUND IMAGE
 var pageSection = $("*");
 pageSection.each(function (indx) {
   if ($(this).attr("data-background")) {
     $(this).css("background", "url(" + $(this).data("background") + ")");
   }
 });

 // DATA BACKGROUND COLOR
 var pageSection = $("*");
 pageSection.each(function (indx) {
   if ($(this).attr("data-background")) {
     $(this).css("background", $(this).data("background"));
   }
 });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const sliderSection = document.querySelector(".slider");

  if (!sliderSection) return; // Exit if the section doesn't exist

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              document.body.classList.add("page-loaded");
              observer.disconnect(); // Stop observing after adding the class
          }
      });
  }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

  observer.observe(sliderSection);


    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("side-bar");
    const closeBtn = document.querySelector(".close-icon-menu i");

    menuBtn.addEventListener("click", (e) => {
      e.preventDefault(); // stop link navigation
      sidebar.classList.toggle("show");
    });
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });

    const fileInput = document.getElementById("file-upload");
const fileName = document.querySelector(".file-name");

fileInput.addEventListener("change", function(){
  fileName.textContent = this.files.length > 0 ? this.files[0].name : "No file chosen";
});
});


