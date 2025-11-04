import React from 'react'

export default function DatabaseTechnologies() {
  const reasons = [
    {
      title: "Experienced Team:",
      description: "Our skilled developers possess extensive expertise in creating dynamic websites across various industries and niches."
    },
    {
      title: "Timely Delivery:",
      description: "Our goal is to complete your project on schedule and within budget, without compromising quality."
    },
    {
      title: "Dedicated Support:",
      description: "Our knowledgeable customer support team is available 24/7 to address any queries or worries, ensuring a smooth development process."
    }
  ]

  return (
    <div className="database-technologies border-1 about5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <h2 className="text-anime-style-3">Why Choose Akoode Technologies for Website Development in Gurgaon?</h2>
              <div className="space24"></div>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last" data-aos="zoom-in" data-aos-duration="1000">
            <div className="img1">
              <img src="/images/dynamic-website/akoode-tech.webp" alt="image" className="about-img9 img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8 p-0">
              {reasons.map((reason, index) => (
                <div key={index} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration="1000">
                  <div className="content-area">
                    <a href="#">{reason.title}</a>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
              <div className="space32"></div>
            </div>
          </div>
        </div>
        
        <div className="space24"></div>
        <div className="btn-area1 text-center" data-aos="fade-left" data-aos-duration="1100">
          <a href="/blog" className="vl-btn2">
            Start Your Project Now <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}













