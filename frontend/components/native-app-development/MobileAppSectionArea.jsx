import React from 'react'

export default function MobileAppSectionArea() {
  const slides = [
    {
      id: 1,
      image: "/images/native/app-development.webp",
      alt: "Native App UI Showcase",
      title: "Custom Native App Development",
      description: "Akoode Technologies, known for providing the best app development in India, specializes in crafting custom native apps tailored to meet your business objectives. We create high-performance, feature-rich native apps that offer an exceptional user experience on both Android and iOS platforms."
    },
    {
      id: 2,
      image: "/images/native/ui-ux.webp",
      alt: "Native App UI Showcase",
      title: "Native App UI/UX Design",
      description: "Our experienced UI/UX designers create visually appealing and user-friendly interfaces for native apps, providing a consistent and engaging user experience across platforms. As one of the leading app development companies in India, we prioritize user satisfaction while adhering to platform-specific design guidelines."
    },
    {
      id: 3,
      image: "/images/native/app-integration.webp",
      alt: "Native App UI Showcase",
      title: "Native App Integration",
      description: "Akoode Technologies specializes in seamlessly integrating native apps with existing systems and third-party services to increase functionality and data flow. Our expertise in app development in India ensures compatibility with various APIs, frameworks, and platforms."
    },
    {
      id: 4,
      image: "/images/native/testing-quality.webp",
      alt: "Native App UI Showcase",
      title: "Native App Testing & Quality Assurance",
      description: "At our testing and quality assurance labs in India, we conduct exhaustive tests across multiple devices and configurations to guarantee your native apps remain bug-free and offer optimal user experiences. As the premier app development company in the country, our rigorous quality assurance checks guarantee reliability and performance across multiple devices and configurations."
    },
    {
      id: 5,
      image: "/images/ios/app-migration.jpg",
      alt: "Ios App UI Showcase",
      title: "Native App Migration & Upgradation",
      description: "Akoode Technologies's app development services in India offer a structured approach to migration and upgradation, minimizing disruption and guaranteeing an effortless transition. With our experienced team, you'll be able to keep your existing native apps up-to-date with the latest versions or upgrade them with new features for maximum relevance and competitiveness."
    },
    {
      id: 6,
      image: "/images/native/app-maintenance-support.webp",
      alt: "Native App UI Showcase",
      title: "Native App Maintenance & Support",
      description: "At our company, we offer ongoing maintenance and support services for your native apps to keep them running optimally. Drawing upon our expertise in app development in India, our team checks for issues in your app, provides regular updates, and promptly addresses any concerns - providing a smooth and hassle-free experience for you."
    }
  ]

  return (
    <section className="mobileapp-section-area case1-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="work-header text-center space-margin60 heading2">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="" />
                </span>
                What We Offer
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Comprehensive Native App Development Services</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mobile-line-slider2">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div key={slide.id} className="swiper-slide">
                <img src={slide.image} alt={slide.alt} className="img-fluid" />
                <div className="slide-overlay">
                  <h4>Native</h4>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="slide-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="custom-scrollbar-nav d-flex align-items-center">
            <div className="swiper-scrollbar flex-grow-1 me-3"></div>

            <div className="custom-navigation d-flex gap-2">
              <div className="swiper-button prev">
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="swiper-button next">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}













