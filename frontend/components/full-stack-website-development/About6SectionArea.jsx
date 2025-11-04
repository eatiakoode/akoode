import React from 'react'

export default function About6SectionArea() {
  const benefits = [
    {
      title: "Full stack website development:",
      description: "This ensures a streamlined process with efficient communication throughout all phases of development."
    },
    {
      title: "Cost-Effective:",
      description: "Hiring a full stack development team can reduce costs, as they are equipped to handle all aspects of the development process."
    },
    {
      title: "Quicker Time-to-Market:",
      description: "Full stack developers can quickly switch between tasks, leading to a more efficient development process and quicker time-to-market."
    },
    {
      title: "Unified Vision:",
      description: "Full stack developers possess a deep comprehension of the entire development process, ensuring all components work in sync."
    }
  ]

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Benefits of Full Stack Website Development</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Full stack website development offers numerous advantages, such as versatility and expertise in both front-end and back-end technologies:
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
                <img src="/images/full-stack/full-stack.webp" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













