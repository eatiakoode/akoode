import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/software-development/custom-component.svg",
      title: "Custom MVP Development",
      description: "We design and build Minimum Viable Products tailored to your startup's idea and target audience. Our team focuses on core features, rapid development, and scalable architecture to validate concepts quickly. By delivering a functional MVP, we help startups test market fit, gather feedback, and reduce risks before investing in full-scale product development.",
      link: "/deep-learning-and-data-science",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/software-development/ui-ux.svg",
      title: "MVP UI/UX Design",
      description: "We create intuitive and engaging user interfaces for MVPs, ensuring an exceptional user experience with minimal features. Our design approach prioritizes usability, responsiveness, and simplicity, enabling startups to attract early adopters, validate assumptions, and maximize user engagement without overcomplicating the product.",
      link: "/integrated-intelligence-services",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/mvp/prototype.svg",
      title: "Prototype Development",
      description: "We build interactive prototypes to visualize your startup idea before full development. Prototypes help demonstrate functionality, gather early feedback, and guide feature prioritization. By testing concepts early, startups can refine product strategy, identify potential issues, and improve the chances of market success while saving time and development costs.",
      link: "/computer-vision-technology",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/mvp/deployment.svg",
      title: "Rapid MVP Deployment",
      description: "We deploy MVPs quickly using agile methodologies and cloud platforms, ensuring startups can launch in the market faster. Our approach prioritizes speed without compromising quality, enabling early testing, user feedback collection, and iterative improvements that accelerate product evolution and support business growth.",
      link: "/3d-and-metaverse-based",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/enterprise-application-development/integration.svg",
      title: "MVP Integration Services",
      description: "We integrate MVPs with essential third-party tools such as payment gateways, analytics, and CRM systems. This ensures a functional, connected product ecosystem, enabling startups to operate efficiently, monitor user behavior, and optimize workflows while keeping the initial development lean and cost-effective.",
      link: "/pioneering-generative-ai-integration",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/enterprise-application-development/support.svg",
      title: "Post-MVP Support & Iteration",
      description: "We provide continuous support, monitoring, and iterative improvements for MVPs after launch. By analyzing user feedback, fixing issues, and optimizing performance, we help startups refine their products, enhance usability, and prepare for full-scale development while minimizing risks and ensuring long-term growth.",
      link: "/pioneering-generative-ai-integration",
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













