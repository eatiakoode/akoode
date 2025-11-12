import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/software-development/custom-component.svg",
      title: "Custom Enterprise Software Development",
      description: "We design and develop enterprise-grade applications tailored to your business needs. From concept to deployment, our solutions ensure seamless integration with existing systems, scalability to support growth, and a strong focus on security. Whether it's a workflow management platform, CRM, ERP, or industry-specific application, we deliver software that simplifies complex processes and drives operational excellence.",
      link: "/services/deep-learning-and-data-science",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/software-development/enterprise.svg",
      title: "Enterprise Mobility Solutions",
      description: "We build secure, mobile-first enterprise applications that empower your workforce with access to business-critical data anytime, anywhere. From field service apps to mobile dashboards, our mobility solutions are designed to be intuitive, responsive, and scalable. By enabling smooth communication across devices and ensuring strict security compliance, we help organizations boost efficiency, enhance collaboration, and support faster decision-making in today's digital workplace.",
      link: "/services/integrated-intelligence-services",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/enterprise-application-development/application.svg",
      title: "Legacy Application Modernization",
      description: "We modernize legacy enterprise applications by migrating them to modern architectures and cloud platforms. Our solutions improve performance, enhance usability, and reduce maintenance costs while preserving core business logic. With modernization, outdated systems transform into scalable, reliable, and efficient applications that better support your enterprise growth.",
      link: "/services/computer-vision-technology",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/enterprise-application-development/integration.svg",
      title: "Enterprise Integration Services",
      description: "We unify your IT ecosystem by integrating CRM, ERP, HRMS, finance, and other critical systems into a streamlined infrastructure. Using APIs, middleware, and cloud technologies, our solutions enable seamless data flow and interoperability. This eliminates silos, improves collaboration, and provides real-time insights to support faster, smarter decision-making.",
      link: "/services/3d-and-metaverse-based",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/enterprise-application-development/cloud.svg",
      title: "Cloud-Based Enterprise Solutions",
      description: "We build scalable, secure, and cost-effective enterprise applications on the cloud. From private and hybrid setups to SaaS platforms, our cloud-native solutions enhance agility, reduce costs, and ensure high availability. With disaster recovery and real-time scalability, we help enterprises achieve reliable performance while maintaining strong security standards.",
      link: "/services/pioneering-generative-ai-integration",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/enterprise-application-development/support.svg",
      title: "Enterprise Application Support & Maintenance",
      description: "We provide continuous monitoring, maintenance, and support to keep enterprise applications secure, reliable, and high-performing. Our team ensures smooth operations with proactive troubleshooting, optimization, and updates, helping businesses adapt to change while ensuring uninterrupted functionality and long-term sustainability.",
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
                We specialize in delivering end-to-end tailored software solutions for businesses of all sizes—small, medium, or large. Our customized approach addresses unique requirements, streamlines operations, and enhances efficiency, empowering organizations to achieve sustainable growth with ease.
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













