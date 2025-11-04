import React from 'react'

export default function DatabaseTechnologies() {
  const reasons = [
    {
      title: "Expert Magento Developers:",
      description: "Our team of certified Magento developers possess the expertise and experience to craft superior eCommerce solutions tailored to meet your individual requirements."
    },
    {
      title: "Proven Track Record:",
      description: "Our successful history of delivering high-quality Magento projects has earned the trust of businesses across various industries."
    },
    {
      title: "Customer-centric Approach:",
      description: "We prioritize understanding your individual business requirements and developing tailored solutions that address them."
    },
    {
      title: "Competitive Pricing:",
      description: "Our Magento development services come at competitive prices, guaranteeing you get the most value for your investment."
    },
    {
      title: "Timely Delivery:",
      description: "Our strict project timeline guarantees your eCommerce store is delivered on schedule without compromising quality."
    },
    {
      title: "24/7 Support:",
      description: "Our highly-trained support team is available 24/7 to answer any queries or worries during and after the project completion."
    }
  ]

  return (
    <div className="deep-learning-applications service2-section-area sp2">
      <div className="service-widgets-section heading2">
        <div className="container">
          <div className="row align-items-center">
            <h2 className="text-anime-style-3 text-center">Why Select Akoode Technologies for Magento eCommerce Development</h2>
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
                  <img src="/images/ecommerce/magento-development.webp" alt="image" className="img-fluid br-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}












