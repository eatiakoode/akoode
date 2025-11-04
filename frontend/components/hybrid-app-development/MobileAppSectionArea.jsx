import React from 'react'

export default function MobileAppSectionArea() {
  const slides = [
    {
      id: 1,
      image: "/images/hybrid/app-development.webp",
      alt: "Hybrid App UI Showcase",
      title: "Custom Hybrid App Development",
      description: "At Akoode Technologies, our experienced developers craft tailored hybrid apps tailored to your business requirements. With their expertise in app development in India, we create versatile and high-performing hybrid apps that work across multiple platforms."
    },
    {
      id: 2,
      image: "/images/native/ui-ux.webp",
      alt: "Native App UI Showcase",
      title: "Hybrid App UI/UX Design",
      description: "At our firm, we create visually appealing and user-friendly interfaces for hybrid apps to provide a consistent experience across different platforms. Drawing upon our expertise in app development in India, we prioritize user satisfaction and engagement when crafting our designs."
    },
    {
      id: 3,
      image: "/images/native/app-integration.webp",
      alt: "Native App UI Showcase",
      title: "Hybrid App Integration",
      description: "Akoode Technologies excels at integrating hybrid apps with existing systems and third-party services to maximize their functionality and data flow. Our app development services in India guarantee compatibility with various APIs, frameworks, and platforms for a unified user experience."
    },
    {
      id: 4,
      image: "/images/native/testing-quality.webp",
      alt: "Native App UI Showcase",
      title: "Hybrid App Testing & Quality Assurance",
      description: "At our firm, we take great care in testing and quality assurance to guarantee a bug-free user experience for your hybrid apps. As one of the premier app development companies in India, we conduct extensive testing across multiple platforms and configurations to guarantee reliability and performance."
    },
    {
      id: 5,
      image: "/images/ios/app-migration.jpg",
      alt: "Ios App UI Showcase",
      title: "Hybrid App Migration & Up gradation",
      description: "At Akoode Technologies in India, our team can assist you with migrating your current hybrid apps to the latest versions or upgrading them with new features to stay ahead of competitors. Our structured approach to migration and upgradation sets us apart from other app development companies."
    },
    {
      id: 6,
      image: "/images/native/app-maintenance-support.webp",
      alt: "Native App UI Showcase",
      title: "Hybrid App Maintenance & Support",
      description: "At our company, we offer ongoing maintenance and support services for your hybrid apps to keep them up-to-date and performing optimally. Utilizing our expertise in app development in India, our team monitors your app for issues, provides regular updates, and promptly addresses any concerns."
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
              <h2 className="text-anime-style-3">Comprehensive Hybrid App Development Services</h2>
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
                  <h4>Hybrid</h4>
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













