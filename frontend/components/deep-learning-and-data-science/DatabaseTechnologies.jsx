import React from 'react'

export default function DatabaseTechnologies() {
  const applications = [
    {
      id: 1,
      title: "Natural Language Processing",
      description: "One of the essential virtues of deep learning technology is Natural Language Processing (NLP). This application helps identify the patterns and hidden meanings from the extensively collected data. Deep learning algorithms help expose the data, try to uncover the meaning and understand the natural language to undertake actionable decisions. The system with NLP virtues integrated further help recognize speech, written, and other audible information to generate automated queries, better response, and summarize information in a user-friendly manner.",
      image: "/images/artificial-intelligence/deep-learning/nlp.webp",
      tabId: "pills-home",
      tabTarget: "pills-home"
    },
    {
      id: 2,
      title: "Image Recognition & Classification",
      description: "Image recognition is another useful application of business-specific deep learning solutions. With the help of this application, deep learning algorithms identify image-related patterns, hidden meanings, characteristics, and other information before performing a specific task. With image recognition, identify the nature of posted images on social media platforms, blogs, and other platforms to understand appropriate or not. Moreover, it further helps businesses to take strategic image posting and retrieval decisions for obtaining an expected set of results.",
      image: "/images/artificial-intelligence/deep-learning/image-recognition.webp",
      tabId: "pills-profile",
      tabTarget: "pills-profile"
    },
    {
      id: 3,
      title: "Virtual Assistants",
      description: "The intelligently driven and widely available virtual assistant features equipped with applications like Google Assistant, Bixby, Siri, and more have dominated the entire marketplace. Develop such handy applications for businesses to better understand users' speech, intention, and commands to perform specific actions instantly. This particular application helps customers to receive much-required recommendations and lay trust in your business.",
      image: "/images/artificial-intelligence/deep-learning/virtual-assistant.webp",
      tabId: "pills-contact",
      tabTarget: "pills-contact"
    },
    {
      id: 4,
      title: "Customer Activity Analysis",
      description: "As the name itself implies, customer activity analysis is an imperative deep learning application for your enterprise to provide personalized recommendations to customers. Based on past customer-specific activity, the application analysis the purchasing and behavioral patterns to understand more about customers and better serve them in the future. It has the potential to boost the customer service experience and enhance the retention factor to an optimum extent.",
      image: "/images/artificial-intelligence/deep-learning/customer-activity-analysis.webp",
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
              <h2 className="text-anime-style-3">Deep Learning Applications Across Industries</h2>
              <div className="space24"></div>
            </div>
          </div>
        </div>
        
        <div className="deep-learning-applications service2-section-area">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service-widgets-section">
                <div className="tab-content" id="pills-tabContent">
                  {applications.map((app, index) => (
                    <div 
                      key={app.id}
                      className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} 
                      id={app.tabId} 
                      role="tabpanel" 
                      aria-labelledby={`${app.tabId}-tab`} 
                      tabIndex="0"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="service-boxarea">
                            <div className="space28"></div>
                            <div className="content-area">
                              <h3 data-aos="fade-left" data-aos-duration="800">{app.title}</h3>
                              <div className="space16"></div>
                              <p data-aos="fade-left" data-aos-duration="900">{app.description}</p>
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
                              <img src={app.image} alt="image" className="img-fluid" />
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
                    {applications.map((app, index) => (
                      <li key={app.id} className="nav-item" role="presentation">
                        <button 
                          className={`nav-link ${index === 0 ? 'active' : ''}`} 
                          id={`${app.tabId}-tab`} 
                          data-bs-toggle="pill" 
                          data-bs-target={`#${app.tabId}`} 
                          type="button" 
                          role="tab" 
                          aria-controls={app.tabId} 
                          aria-selected={index === 0}
                        >
                          {app.title.split(' ').map((word, wordIndex) => (
                            wordIndex === app.title.split(' ').length - 1 ? (
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


