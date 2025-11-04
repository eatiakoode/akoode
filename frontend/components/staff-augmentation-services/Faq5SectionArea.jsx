import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: "collapseOne",
      question: "Q1. What is IT staff augmentation?",
      answer: "IT staff augmentation is a flexible hiring model where you temporarily hire skilled technical professionals to supplement your existing team. It helps you scale up or down based on project requirements without the overhead of permanent hiring."
    },
    {
      id: "collapseTwo",
      question: "Q2. How quickly can you provide staff augmentation services?",
      answer: "We can provide qualified technical professionals within 1-2 weeks depending on the specific requirements and skill sets needed. Our streamlined recruitment process ensures fast deployment of the right talent."
    },
    {
      id: "collapseThree", 
      question: "Q3. What types of IT professionals can you provide?",
      answer: "We provide a wide range of IT professionals including developers, designers, testers, business analysts, DevOps engineers, project managers, and other technical specialists across various technologies and frameworks."
    },
    {
      id: "collapseFour",
      question: "Q4. Do you provide both on-site and remote staff augmentation?",
      answer: "Yes, we offer both on-site and remote staff augmentation services. Our professionals can work from your office location or remotely, depending on your project requirements and preferences."
    }
  ]

  return (
    <div className="faq5-section-area border-1 sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5>
                <span><img src="/images/sub-logo1.svg" alt="" /></span>FAQs
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">
                IT Staff Augmentation Services questions answered. Find all the details you need
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="faq-widget-area">
              <div className="row align-items-start">
                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionLeft">
                    {faqs.slice(0, 2).map((faq, index) => (
                      <div key={faq.id} className="accordion-item" data-aos="fade-up" data-aos-duration={`${800 + (index * 100)}`}>
                        <h2 className="accordion-header">
                          <button 
                            className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse" 
                            data-bs-target={`#${faq.id}`}
                            aria-expanded="false" 
                            aria-controls={faq.id}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div 
                          id={faq.id} 
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionLeft"
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionRight">
                    {faqs.slice(2, 4).map((faq, index) => (
                      <div key={faq.id} className="accordion-item" data-aos="fade-up" data-aos-duration={`${1000 + (index * 100)}`}>
                        <h2 className="accordion-header">
                          <button 
                            className="accordion-button collapsed" 
                            type="button"
                            data-bs-toggle="collapse" 
                            data-bs-target={`#${faq.id}`}
                            aria-expanded="false" 
                            aria-controls={faq.id}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div 
                          id={faq.id} 
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionLeft"
                        >
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}












