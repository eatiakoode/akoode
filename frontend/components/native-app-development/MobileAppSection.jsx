import { useEffect, useState } from 'react'

export default function MobileAppSection({ 
  title, 
  subtitle, 
  services = [] 
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !isClient) return;

    const initializeSwiper = () => {
      console.log('Initializing native app section swiper...');

      // Check if Swiper is available
      if (!window.Swiper) {
        console.log('Swiper not available, retrying...');
        setTimeout(initializeSwiper, 500);
        return;
      }

      console.log('Swiper available:', !!window.Swiper);

      // Check if document and required elements exist
      if (!document || !document.querySelector) {
        console.log('Document not ready, retrying...');
        setTimeout(initializeSwiper, 500);
        return;
      }

      // Check if swiper element exists
      const swiperElement = document.querySelector('.mySwiper');
      const paginationElement = document.querySelector('.swiper-pagination');
      const nextButton = document.querySelector('.swiper-button.next');
      const prevButton = document.querySelector('.swiper-button.prev');
      const scrollbarElement = document.querySelector('.swiper-scrollbar');

      console.log('Swiper element found:', !!swiperElement);
      console.log('Pagination element found:', !!paginationElement);
      console.log('Navigation elements found:', !!nextButton, !!prevButton);
      console.log('Scrollbar element found:', !!scrollbarElement);

      if (swiperElement) {
        try {
          // Destroy existing swiper instance if it exists
          if (swiperElement.swiper) {
            swiperElement.swiper.destroy(true, true);
          }

          // Wait for all elements to be ready
          if (!paginationElement || !nextButton || !prevButton || !scrollbarElement) {
            console.log('Some Swiper elements not ready, retrying...');
            setTimeout(initializeSwiper, 300);
            return;
          }

          // Initialize Swiper with null-safe element references
          const swiperConfig = {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            centeredSlides: false,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1600: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            },
            on: {
              init: function () {
                console.log('Swiper initialized successfully with', this.slides.length, 'slides');
                console.log('Current slidesPerView:', this.params.slidesPerView);
              },
              slideChange: function () {
                console.log('Slide changed to:', this.activeIndex);
              },
              resize: function () {
                console.log('Swiper resized, current slidesPerView:', this.params.slidesPerView);
              }
            }
          };

          // Only add pagination if element exists
          if (paginationElement) {
            swiperConfig.pagination = {
              el: paginationElement,
              clickable: true,
            };
          }

          // Only add navigation if elements exist
          if (nextButton && prevButton) {
            swiperConfig.navigation = {
              nextEl: nextButton,
              prevEl: prevButton,
            };
          }

          // Only add scrollbar if element exists
          if (scrollbarElement) {
            swiperConfig.scrollbar = {
              el: scrollbarElement,
              draggable: true,
            };
          }

          const swiperInstance = new window.Swiper(swiperElement, swiperConfig);
          console.log('Native app section swiper initialized');
        } catch (error) {
          console.error('Error initializing Swiper:', error);
        }
      } else {
        console.log('Swiper element not found, retrying...');
        setTimeout(initializeSwiper, 500);
      }
    };

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeSwiper, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Destroy swiper instance on cleanup
      if (typeof window !== 'undefined' && document) {
        const swiperElement = document.querySelector('.mySwiper');
        if (swiperElement && swiperElement.swiper) {
          try {
            swiperElement.swiper.destroy(true, true);
          } catch (error) {
            console.error('Error destroying Swiper:', error);
          }
        }
      }
    };
  }, [isClient]);

  console.log('MobileAppSection rendering with', services.length, 'services');

  return (
    <section className="mobileapp-section-area case1-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="work-header text-center space-margin60 heading2">
              <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>{title}</h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">{subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-line-slider2">
        {isClient ? (
          <div className="swiper mySwiper swiper-container swiper-container-horizontal">
            <div className="swiper-wrapper">
              {services && services.length > 0 ? services.map((service, index) => (
                <div key={index} className="swiper-slide">
                  <img src={service.image} alt={service.alt || service.title} className="img-fluid" />
                  <div className="slide-overlay">
                    <h4>{service.category}</h4>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="slide-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                  </div>
                </div>
              )) : (
                <div className="swiper-slide">
                  <div className="slide-overlay">
                    <h4>Loading...</h4>
                    <h2>Services Loading</h2>
                    <p>Please wait while services are loading...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="swiper-pagination"></div>

            {/* Navigation */}
            <div className="custom-scrollbar-nav d-flex align-items-center">
              <div className="swiper-scrollbar flex-grow-1 me-3"></div>
              <div className="custom-navigation d-flex gap-2">
                <div className="swiper-button prev"><i className="fas fa-arrow-left"></i></div>
                <div className="swiper-button next"><i className="fas fa-arrow-right"></i></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="swiper-placeholder">
            <div className="swiper-wrapper">
              {services && services.length > 0 ? services.map((service, index) => (
                <div key={index} className="swiper-slide">
                  <img src={service.image} alt={service.alt || service.title} className="img-fluid" />
                  <div className="slide-overlay">
                    <h4>{service.category}</h4>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="slide-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                  </div>
                </div>
              )) : (
                <div className="swiper-slide">
                  <div className="slide-overlay">
                    <h4>Loading...</h4>
                    <h2>Services Loading</h2>
                    <p>Please wait while services are loading...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
