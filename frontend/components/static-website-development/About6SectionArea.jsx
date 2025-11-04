import React from 'react'

export default function About6SectionArea() {
  const advantages = [
    {
      title: "Fast Performance:",
      description: "With pre-built HTML pages, static websites load faster for an exceptional user experience."
    },
    {
      title: "Enhanced Security:",
      description: "Static websites are less vulnerable to cyber threats, providing your visitors with a safe browsing environment."
    },
    {
      title: "Low Upkeep:",
      description: "Static websites don't need any server-side processing or database, meaning minimal upkeep and updates are needed."
    },
    {
      title: "Cost Efficiency:",
      description: "Static websites are more cost-effective to develop and host than dynamic ones, making them ideal for startups and small businesses alike."
    }
  ]

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Why Opt For Static Website Development?</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Static websites provide numerous advantages, such as:
              </p>
              <div className="space24"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="about6-header">
              {advantages.map((advantage, index) => (
                <div key={index} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                  <div className="content-area">
                    <a href="#">{advantage.title}</a>
                    <p>{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="images" data-aos="fade-left" data-aos-duration="800">
              <div className="img1 reveal image-anime br20">
                <img src="/images/static-website/static-website.webp" alt="image" className="img-fluid" />
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













