import React from 'react'

export default function DatabaseTechnologies() {
  const reasons = [
    {
      title: "Expert Shopify Developers:",
      description: "Our team of certified Shopify developers possess the skills and expertise to craft tailored eCommerce solutions tailored to meet your individual requirements."
    },
    {
      title: "Proven Track Record:",
      description: "Our successful history of delivering top-notch Shopify projects has earned the trust of businesses across a range of industries."
    },
    {
      title: "Customer-centric Approach:",
      description: "We prioritize understanding your individual business requirements and crafting tailored solutions that address them."
    },
    {
      title: "Competitive Pricing:",
      description: "Our Shopify development services come at competitive prices, guaranteeing you get the most value for your investment."
    },
    {
      title: "Timely Delivery:",
      description: "Our project timeline is strict, guaranteeing your eCommerce store is delivered on schedule without compromising quality."
    },
    {
      title: "24/7 Support:",
      description: "Our knowledgeable support team is available 24/7 to address any queries or worries during and after the project completion."
    }
  ]

  return (
    <div className="deep-learning-applications service2-section-area sp2">
      <div className="service-widgets-section heading2">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="text-anime-style-3 text-center">Why Choose Akoode Technologies for Shopify Development</h2>
            <div className="col-lg-6">
              <div className="service-boxarea pb-5">
                <div className="space24"></div>
                <div className="content-area">
                  <div className="space16"></div>
                  {reasons.map((reason, index) => (
                    <div key={index} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                      <div className="content-area">
                        <a href="#">{reason.title}</a>
                        <p>{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="images-area">
                <div className="img1 reveal">
                  <img src="/images/ecommerce/opencart-development.webp" alt="image" className="img-fluid br-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}












