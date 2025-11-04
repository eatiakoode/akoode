import React from 'react'

export default function About6SectionArea() {
  const advantages = [
    {
      title: "Personalized User Experience:",
      description: "AI can analyze user behavior and preferences to deliver tailored content, increasing engagement and user satisfaction."
    },
    {
      title: "Automated Customer Support:",
      description: "AI-powered chatbots can answer customer inquiries and offer 24/7 support, improving customer service while freeing your staff to focus on other tasks."
    },
    {
      title: "Data-Driven Insights:",
      description: "AI technologies can analyze large amounts of data to provide actionable insights that allow you to make informed decisions about your website and business strategy."
    },
    {
      title: "Increased Efficiency:",
      description: "AI-powered tools can automate repetitive tasks like content generation and image optimization, leading to a more efficient development process."
    }
  ]

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">AI-powered website development offers numerous advantages, such as:</h2>
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
                <img src="/images/frontend-tech/front-end-tech.webp" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}













