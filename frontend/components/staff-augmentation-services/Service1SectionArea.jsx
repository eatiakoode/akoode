import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/staff-augmentation/marketing.svg",
      title: "Perform Comprehensive Market Research",
      description: "Start with deep and comprehensive market research with the help of experienced business analysts. Rely on the augmented analyst professionals to study the competitors and create effective strategies for you."
    },
    {
      id: 2,
      icon: "/images/staff-augmentation/creative.svg",
      title: "Create Intuitive UI/UX Design Elements",
      description: "Create a lasting impression with the help of impressive UI/UX designed by our creative experts. Collaborate with skilled designers, visual artists, and other professionals."
    },
    {
      id: 3,
      icon: "/images/staff-augmentation/analysis.svg",
      title: "Ensure Deep Testing & Development",
      description: "Maintain the accuracy of your website or application with thorough testing done by leading testing experts. Hire QA and other required professionals to ensure software quality and robustness."
    },
    {
      id: 4,
      icon: "/images/staff-augmentation/devops.svg",
      title: "Make Prototypes & Integrate DevOps",
      description: "Hire seasoned DevOps engineers and other professionals to simplify the development process. On the other side, create initial level prototypes to stay clear of your business objective."
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
                Meet Diverse Project Requirements With Contractual Staffing
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">
                From designing, development, analysis, testing, writing, and marketing, to prototyping, just do it all with the help of extended resource support. Rely on staff-augmented members to cover every single project type.
              </h2>
            </div>
          </div>
        </div>
        
        <div className="deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service) => (
                <div key={service.id} className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={`${800 + (service.id - 1) * 100}`}>
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












