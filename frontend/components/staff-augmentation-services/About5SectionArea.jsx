import React from 'react'

export default function About5SectionArea() {
  const features = [
    "Hire contract basis",
    "100% professional experts", 
    "Scale up & down",
    "Meet project deadline"
  ]

  return (
    <div className="about5-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="img1">
              <img src="/images/artificial-intelligence/advanced-ai.webp" alt="image" className="about-img9 img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8">
              <h5 data-aos="fade-left" data-aos-duration="800">Empowering The Future</h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">IT Staff Augmentation Services</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Meet the project gaps with the right technical experts hired on a temporary basis. Avail of staff augmentation services to hire talent at low cost.
              </p>
              <div className="space32"></div>
              <div className="custom-list">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index} className="color-black">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="btn-area1 text-left" data-aos="fade-left" data-aos-duration="1100">
                <a href="/blog" className="vl-btn2">
                  Get a Quote <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}












