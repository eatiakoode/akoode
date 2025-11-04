import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/software-development/custom-component.svg",
      title: "Custom SaaS Application Development",
      description: "We design and build secure, scalable, and feature-rich SaaS applications tailored to your business model. From MVP to full-scale product, our team ensures smooth deployment, high performance, and future-ready architecture. With a customer-centric approach, we deliver cloud-based solutions that enhance user experience, support growth, and give your business a competitive edge in the digital marketplace.",
      link: "/deep-learning-and-data-science",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/software-development/ui-ux.svg",
      title: "SaaS Product UI/UX Design",
      description: "Our design team creates intuitive and engaging user interfaces for SaaS products that maximize usability and user satisfaction. We focus on responsive layouts, seamless navigation, and visually appealing designs to ensure an exceptional experience across devices. With user-centric design strategies, we enhance customer adoption, retention, and overall product success in competitive markets.",
      link: "/integrated-intelligence-services",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/saas/architecture.svg",
      title: "Multi-Tenant Architecture Development",
      description: "We build SaaS solutions with multi-tenant architecture, enabling multiple users or organizations to securely access the same application with dedicated data isolation. Our approach ensures scalability, cost-efficiency, and simplified management, allowing businesses to serve diverse clients seamlessly while maintaining high standards of data security, customization, and performance across the platform.",
      link: "/computer-vision-technology",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/enterprise-application-development/integration.svg",
      title: "SaaS Integration Services",
      description: "We integrate your SaaS application with third-party platforms such as payment gateways, CRMs, ERPs, and cloud services to deliver a unified ecosystem. Our integration services ensure smooth data flow, interoperability, and real-time synchronization, reducing silos and improving productivity. This creates a connected environment where your SaaS product becomes more efficient, valuable, and business-ready.",
      link: "/3d-and-metaverse-based",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/software-development/cloud.svg",
      title: "Cloud Hosting & Deployment",
      description: "Our cloud-first approach ensures your SaaS applications are deployed on secure, reliable, and scalable cloud platforms such as AWS, Azure, or Google Cloud. We optimize hosting for cost efficiency, high availability, and disaster recovery. With real-time scalability and robust infrastructure, we guarantee uninterrupted performance, data security, and flexibility for your growing SaaS business.",
      link: "/pioneering-generative-ai-integration",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/software-development/maintenance.svg",
      title: "SaaS Maintenance & Support",
      description: "We provide end-to-end maintenance and support for SaaS products to ensure smooth operations post-deployment. Our services include performance monitoring, bug fixing, security updates, and feature enhancements. With proactive support and regular updates, we help businesses keep their SaaS applications reliable, secure, and adaptable to evolving customer demands and industry trends.",
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
                We specialize in delivering end-to-end SaaS product development for businesses of all sizes—small, medium, or large. Our cloud-based solutions address unique requirements, streamline operations, and improve efficiency, enabling organizations to scale faster, reduce costs, and achieve sustainable growth with ease.
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













