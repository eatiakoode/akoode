import React from 'react'

export default function DatabaseTechnologies() {
  const reasons = [
    {
      title: "Expert Opencart Developers:",
      description: "Our team of highly-experienced Opencart developers possess the expertise and know-how to craft exceptional eCommerce solutions tailored to meet your individual requirements"
    },
    {
      title: "Proven Track Record:",
      description: "As the leading Opencart company in India, we have an impressive history of delivering top-quality Opencart projects across various industries."
    },
    {
      title: "Customer-centric Approach:",
      description: "We prioritize understanding your individual business requirements and developing tailored solutions that address them."
    },
    {
      title: "Competitive Pricing:",
      description: "Our Opencart development services come at competitive prices, ensuring you get the most value for your investment."
    },
    {
      title: "Timely Delivery:",
      description: "Our strict project timeline guarantees your eCommerce store is delivered on schedule without compromising quality."
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
            <h2 className="text-anime-style-3 text-center">Why Choose Akoode Technologies - The Best Opencart Company in India</h2>
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












