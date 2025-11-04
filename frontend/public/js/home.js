  // SLIDER
//   (function ($) {
//   var artsliderimages = new Swiper('.art-slider-images', {
//     spaceBetween: 0,
//     autoplay: {
//       delay: 9500,
//       disableOnInteraction: false,
//     },
//     loop: true,
//     loopedSlides: 4,
//     thumbs: {
//       swiper: artslidercontent
//     },
//     breakpoints: {
//       1024: {
//         loopedSlides: 3,
//       },
//       768: {
//         loopedSlides: 2,
//       },
//       640: {
//         loopedSlides: 1
//       },
//       320: {
//         loopedSlides: 1
//       }
//     }
//   });


//   // SLIDER THUMBS
//   var artslidercontent = new Swiper('.art-slider-content', {
//     spaceBetween: 0,  // No gap between slides
//     direction: 'vertical',
//     slidesPerView: 1,
//     loop: false,  // Set to false if you want strict 1-slide view
//     loopedSlides: 4,
//     centeredSlides: true,  // Center the active slide
//     autoHeight: true,
//     breakpoints: {
//       1024: {
//         slidesPerView: 1
//       },
//       768: {
//         slidesPerView: 1
//       },
//       640: {
//         slidesPerView: 1
//       },
//       320: {
//         slidesPerView: 1
//       }
//     }
//   });

//   if ($(".art-slider-images")[0]) {
//     artsliderimages.controller.control = artslidercontent;
//     artslidercontent.controller.control = artsliderimages;
//   } else {

//   }

// })(jQuery);

// (function ($) {
//   // IMAGE SLIDER
//   var artsliderimages = new Swiper('.art-slider-images', {
//     spaceBetween: 0,
//     autoplay: {
//       delay: 9500,
//       disableOnInteraction: false,
//     },
//     loop: true,
//     slidesPerView: 1, // Ensuring only one slide is visible
//   });

//   // CONTENT SLIDER (TEXT)
//   var artslidercontent = new Swiper('.art-slider-content', {
//     spaceBetween: 0,
//     direction: 'vertical',
//     slidesPerView: 1,
//     loop: false,
//     effect: 'fade', // Smooth transition without showing partial slides
//     fadeEffect: {
//       crossFade: true, // Ensures smooth content swap
//     },
//     autoHeight: true, // Ensures content adjusts dynamically
//   });

//   // Link both sliders but update content ONLY after image transition
//   artsliderimages.on('slideChangeTransitionEnd', function () {
//     artslidercontent.slideTo(artsliderimages.realIndex);
//   });

// })(jQuery);

(function ($) {
// Optimized slider initialization
function initializeSliders() {
  // Check if Swiper is available
  if (typeof window === 'undefined' || !window.Swiper) {
    console.log('Swiper not available, retrying...');
    setTimeout(initializeSliders, 100);
    return;
  }

  console.log('Swiper available, initializing sliders...');

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
  }
}

// Start slider initialization
initializeSliders();


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
              if (document.body) {
                  document.body.classList.add("page-loaded");
              }
              observer.disconnect(); // Stop observing after adding the class
          }
      });
  }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

  observer.observe(sliderSection);
});


