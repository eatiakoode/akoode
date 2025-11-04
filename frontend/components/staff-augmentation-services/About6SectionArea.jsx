import React from 'react'

export default function About6SectionArea() {
  const models = [
    {
      title: "IT Staff Augmentation:",
      description: "Temporarily hire technical staffing members to assist your existing team and meet project completion with ease."
    },
    {
      title: "IT Project Outsourcing:",
      description: "Trust in end-to-end development and deployment of your business software on our talented team of professionals."
    },
    {
      title: "Dedicated Team:",
      description: "Hire a team dedicated completely to your project and work as per your timeline to save your infrastructure cost & efforts."
    },
    {
      title: "Managed IT Services:",
      description: "For enterprises having non-IT staff, we provide managed IT sources to handle all the routine monitoring & maintenance."
    }
  ]

  return (
    <div className="about5-section-area bg-light sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="img1">
              <img src="/images/staff-augmentation/it-talent.webp" alt="image" className="about-img9 img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8">
              <h2 className="text-anime-style-3">Different IT Talent Outsourcing Models We Provide</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Not just staff augmentation, but we also provide additional recruitment models to meet your project requirements accordingly. Reach outsourcing model is different in its own terms.
              </p>
              <div className="space32"></div>
              <div className="custom-list">
                <ul>
                  {models.map((model, index) => (
                    <li key={index} className="color-black">
                      <strong>{model.title}</strong> {model.description}
                    </li>
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












