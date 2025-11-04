import React from 'react'

export default function DatabaseTechnologies() {
  const processSteps = [
    {
      id: "pills-home",
      tabId: "pills-home-tab",
      title: "Requirement Gathering",
      description: "At first, share your resource requirement with us to meet your project needs and fulfill the gap. We help you with the availability of industry professionals deem fit for your project and simple to hire under the prescribed set of budget.",
      image: "/images/staff-augmentation/gathering.webp"
    },
    {
      id: "pills-profile", 
      tabId: "pills-profile-tab",
      title: "Screening of Candidates",
      description: "Filter the required technical candidates to become part of your existing team. Get hand-picked professionals with the required years of experience and knowledge of tech-stack, ready to deploy in your office.",
      image: "/images/staff-augmentation/screening.webp"
    },
    {
      id: "pills-contact",
      tabId: "pills-contact-tab", 
      title: "Fast Recruitment & Onboarding",
      description: "After selecting the required technical talent from us, we initiate the fast contractual recruitment process. It helps you get started with the pending project work and speed up the deployment with ease.",
      image: "/images/staff-augmentation/recruitment.webp"
    },
    {
      id: "pills-activity",
      tabId: "pills-activity-tab",
      title: "End-to-End Monitoring", 
      description: "Experience complete flexibility to provide work responsibilities and monitor the performance of augmented staff members. Depending on your requirement, improve the work productivity and enhance the duties of the newly recruited augmented members.",
      image: "/images/staff-augmentation/onboarding.webp"
    }
  ]

  return (
    <div className="database-technologies border-1 about5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <h2 className="text-anime-style-3">Easy to Understand IT Staff Hiring Process</h2>
              <div className="space24"></div>
              <p>We make resource hiring contractually simple & effective for you. Follow a simplified process to find the right tech talent and hire swiftly.</p>
            </div>
          </div>
        </div>
        
        <div className="deep-learning-applications service2-section-area">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service-widgets-section">
                <div className="tab-content" id="pills-tabContent">
                  {processSteps.map((step, index) => (
                    <div 
                      key={step.id}
                      className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} 
                      id={step.id} 
                      role="tabpanel" 
                      aria-labelledby={step.tabId} 
                      tabIndex="0"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="service-boxarea">
                            <div className="space28"></div>
                            <div className="content-area">
                              <h3 data-aos="fade-left" data-aos-duration="800">{step.title}</h3>
                              <div className="space16"></div>
                              <p data-aos="fade-left" data-aos-duration="900">{step.description}</p>
                              <div className="space28"></div>
                              <a href="/contactus" className="vl-btn2">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                          <div className="images-area">
                            <div className="img1 reveal">
                              <img src={step.image} alt="image" className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space80"></div>
                <div className="tabs-btn-area">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    {processSteps.map((step, index) => (
                      <li key={step.tabId} className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${index === 0 ? 'active' : ''}`} 
                          id={step.tabId} 
                          data-bs-toggle="pill" 
                          data-bs-target={`#${step.id}`} 
                          type="button" 
                          role="tab" 
                          aria-controls={step.id} 
                          aria-selected={index === 0}
                        >
                          {step.title.split(' ').slice(0, -1).join(' ')} <span>{step.title.split(' ').slice(-1)[0]}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space24"></div>
      </div>
    </div>
  )
}












