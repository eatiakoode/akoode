import React, { useEffect, useState } from 'react';

export default function BackendTechnologiesSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !isClient) return;

    const initializeOwlCarousel = () => {
      console.log('Initializing backend technologies owl carousel...');

      // Check if jQuery and Owl Carousel are available
      if (!window.$ || !window.$.fn.owlCarousel) {
        console.log('jQuery or Owl Carousel not available, retrying...');
        setTimeout(initializeOwlCarousel, 500);
        return;
      }

      console.log('jQuery and Owl Carousel available');

      // Check if document and required elements exist
      if (!document || !document.querySelector) {
        console.log('Document not ready, retrying...');
        setTimeout(initializeOwlCarousel, 500);
        return;
      }

      // Wait for DOM to be ready
      $(document).ready(() => {
        const carouselElement = $('.case-slider-widget');
        
        if (carouselElement.length > 0) {
          try {
            // Destroy existing carousel if it exists
            if (carouselElement.hasClass('owl-loaded')) {
              carouselElement.trigger('destroy.owl.carousel');
            }

            // Initialize Owl Carousel
            carouselElement.owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              dots: true,
              autoplay: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              responsive: {
                0: {
                  items: 1
                },
                768: {
                  items: 2
                },
                1024: {
                  items: 3
                }
              }
            });
            console.log('Backend technologies owl carousel initialized');
          } catch (error) {
            console.error('Error initializing Owl Carousel:', error);
          }
        } else {
          console.log('Carousel element not found, retrying...');
          setTimeout(initializeOwlCarousel, 500);
        }
      });
    };

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeOwlCarousel, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Destroy carousel on cleanup
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        const carouselElement = $('.case-slider-widget');
        if (carouselElement.length > 0 && carouselElement.hasClass('owl-loaded')) {
          try {
            carouselElement.trigger('destroy.owl.carousel');
          } catch (error) {
            console.error('Error destroying Owl Carousel:', error);
          }
        }
      }
    };
  }, [isClient]);

  const technologies = [
    {
      title: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to utilize JavaScript for server-side programming. It stands out due to its non-blocking, event-driven architecture suited for scalable applications."
    },
    {
      title: "PHP",
      description: "PHP is a server-side scripting language that powers much of the web. It's often used for creating dynamic webpages and can even be embedded directly into HTML code."
    },
    {
      title: "Ruby on Rails",
      description: "Ruby on Rails, commonly referred to as Rails, is a web application framework built upon the Ruby programming language. It adheres to the Model-View-Controller (MVC) architecture and prioritizes convention over configuration for rapid web application development."
    },
    {
      title: "Python",
      description: "Python is an incredibly versatile programming language used for many tasks, including web development. Popular web frameworks like Django and Flask enable programmers to construct robust web applications using this powerful programming language."
    },
    {
      title: "Java",
      description: "Java is a well-known programming language renowned for its platform independence, security and performance. It often powers large web applications through frameworks like Spring or JavaServer Faces (JSF)."
    },
    {
      title: ".NET",
      description: "Microsoft created.NET as a software framework to facilitate the building, deployment and running of applications. It supports multiple languages including C# and VB.NET and provides an integrated environment for web application development."
    }
  ];

  return (
    <div className="about6-section-area sp1 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Back-End Technologies</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">Back-end technologies facilitate server-side operations, data storage and business logic. Here are some popular back-end technologies we utilize:</p>
              <div className="space24"></div>
            </div>
          </div>    
        </div>
        <div className="case1-section-area sp1 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="case-slider-widget owl-carousel">
                  {technologies.map((tech, index) => (
                    <div key={index} className="case-slider-boxarea">
                      <div className="content-area">
                        <h4>{tech.title}</h4>
                        <div className="space16"></div>
                        <p>{tech.description}</p>
                        <div className="arrow">
                          <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}
