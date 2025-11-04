import { useEffect } from 'react'

export default function CaseStudySection({ casestudylist = [] }) {
  const safeCasestudylist = Array.isArray(casestudylist) ? casestudylist : [];
  
  // Ensure we have valid data before rendering
  if (!safeCasestudylist || safeCasestudylist.length === 0) {
    return (
      <section className="slider">
        <div className="container">
          <div className="text-center heading2 space-margin60">
            <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>Case Studies</h5>
            <div className="space20"></div>
            <h2 className="text-anime-style-3">Real success stories showcasing our expertise and impact</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p>No case studies available at the moment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  useEffect(() => {
    const initializeCaseStudySliders = () => {
      console.log('Initializing case study sliders...');
      
      // Check if Swiper is available
      if (typeof window === 'undefined' || !window.Swiper) {
        console.log('Swiper not available, retrying...');
        setTimeout(initializeCaseStudySliders, 500);
        return;
      }

      console.log('Swiper available:', !!window.Swiper);

      // Wait for DOM to be ready
      if (typeof window !== 'undefined' && window.$) {
        $(document).ready(() => {
          try {
            // Check if elements exist
            const contentElement = document.querySelector('.events-slider-content');
            const imageElement = document.querySelector('.events-slider-images');
            
            console.log('Content element found:', !!contentElement);
            console.log('Image element found:', !!imageElement);

            if (!contentElement || !imageElement) {
              console.log('Elements not found, retrying...');
              setTimeout(initializeCaseStudySliders, 500);
              return;
            }

            // Add page-loaded class to body to make content visible
            if (document.body) {
              document.body.classList.add('page-loaded');
            }

            // Initialize content slider first with error handling
            let eventSliderContent = null;
            try {
              eventSliderContent = new window.Swiper('.events-slider-content', {
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 1,
                touchRatio: 0.2,
                slideToClickedSlide: true,
                loop: safeCasestudylist.length > 1, // Only loop if we have multiple items
                direction: 'vertical',
                pagination: {
                  el: '.swiper-pagination',
                  type: 'fraction',
                },
              });
            } catch (error) {
              console.error('Error initializing content slider:', error);
              return;
            }

            // Initialize image slider with error handling
            let eventsSliderImages = null;
            try {
              eventsSliderImages = new window.Swiper('.events-slider-images', {
                spaceBetween: 0,
                autoplay: safeCasestudylist.length > 1 ? {
                  delay: 9500,
                  disableOnInteraction: false,
                } : false, // Only autoplay if we have multiple items
                loop: safeCasestudylist.length > 1, // Only loop if we have multiple items
                effect: 'fade',
                loopedSlides: 1,
                navigation: {
                  nextEl: '.button-next',
                  prevEl: '.button-prev',
                },
                thumbs: eventSliderContent ? {
                  swiper: eventSliderContent
                } : undefined
              });
            } catch (error) {
              console.error('Error initializing image slider:', error);
              return;
            }

            // Link the sliders only if both are successfully initialized
            if (eventsSliderImages && eventSliderContent) {
              try {
                eventsSliderImages.controller.control = eventSliderContent;
                eventSliderContent.controller.control = eventsSliderImages;
                console.log('Case study sliders initialized and linked');
              } catch (error) {
                console.error('Error linking sliders:', error);
              }
            }
          } catch (error) {
            console.error('Error in slider initialization:', error);
          }
        });
      }
    };

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeCaseStudySliders, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [safeCasestudylist]);

  return (
    <>
    <section className="slider">
      {/* <div className="case-study-img robo-image">
        <img src="images/case-study.svg" alt="image" className="img-fluid swing2" />
      </div> */}
      <div className="container">
        <div className="text-center heading2 space-margin60">
          <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>Case Studies</h5>
          <div className="space20"></div>
          <h2 className="text-anime-style-3">Real success stories showcasing our expertise and impact</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="events-slider-content">
              <div className="swiper-wrapper">
                 {safeCasestudylist.length > 0 ? (
           safeCasestudylist.slice(0, 4).map((item, index) => {
             // Add safety checks for each item
             if (!item) return null;
             
             return (
                  <div className="swiper-slide" key={index}>
                    <div className="inner">
                      <div className="casestudy-slider-boxarea">
                       <h4>{item.title || 'Case Study Title'}</h4>
                       <div dangerouslySetInnerHTML={{ __html: item.description || 'No description available.' }} />
                       <div className="space28"></div>
                       <div className="viewcasestudy">
                         <a href={item.slug ? `/casestudy-detail/${item.slug}` : 'javascript:void(0)'} className="vl-btn1">View Case Study <i className="fa-solid fa-arrow-right"></i></a>
                       </div>
                      </div>
                    </div>
                  </div>
                 );
                   })
                 ) : (
                   // Fallback content when no case studies are available
                   <div className="swiper-slide">
                     <div className="inner">
                       <div className="casestudy-slider-boxarea">
                         <h4>No Case Studies Available</h4>
                         <p>No case studies available at the moment.</p>
                       </div>
                     </div>
                   </div>
                 )}
                
                {/* <div className="swiper-slide">
                  <div className="inner">
                    <div className="casestudy-slider-boxarea">
                      <h4>Case Study: Digital Transformation of Mullen Equipments by Akoode Technologies</h4>
                      <p>Company Highlight  - 75+ Years in the business</p>
                      <h5>Client Overview</h5>
                      <p>Mullen Equipments is a trusted name in industrial machinery and tools manufacturing, serving clients across industries like construction, mining, and heavy industries. With over three decades of experience, the company is known for its commitment to quality. However, they faced challenges in embracing the digital era, where efficiency, data-driven decisions, and superior customer experiences are vital to remain competitive.</p>
                      <div className="space28"></div>
                      <div className="viewcasestudy">
                        <a href="javascript:void(0)" className="vl-btn1">View Case Study <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <div className="inner">
                    <div className="casestudy-slider-boxarea">
                      <h4>Case Study: Securing and Managing Digital Infrastructure for Sarita Handa Group
                      </h4>
                      <p>Company Size - 1000+ Employees
                      </p>
                      <p>Company Revenue - 80+ M Dollors</p>
                      <p><strong>Industry: Luxury Home Furnishings & Textiles</strong></p>
                      <h5>Client Overview</h5>
                      <p>Sarita Handa Group, a leading luxury home furnishings brand, faced a severe cyberattack that compromised their website, internal systems, and critical web applications. The breach resulted in website downtime, data vulnerabilities, and operational disruptions, impacting customer trust and online business functions.
                      </p>
                      <div className="space28"></div>
                      <div className="viewcasestudy">
                        <a href="javascript:void(0)" className="vl-btn1">View Case Study <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <div className="inner">
                    <div className="casestudy-slider-boxarea">
                      <h4>Case Study: About Patton's Contract Services Division
                      </h4>
                      <p>40+ Years of Proven Excellence Since 1984
                      </p>
                      
                      <p><strong>Industry: Datacom, Networking & Communications product company (OEM)</strong></p>
                      <h5>Client Overview</h5>
                      <p>Patton was founded in 1984 as a Datacom, Networking & Communications product company (OEM). Over the years Patton built a vertically integrated manufacturing capability to bring its own hardware and software products to market..
                      </p>
                      <div className="space28"></div>
                      <div className="viewcasestudy">
                        <a href="case-study.html" className="vl-btn1">View Case Study <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="events-slider-images">
              <div className="swiper-wrapper">
               {safeCasestudylist.length > 0 ? (
           safeCasestudylist.slice(0, 4).map((item, index) => {
             // Add safety checks for each item
             if (!item) return null;
             
             return (
                  <div className="swiper-slide" key={index}>
                    <h2>
                      <span>{item.subtitle || 'Case Study'}</span>
                      {item.title || 'Title'}
                    </h2>
                    <div className="slide-image">
                      <img 
                        src={item.logoimage ? `${process.env.NEXT_PUBLIC_API_URL}${item.logoimage}` : '/images/case-study/default.webp'} 
                        alt={item.title || 'case study image'} 
                        className="img-fluid" 
                      />
                    </div>
                  </div>
                  );
                 })
               ) : (
                 // Fallback content when no case studies are available
                 <div className="swiper-slide">
                   <h2><span>No</span>Case Studies Available</h2>
                   <div className="slide-image">
                     <img src="/images/case-study/default.webp" alt="no case studies" className="img-fluid" />
                   </div>
                 </div>
               )}
                
                {/* <div className="swiper-slide">
                  <h2><span>A Legacy of Innovation and Resilience</span>Mullen Equipment's Journey</h2>
                  <div className="slide-image">
                    <img src="/images/case-study/mullen-logo.png" alt="mullen equipment corporation" className="img-fluid" />
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <h2><span>Bespoke craftsmanship meets</span>New-age technology</h2>
                  <div className="slide-image">
                    <img src="/images/case-study/sarita-handa.svg" alt="sarita handa" className="img-fluid" />
                  </div>
                </div>
                
                <div className="swiper-slide">
                  <h2><span>Datacom, Networking & Communications</span>product company (OEM)</h2>
                  <div className="slide-image">
                    <img src="/images/case-study/patton.png" alt="patton" className="img-fluid" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
