import React from 'react'

export default function About6SectionArea() {
  const benefits = [
    {
      title: "Tailored Solutions:",
      description: "Custom websites are created from scratch to meet your business requirements and brand aesthetic. This ensures a perfect fit for your brand."
    },
    {
      title: "Competitive Edge:",
      description: "An eye-catching website design sets you apart from your rivals, providing a memorable user experience that keeps visitors coming back for more."
    },
    {
      title: "Scalability:",
      description: "Custom websites are easily scaleable to your business requirements, enabling the seamless integration of new features and functionalities."
    },
    {
      title: "Optimised Performance:",
      description: "Crafted specifically with speed, security, and SEO in mind for high-performance online presence."
    }
  ]

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Benefits of Custom Website Development</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Custom website development provides numerous advantages over standard website creation. Custom website development offers several advantages:
              </p>
              <div className="space24"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="about6-header">
              {benefits.map((benefit, index) => (
                <div key={index} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                  <div className="content-area">
                    <a href="#">{benefit.title}</a>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="images" data-aos="fade-left" data-aos-duration="800">
              <div className="img1 reveal image-anime br20">
                <img src="/images/custom-website/custom-website.webp" alt="image" className="img-fluid" />
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
    </div>
  )
}













