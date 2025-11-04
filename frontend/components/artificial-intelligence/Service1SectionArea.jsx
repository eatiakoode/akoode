import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/artificial-intelligence/deep-learning.svg",
      title: "Deep Learning and Data Science",
      link: "/deep-learning-and-data-science",
      description: "At Akoode Technologies, we harness deep learning and data science to transform raw data into valuable insights. From predictive analytics and natural language processing to intelligent automation, our solutions help businesses enhance decision-making, streamline operations, and deliver personalized user experiences for accelerated growth.",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/services/artificial-intelligence.svg",
      title: "Integrated Intelligence Services",
      link: "/integrated-intelligence-services",
      description: "Akoode Technologies delivers integrated intelligence services that unify AI, machine learning, and data-driven strategies into powerful business solutions. Our expertise helps organizations automate workflows, enhance decision-making, and optimize performance—creating seamless, intelligent ecosystems that drive innovation, efficiency, and long-term growth.",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/artificial-intelligence/computer-vision/computer-vision.svg",
      title: "Computer Vision Technology",
      link: "/computer-vision-technology",
      description: "Akoode Technologies empowers businesses with advanced computer vision technology to interpret images and videos with accuracy and speed. From facial recognition and object detection to quality inspection and surveillance, our solutions enable smarter automation, enhanced security, and real-time insights that transform operations across industries.",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/artificial-intelligence/3d-metaverse/3d.svg",
      title: "3D and Metaverse Based",
      link: "/3d-and-metaverse-based",
      description: "Akoode Technologies delivers immersive 3D and metaverse-based solutions that redefine digital interaction. From virtual showrooms and collaborative spaces to training simulations and interactive experiences, we empower businesses to engage audiences, enhance brand presence, and unlock new growth opportunities in the rapidly evolving metaverse ecosystem.",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/integration.svg",
      title: "Pioneering Generative AI Integration",
      link: "/pioneering-generative-ai-integration",
      description: "Akoode Technologies leads the way in generative AI integration, empowering businesses with intelligent tools for content creation, process automation, and personalized experiences. Our expertise combines innovation and strategy to deliver scalable AI-driven solutions that boost efficiency, enhance engagement, and drive sustainable growth across industries.",
      number: "05"
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
                We have the capabilities to implement AI technology into small, medium, to large-scale businesses meeting different requirements and automating processes with ease.
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
                  className={`col-lg-${index < 2 ? '6' : '4'} col-md-6`} 
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


