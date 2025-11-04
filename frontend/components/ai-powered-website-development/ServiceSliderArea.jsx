import React from 'react'

export default function ServiceSliderArea() {
  const services = [
    {
      id: 1,
      title: "Futuristic Web Design",
      description: "Our experienced designers collaborate with you to craft visually appealing and user-friendly designs that utilize cutting-edge AI technologies"
    },
    {
      id: 2,
      title: "Responsive Web Development",
      description: "We guarantee your AI-powered website runs perfectly across all devices, such as desktops, tablets and smartphones."
    },
    {
      id: 3,
      title: "AI Tool Integration",
      description: "Our developers skillfully incorporate advanced AI tools, such as chatbots, voice assistants and machine learning algorithms to increase user engagement and satisfaction."
    },
    {
      id: 4,
      title: "Progressive Web Applications",
      description: "At Akoode Technologies, we create progressive web applications that seamlessly blend the best features of both mobile apps and websites to offer users a slick, app-like browsing experience."
    }
  ]

  return (
    <div className="about6-section-area sp1 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Our AI-Powered Website Development Service</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Akoode Technologies offers customized services tailored to fit your individual requirements:
              </p>
              <div className="space24"></div>
            </div>
          </div>
        </div>
        
        <div className="case1-section-area sp1 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="case-slider-widget owl-carousel">
                  {services.map((service) => (
                    <div key={service.id} className="case-slider-boxarea">
                      <div className="content-area">
                        <h4>{service.title}</h4>
                        <div className="space16"></div>
                        <p>{service.description}</p>
                        <div className="arrow">
                          <a href="#">
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













