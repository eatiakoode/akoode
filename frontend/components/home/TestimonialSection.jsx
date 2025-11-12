// import { useEffect } from 'react'
import libraryLoader from '../../utils/libraryLoader'

export default function TestimonialSection() {
  // useEffect(() => {
  //   const initializeSliders = () => {
  //     // Initialize testimonial slider (Slick)
  //     if (window.$.fn.slick) {
  //       const sliderElement = $('.slider-galeria');
        
  //       if (sliderElement.length > 0) {
  //         // Destroy existing slider if it exists
  //         if (sliderElement.hasClass('slick-initialized')) {
  //           sliderElement.slick('unslick');
  //         }
          
  //         sliderElement.slick({
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false,
  //           autoplay: true,
  //           autoplaySpeed: 2000,
  //           fade: true,
  //           cssEase: 'linear'
  //         });
  //       }
  //     }

  //     // Initialize video gallery (Owl Carousel)
  //     if (window.$.fn.owlCarousel) {
  //       const videoElement = $('.video-galeria');
        
  //       if (videoElement.length > 0) {
  //         // Destroy existing carousel if it exists
  //         if (videoElement.hasClass('owl-loaded')) {
  //           videoElement.trigger('destroy.owl.carousel');
  //         }
          
  //         videoElement.owlCarousel({
  //           loop: true,
  //           margin: 10,
  //           nav: true,
  //           dots: false,
  //           items: 1,
  //           navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  //           autoplay: false,
  //           smartSpeed: 3000,
  //           autoplayTimeout: 3000,
  //           responsiveClass: true,
  //           responsive: {
  //             0:{
  //               items:1,                
  //             },
  //             600:{
  //               items:1,
  //             },
  //             1024:{
  //               items:2,
  //             },
  //             1280:{
  //               items:3,
  //             }
  //           }
  //         });
  //       }
  //     }

  //     // Initialize video popup (Magnific Popup)
  //     if (window.$.fn.magnificPopup) {
  //       $(".popup-youtube").magnificPopup({
  //         type: "iframe",
  //       });
  //     }
  //   };

  //   // Use the library loader for better performance
  //   libraryLoader.initializeComponent(
  //     'TestimonialSection',
  //     ['jquery', 'slick', 'owlCarousel', 'magnificPopup'],
  //     initializeSliders
  //   );

  //   // Cleanup function
  //   return () => {
  //     if (typeof window !== 'undefined' && window.$) {
  //       // Destroy sliders on cleanup
  //       if (window.$.fn.slick) {
  //         const sliderElement = $('.slider-galeria');
  //         if (sliderElement.length > 0 && sliderElement.hasClass('slick-initialized')) {
  //           try {
  //             sliderElement.slick('unslick');
  //           } catch (error) {
  //             console.error('Error destroying slick slider:', error);
  //           }
  //         }
  //       }
  //       if (window.$.fn.owlCarousel) {
  //         const videoElement = $('.video-galeria');
  //         if (videoElement.length > 0 && videoElement.hasClass('owl-loaded')) {
  //           try {
  //             videoElement.trigger('destroy.owl.carousel');
  //           } catch (error) {
  //             console.error('Error destroying owl carousel:', error);
  //           }
  //         }
  //       }
  //     }
  //   };
  // }, []);

  return (
    <div className="testimonial1-section-area sp1">
      <div className="shape-image">
        <img src="/images/shape-03.png" alt="image" className="img-fluid swing" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="testimonial-header text-center heading2 space-margin60">
              <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>What Our Clients Say</h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Hear from those who trusted us to bring their ideas to life</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 order-lg-5">
            <div className="video-galeria owl-carousel">
              <div className="video-slide-content">
                <div className="img1 image-anime reveal">
                  <a href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                    <img src="/images/testimonial/video1.jpg" alt="" className="img-fluid" />
                    <span><i className="fa-solid fa-play"></i></span>
                  </a>
                </div>
              </div>
              <div className="video-slide-content">
                <div className="img1 image-anime reveal">
                  <a href="https://www.youtube.com/watch?v=4kcP_iBhPgE" className="popup-youtube">
                    <img src="/images/testimonial/video2.jpg" alt="" className="img-fluid" />
                    <span><i className="fa-solid fa-play"></i></span>
                  </a>
                </div>
              </div>
              <div className="video-slide-content">
                <div className="img1 image-anime reveal">
                  <a href="https://www.youtube.com/watch?v=A0Ll4palvB4" className="popup-youtube">
                    <img src="/images/testimonial/video3.jpg" alt="" className="img-fluid" />
                    <span><i className="fa-solid fa-play"></i></span>
                  </a>
                </div>
              </div>
              <div className="video-slide-content">
                <div className="img1 image-anime reveal">
                  <a href="https://www.youtube.com/watch?v=VyJLQntDE_s" className="popup-youtube">
                    <img src="/images/testimonial/video4.jpg" alt="" className="img-fluid" />
                    <span><i className="fa-solid fa-play"></i></span>
                  </a>
                </div>
              </div>
              <div className="video-slide-content">
                <div className="img1 image-anime reveal">
                  <a href="https://www.youtube.com/watch?v=29cO-J4s8qA" className="popup-youtube">
                    <img src="/images/testimonial/video5.jpg" alt="" className="img-fluid" />
                    <span><i className="fa-solid fa-play"></i></span>
                  </a>
                </div>
              </div>
            </div>    
          </div>

          <div className="col-lg-6">
            <div className="slider-galeria">
              <div className="testimonial-slider-content-area" style={{ display: 'block', minHeight: '300px' }}>
                <div className="testimonial-man-info-area">
                  <div className="man-images-text">
                    <div className="mans-img">
                      <img src="/images/testimonial/client1.png" alt="" />
                    </div>
                    <div className="man-text">
                      <a href="team.html">Filippo Quattrocchi</a>
                      <div className="space12"></div>
                      <p>Owner CEO</p>
                    </div>
                  </div>
                  <img src="/images/elements17.png" alt="" />
                </div>
                <div className="testimonial-author-area">
                  <ul>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                  </ul>
                  <div className="space16"></div>
                  <img src="/images/quito1.svg" alt="" className="quito1" />
                  <p>Akoode Technology is a company made up of professionals, who accept all the challenges that are proposed to them. In my case, they did a code review of my application, updating the payment features and other functions.</p>
                </div>
                <div className="space16"></div>
              </div>

              <div className="testimonial-slider-content-area">
                <div className="testimonial-man-info-area">
                  <div className="man-images-text">
                    <div className="mans-img">
                      <img src="/images/testimonial/client2.png" alt="" />
                    </div>
                    <div className="man-text">
                      <a href="team.html">Dominic Ballerino</a>
                      <div className="space12"></div>
                      <p>Owner CTO</p>
                    </div>
                  </div>
                  <img src="/images/elements/elements17.png" alt="" />
                </div>
                <div className="testimonial-author-area">
                  <ul>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                  </ul>
                  <div className="space16"></div>
                  <img src="/images/quito1.svg" alt="" className="quito1" />
                  <p>Akhil and his team at Akoode Technology were great to work with. Very friendly and efficient. I am very pleased with the website they developed for my business and would highly recommend Akoode Technology to anyone looking for high-quality and professional website design.</p>
                </div>
                <div className="space16"></div>
              </div>

              <div className="testimonial-slider-content-area">
                <div className="testimonial-man-info-area">
                  <div className="man-images-text">
                    <div className="mans-img">
                      <img src="/images/testimonial/client3.png" alt="" />
                    </div>
                    <div className="man-text">
                      <a href="team.html">Amber Swan</a>
                      <div className="space12"></div>
                      <p>Owner Taxfirm</p>
                    </div>
                  </div>
                  <img src="/images/elements17.png" alt="" />
                </div>
                <div className="testimonial-author-area">
                  <ul>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                  </ul>
                  <div className="space16"></div>
                  <img src="/images/quito1.svg" alt="" className="quito1" />
                  <p>A marketing professional for Akoode Technology had reached out to me on LinkedIn, at the time I had just set up services with another website company, the other company took months to get to my new website and they only ended up copying my old website.</p>
                </div>
                <div className="space16"></div>
              </div>

              <div className="testimonial-slider-content-area">
                <div className="testimonial-man-info-area">
                  <div className="man-images-text">
                    <div className="mans-img">
                      <img src="/images/testimonial/client4.png" alt="" />
                    </div>
                    <div className="man-text">
                      <a href="team.html">Saanvi Saahu</a>
                      <div className="space12"></div>
                      <p>Owner Taxfirm</p>
                    </div>
                  </div>
                  <img src="/images/elements17.png" alt="" />
                </div>
                <div className="testimonial-author-area">
                  <ul>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                  </ul>
                  <div className="space16"></div>
                  <img src="/images/quito1.svg" alt="" className="quito1" />
                  <p>I had the pleasure of interning with Akoode Technology, and it was truly a rewarding experience. The team was incredibly supportive and flexible, always understanding and accommodating any unexpected commitments. They consistently empowered me to give my best at my convenience.</p>
                </div>
                <div className="space16"></div>
              </div>

              <div className="testimonial-slider-content-area">
                <div className="testimonial-man-info-area">
                  <div className="man-images-text">
                    <div className="mans-img">
                      <img src="/images/testimonial/client5.png" alt="" />
                    </div>
                    <div className="man-text">
                      <a href="team.html">Sanjay Krishna</a>
                      <div className="space12"></div>
                      <p>Owner Taxfirm</p>
                    </div>
                  </div>
                  <img src="/images/elements17.png" alt="" />
                </div>
                <div className="testimonial-author-area">
                  <ul>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                    <li><a href=""><i className="fa-solid fa-star"></i></a></li>
                  </ul>
                  <div className="space16"></div>
                  <img src="/images/quito1.svg" alt="" className="quito1" />
                  <p>I worked at Akoode Technology as an HR Executive, and it has been one of the best experiences in my career. The learning opportunities were immense, and I had the chance to engage with some of the top talent in the country. The dynamic environment at Akoode Technology makes it one of the best software companies in India.</p>
                </div>
                <div className="space16"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
