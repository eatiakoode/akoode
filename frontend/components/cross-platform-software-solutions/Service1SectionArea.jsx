import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/software-development/custom-component.svg",
      title: "Custom Cross-Platform App Development",
      description: "We design and build cross-platform applications that run seamlessly on multiple devices and operating systems. Our solutions focus on performance, scalability, and user experience, enabling businesses to reach a wider audience, reduce development costs, and maintain consistent functionality across web, mobile, and desktop platforms.",
      link: "/services/deep-learning-and-data-science",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/software-development/ui-ux.svg",
      title: "UI/UX Design for Cross-Platform Apps",
      description: "We create intuitive and responsive user interfaces for cross-platform applications. By prioritizing usability, consistency, and visual appeal, we ensure a seamless user experience across all devices, enhancing engagement, adoption, and overall satisfaction.",
      link: "/services/integrated-intelligence-services",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/mvp/hybrid.svg",
      title: "Hybrid & Cross-Platform Frameworks",
      description: "We leverage modern frameworks like React Native, Flutter, and Xamarin to build high-performance cross-platform applications. These frameworks enable faster development, cost efficiency, and code reusability while maintaining native-like performance and user experience across platforms.",
      link: "/services/computer-vision-technology",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/enterprise-application-development/integration.svg",
      title: "Third-Party Integrations",
      description: "Our cross-platform solutions seamlessly integrate with third-party tools such as payment gateways, analytics, CRMs, and cloud services. This ensures smooth data flow, interoperability, and enhanced functionality, allowing businesses to operate efficiently and provide a unified experience to users.",
      link: "/services/3d-and-metaverse-based",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/software-development/cloud.svg",
      title: "Cloud-Based Deployment",
      description: "We deploy cross-platform applications on reliable cloud platforms like AWS, Azure, and Google Cloud. Our approach ensures scalability, high availability, real-time updates, and secure access, providing businesses with cost-effective, reliable, and robust software solutions.",
      link: "/services/pioneering-generative-ai-integration",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/software-development/maintenance.svg",
      title: "Maintenance & Support",
      description: "We provide continuous support and maintenance for cross-platform applications. Our team ensures bug fixes, performance optimization, security updates, and feature enhancements, helping businesses maintain consistent functionality, reliability, and a seamless user experience across all platforms.",
      link: "/services/pioneering-generative-ai-integration",
      number: "06"
    }
  ]

  return (
    <div className="service1-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading2 space-margin60">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Our Services
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">
                We specialize in delivering end-to-end MVP development for startups at every stage. Our solutions focus on validating ideas quickly, addressing unique requirements, and optimizing core features. By building functional, scalable, and cost-effective MVPs, we help startups gather user feedback, streamline operations, and accelerate growth while minimizing time-to-market and development risks.
              </h2>
            </div>
          </div>
        </div>

        <div className="integrated-intelligence deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="col-lg-4 col-md-6" 
                  data-aos="zoom-in" 
                  data-aos-duration={`${800 + (index * 100)}`}
                >
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src={service.icon} alt="image" className="img-fluid" />
                    </div>
                    <div className="arrow">
                      <a href={service.link}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="space24"></div>
                    <a href={service.link}>{service.title}</a>
                    <div className="space16"></div>
                    <p>{service.description}</p>
                    <div className="space24"></div>
                    <h5>{service.number}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













