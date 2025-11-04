import React from 'react'

export default function ServiceSliderArea() {
  const services = [
    {
      id: 1,
      title: "Custom Web Design",
      description: "Our creative designers collaborate closely with you to produce visually appealing and user-friendly designs that accurately portray your brand's identity."
    },
    {
      id: 2,
      title: "Responsive Web Development",
      description: "We guarantee your website works seamlessly across all devices, such as desktops, tablets and smartphones."
    },
    {
      id: 3,
      title: "SEO-Optimized",
      description: "Our developers adhere to SEO best practices in order to enhance your site's search engine rankings and drive organic traffic."
    },
    {
      id: 4,
      title: "Content Management",
      description: "With our user-friendly content management systems, updating your website content has never been simpler."
    }
  ]

  return (
    <div className="about6-section-area sp1 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Our Static Website Development Services Offer an Affordable Solution</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Akoode Technologies is a custom website development company in India, offering an array of services tailored to fit your individual requirements:
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













