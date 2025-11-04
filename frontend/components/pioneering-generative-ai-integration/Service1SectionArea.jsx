import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/artificial-intelligence/generative-ai/productivity.svg",
      title: "Enhanced Productivity",
      description: "Generative AI can automate mundane tasks, freeing up your employees to focus on higher-value activities.",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/artificial-intelligence/generative-ai/innovation.svg",
      title: "Accelerated Innovation",
      description: "By generating new ideas and designs, Generative AI can help your business stay ahead of the competition.",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/artificial-intelligence/generative-ai/user-experience.svg",
      title: "Improved Customer Experience",
      description: "Bring your ideas to life with our 3D modeling and animation services. Our team of skilled artists and designers creates stunning 3D models and animations for use in AR/VR applications, games, marketing materials, and more.",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/artificial-intelligence/generative-ai/savings-rupee.svg",
      title: "Cost Savings",
      description: "Build your presence in the Metaverse with our custom Metaverse platform development services. We help you create virtual worlds and interactive spaces where users can connect, collaborate, and engage with your brand.",
      number: "04"
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
                The benefits of integrating Generative AI into your business are numerous
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
                  className="col-lg-6 col-md-6" 
                  data-aos="zoom-in" 
                  data-aos-duration={`${800 + (index * 100)}`}
                >
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src={service.icon} alt="image" className="img-fluid" />
                    </div>
                    <div className="arrow">
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="space24"></div>
                    <a href="javascript:void(0)">{service.title}</a>
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













