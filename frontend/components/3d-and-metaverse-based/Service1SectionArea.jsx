import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/artificial-intelligence/3d-metaverse/augmented-reality.svg",
      title: "Augmented Reality (AR) Development",
      description: "Enhance user experiences by overlaying digital content in the real world with our AR development services. We design and develop engaging AR applications for various industries, including retail, gaming, education, and more.",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/artificial-intelligence/computer-vision/virtual-reality.svg",
      title: "Virtual Reality (VR) Development",
      description: "Immerse your customers in interactive digital environments with our VR development services. We create captivating VR experiences for a wide range of applications, from training simulations and product demonstrations to virtual tours and entertainment.",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/artificial-intelligence/3d-metaverse/animation.svg",
      title: "3D Modeling and Animation",
      description: "Bring your ideas to life with our 3D modeling and animation services. Our team of skilled artists and designers creates stunning 3D models and animations for use in AR/VR applications, games, marketing materials, and more.",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/artificial-intelligence/3d-metaverse/virtual-reality.svg",
      title: "Metaverse Platform Development",
      description: "Build your presence in the Metaverse with our custom Metaverse platform development services. We help you create virtual worlds and interactive spaces where users can connect, collaborate, and engage with your brand.",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/artificial-intelligence/3d-metaverse/strategy.svg",
      title: "Metaverse Integration and Strategy",
      description: "Maximize the potential of the Metaverse for your business with our integration and strategy services. We'll work with you to develop a comprehensive plan for incorporating Metaverse technologies into your business operations and marketing efforts.",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/artificial-intelligence/3d-metaverse/3d.svg",
      title: "3D Asset Creation and Optimization",
      description: "Optimize your 3D assets for use in AR/VR applications, games, and the Metaverse with our asset creation and optimization services. We create high-quality, optimized 3D models, textures, and animations to ensure seamless performance across various platforms.",
      number: "06"
    },
    {
      id: 7,
      icon: "/images/artificial-intelligence/3d-metaverse/computing.svg",
      title: "Spatial Computing Solutions",
      description: "Leverage the power of spatial computing to create immersive and interactive experiences that blend the physical and digital worlds. We develop custom spatial computing solutions that take advantage of advanced technologies like AR, VR, and the Metaverse.",
      number: "07"
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
                Our Top-Notch Metaverse 3D Development Services
              </h2>
              <p>Metaverse technology has the potential to accelerate every digital business sector. With the help of different services under the 3D metaverse, offerings can make your company stay ahead of the competition.</p>
            </div>
          </div>
        </div>

        <div className="integrated-intelligence deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`col-lg-${index < 4 ? '6' : '4'} col-md-6`} 
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













