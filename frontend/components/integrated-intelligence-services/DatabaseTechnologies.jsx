import React from 'react'

export default function DatabaseTechnologies() {
  const benefits = [
    {
      id: 1,
      title: "Automate Repetitive Tasks",
      description: "AI in your business operations can help automate mundane and repetitive manual tasks to reduce human efforts and divert their attention towards value-driven things. Enable an automated customer support system with the help of AI-based RPA bots and meet people's queries well on time. Our expert team of AI further assists you in automating numerous data-entry tasks along with generating customer tickets, intent prediction, and other operations to speed up the process. Tailored to your specific business requirements, automate manifold operational procedures to improve customer service experience, improve retention rate, expand services, and reduce overall cost.",
      image: "/images/artificial-intelligence/integrated-intelligence/tasks.webp",
      tabId: "pills-home",
      tabTarget: "pills-home"
    },
    {
      id: 2,
      title: "Personalize Customer Service Experience",
      description: "Stand out from the competition by adopting the result-driven virtues of Artificial Intelligence technology with the real-time assistance of Akoode Technologies. Optimize customer experience by relying on data-driven decisions, content recommendations, and AI-powered personality-based marketing. It helps you understand the sales patterns, customer behavior, and preferences to make necessary altercations in your product offering strategies. Moreover, increase the enterprise's ability to track customer purchasing points and preferences to improve sales patterns.",
      image: "/images/artificial-intelligence/integrated-intelligence/service-experience.webp",
      tabId: "pills-profile",
      tabTarget: "pills-profile"
    },
    {
      id: 3,
      title: "Reduce Data-Related Threats",
      description: "Data is a valuable asset of your business that must not be compromised at all levels and should be away from unexpected hacking and leakage. To ensure end-to-end cybersecurity benefits, AI-based analytical and predictive forms help identify hidden errors, threats, and other data-related loopholes to suggest a solution well in advance. It helps anticipate a data threat and systemically solve the issues in the shortest possible time.",
      image: "/images/artificial-intelligence/integrated-intelligence/data-threats.webp",
      tabId: "pills-contact",
      tabTarget: "pills-contact"
    },
    {
      id: 4,
      title: "Round-The-Clock Availability",
      description: "Humans are bound to work for limited hours and to an extent, but machines have the proficiency to work for long hours and even round the clock. From the business standpoint, AI and its applications provide your round-the-clock service assistance to meet manifold business requirements. The feature-rich applications for meeting customer experience, data analysis, and managing threats can be programmed to work twenty-four hours and provide substantial results ahead.",
      image: "/images/artificial-intelligence/integrated-intelligence/round-clock.webp",
      tabId: "pills-activity",
      tabTarget: "pills-activity"
    }
  ]

  return (
    <div className="database-technologies border-1 about5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <h2 className="text-anime-style-3">How Can Your Business Benefit From AI Technology?</h2>
              <p>The successful implementation of AI into your business can yield manifold benefits in a way to meet enterprise-level objectives and requirements at large.</p>
              <div className="space24"></div>
            </div>
          </div>
        </div>
        
        <div className="deep-learning-applications service2-section-area">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service-widgets-section">
                <div className="tab-content" id="pills-tabContent">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit.id}
                      className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} 
                      id={benefit.tabId} 
                      role="tabpanel" 
                      aria-labelledby={`${benefit.tabId}-tab`} 
                      tabIndex="0"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="service-boxarea">
                            <div className="space28"></div>
                            <div className="content-area">
                              <h3 data-aos="fade-left" data-aos-duration="800">{benefit.title}</h3>
                              <div className="space16"></div>
                              <p data-aos="fade-left" data-aos-duration="900">{benefit.description}</p>
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
                              <img src={benefit.image} alt="image" className="img-fluid" />
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
                    {benefits.map((benefit, index) => (
                      <li key={benefit.id} className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${index === 0 ? 'active' : ''}`} 
                          id={`${benefit.tabId}-tab`} 
                          data-bs-toggle="pill" 
                          data-bs-target={`#${benefit.tabId}`} 
                          type="button" 
                          role="tab" 
                          aria-controls={benefit.tabId} 
                          aria-selected={index === 0}
                        >
                          {benefit.title.split(' ').map((word, wordIndex) => (
                            wordIndex === benefit.title.split(' ').length - 1 ? (
                              <span key={wordIndex}>{word}</span>
                            ) : (
                              word + ' '
                            )
                          ))}
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
















































