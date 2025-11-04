import React from 'react'

export default function ServiceSliderArea() {
  const services = [
    {
      id: 1,
      title: "Custom Web Design",
      description: "Our talented designers collaborate with you to craft visually stunning and user-friendly designs that reflect your brand's personality."
    },
    {
      id: 2,
      title: "Responsive Web Development",
      description: "We guarantee your website provides an optimized experience on all devices, including desktops, tablets and smartphones."
    },
    {
      id: 3,
      title: "CMS Integration",
      description: "Our developers proficiently implement robust Content Management Systems, enabling you to easily manage and update the content on your website."
    },
    {
      id: 4,
      title: "SEO-Optimized",
      description: "We follow SEO best practices to boost your site's search engine rankings and draw in organic traffic."
    }
  ]

  return (
    <div className="about6-section-area sp1 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Our Dynamic Website Development Services provide these benefits and more!</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Akoode Technologies is a premier custom website development company in India, offering an extensive range of services tailored to your individual requirements:
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













