import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/ecommerce/opencart.svg",
      title: "OpenCart Development",
      description: "Create feature-rich, straightforward online stores using the flexible and cost-effective Opencart platform."
    },
    {
      id: 2,
      icon: "/images/ecommerce/shopify.svg",
      title: "Shopify Development",
      description: "Get user-friendly online store creation tailored to your business requirements using Shopify's platform."
    },
    {
      id: 3,
      icon: "/images/ecommerce/woocommerce.svg",
      title: "WooCommerce Development",
      description: "Transform your WordPress website into an impressive online store with advanced, feature-packed Woocommerce development services."
    }
  ]

  return (
    <div className="service1-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading2 space-margin60">
              <h5>
                <span><img src="/images/sub-logo1.svg" alt="image" className="img-fluid" /></span>
                Our Services
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">
                Supportive Solutions for Enhancing eStore Services
              </h2>
            </div>
          </div>
        </div>
        
        <div className="integrated-intelligence deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1100">
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
                    <h5>{service.id.toString().padStart(2, '0')}</h5>
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












