import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/software-development/custom-component.svg",
      title: "Custom Software Development",
      description: "We design and develop fully customized software solutions aligned with your unique business goals. From concept to deployment, our team follows agile practices to deliver secure, scalable, and high-performing applications. Whether you need a simple business tool or a complex enterprise-grade platform, our tailored solutions ensure flexibility, efficiency, and measurable outcomes to help your business stay competitive in the digital age.",
      link: "/deep-learning-and-data-science",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/software-development/application.svg",
      title: "Web & Mobile Application Development",
      description: "Our expert developers create responsive web applications and intuitive mobile apps for iOS and Android. With a focus on performance, usability, and seamless integration, we build digital experiences that engage users and drive conversions. From eCommerce platforms to on-demand mobile solutions, we ensure your business stays connected with customers anytime, anywhere—delivering convenience, value, and a strong digital presence.",
      link: "/integrated-intelligence-services",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/software-development/enterprise.svg",
      title: "Enterprise Software Solutions",
      description: "We build enterprise-grade software systems that streamline operations, improve collaboration, and enhance productivity across departments. Our solutions are designed to handle complex workflows, large-scale data, and mission-critical processes with security and scalability at their core. By integrating automation, analytics, and cloud technologies, we empower businesses to achieve efficiency, reduce costs, and accelerate decision-making in highly competitive markets.",
      link: "/computer-vision-technology",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/software-development/cloud.svg",
      title: "Cloud Solutions & Integration",
      description: "We help businesses harness the full potential of cloud technologies by delivering scalable, secure, and cost-effective solutions. From cloud-native applications to seamless integration with third-party systems, our services ensure smooth connectivity, efficient data flow, and improved collaboration. Whether you're migrating to the cloud or optimizing existing infrastructure, we provide tailored strategies that enable business continuity, agility, and long-term growth.",
      link: "/3d-and-metaverse-based",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/software-development/ui-ux.svg",
      title: "UI/UX Design & Development",
      description: "Great software isn't just about functionality—it's also about experience. Our UI/UX design experts craft human-centered interfaces that are visually engaging, intuitive, and easy to navigate. By blending creativity with usability principles, we create designs that enhance customer satisfaction and loyalty. From wireframes to interactive prototypes, we ensure every touchpoint is optimized to deliver seamless digital experiences that delight users and strengthen your brand.",
      link: "/pioneering-generative-ai-integration",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/software-development/maintenance.svg",
      title: "Maintenance & Support",
      description: "We offer comprehensive post-deployment maintenance and support to keep your software secure, up-to-date, and fully optimized. Our proactive monitoring, bug fixes, and regular updates ensure smooth performance and business continuity. With dedicated support teams, we handle technical challenges quickly and efficiently, so you can focus on growth while we take care of reliability. Our goal is to keep your digital solutions future-ready at all times.",
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













