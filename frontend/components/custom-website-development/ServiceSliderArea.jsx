import React from 'react'

export default function ServiceSliderArea() {
  const services = [
    {
      id: 1,
      title: "Futuristic Web Design",
      description: "Our talented designers collaborate with you to create visually appealing and user-friendly designs that incorporate futuristic elements like AI and VR."
    },
    {
      id: 2,
      title: "Responsive Web Development",
      description: "We guarantee your website runs optimally across all devices, such as desktops, tablets and smartphones."
    },
    {
      id: 3,
      title: "AI Integration",
      description: "Developers skillfully implement AI-driven features such as chatbots and personalized recommendations to increase user engagement and enhance navigation."
    },
    {
      id: 4,
      title: "SEO-Optimized",
      description: "We adhere to search engine optimization best practices to boost your website's search engine rankings and drive organic traffic."
    }
  ]

  return (
    <div className="about6-section-area sp1 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Our Custom Website Development Services</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Akoode Technologies provides a wide variety of services tailored to your individual requirements:
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













