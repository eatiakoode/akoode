import React from 'react'

export default function DatabaseTechnologies() {
  const solutions = [
    {
      id: 1,
      title: "Content Generation",
      description: "Our AI-powered content generation solutions can create engaging articles, blog posts, social media updates, and more, saving you time and resources."
    },
    {
      id: 2,
      title: "Design Generation",
      description: "With our design generation solutions, your business can create stunning visuals, graphics, and product designs without the need for a dedicated design team."
    },
    {
      id: 3,
      title: "Data Synthesis",
      description: "Our data synthesis solutions can generate large volumes of realistic synthetic data to enhance your machine learning models and improve decision-making."
    },
    {
      id: 4,
      title: "Customized AI Solutions",
      description: "We understand that every business has unique requirements, and our team of experts can develop customized Generative AI solutions to address your specific needs."
    }
  ]

  const whyChooseUs = [
    {
      id: 1,
      title: "Expertise",
      description: "Our team comprises highly skilled professionals with deep expertise in Generative AI and machine learning technologies."
    },
    {
      id: 2,
      title: "Innovation",
      description: "We stay at the forefront of AI advancements, enabling us to provide the most innovative and cutting-edge solutions to our clients."
    },
    {
      id: 3,
      title: "Customer Focus",
      description: "We prioritize your business goals and requirements, ensuring that our Generative AI solutions deliver exceptional results."
    },
    {
      id: 4,
      title: "Support",
      description: "Our dedicated support team is available to assist you every step of the way, from integration to ongoing maintenance."
    }
  ]

  return (
    <div className="database-technologies border-1 about5-section-area sp1">
      <div className="container">
        <div className="deep-learning-applications service2-section-area">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="service-widgets-section">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="service-boxarea">
                          <div className="space28"></div>
                          <div className="content-area">
                            <h3 data-aos="fade-left" data-aos-duration="800">Our Generative AI Solutions</h3>
                            <div className="space16"></div>
                            <p className="mb-4" data-aos="fade-left" data-aos-duration="900">
                              As the leading Generative AI Company in Gurgaon, India, Akoode Technologies, we offer a comprehensive range of Generative AI solutions tailored to your unique business needs:
                            </p>
                            {solutions.map((solution, index) => (
                              <div key={solution.id} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                                <div className="content-area">
                                  <a href="#">{solution.title}:</a>
                                  <p>{solution.description}</p>
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
                            <img src="/images/artificial-intelligence/generative-ai/generative-ai-solutions.webp" alt="image" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="service-boxarea">
                          <div className="space28"></div>
                          <div className="content-area">
                            <h3 data-aos="fade-left" data-aos-duration="800">Why Choose Akoode Technologies?</h3>
                            <div className="space16"></div>
                            <p className="mb-4" data-aos="fade-left" data-aos-duration="900">
                              When you partner with Akoode Technologies, you are choosing the best Generative AI solution provider in India:
                            </p>
                            {whyChooseUs.map((item, index) => (
                              <div key={item.id} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                                <div className="content-area">
                                  <a href="#">{item.title}:</a>
                                  <p>{item.description}</p>
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
                            <img src="/images/artificial-intelligence/generative-ai/akoode-tech.webp" alt="image" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space80"></div>
                <div className="tabs-btn-area">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button 
                        className="nav-link active" 
                        id="pills-home-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-home" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-home" 
                        aria-selected="true"
                      >
                        Our Generative AI <span>Solutions</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button 
                        className="nav-link" 
                        id="pills-profile-tab" 
                        data-bs-toggle="pill" 
                        data-bs-target="#pills-profile" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-profile" 
                        aria-selected="false"
                      >
                        Why Choose Akoode <span>Technologies?</span>
                      </button>
                    </li>
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













