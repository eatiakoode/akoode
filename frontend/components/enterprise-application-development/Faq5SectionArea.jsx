import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What is enterprise application development?",
      answer: "Enterprise application development is the process of designing, building, and maintaining large-scale, business-critical software systems tailored to an organization's needs. These applications support complex workflows, integrate with existing systems, and help businesses improve efficiency, collaboration, and decision-making.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "How is enterprise application development different from regular software development?",
      answer: "Unlike regular software development, enterprise application development focuses on scalability, security, and integration with multiple business systems such as ERP, CRM, and HRMS. It addresses the specific requirements of medium to large organizations by ensuring reliability, handling large data volumes, and providing long-term adaptability.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "What technologies do you use for enterprise application development?",
      answer: "We use a wide range of modern technologies including Java, .NET, Node.js, Angular, React, Python, and cloud platforms like AWS, Azure, and Google Cloud. The choice of technology stack depends on your business requirements, scalability goals, and integration needs.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance after development?",
      answer: "Yes, we offer comprehensive post-development support and maintenance services. This includes bug fixing, performance optimization, security updates, feature enhancements, and proactive monitoring to ensure your enterprise applications run smoothly and adapt to evolving business needs.",
      target: "collapseFour",
      controls: "collapseFour"
    }
  ]

  return (
    <div className="faq5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="" />
                </span>
                FAQs
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Your questions answered. Find all the details you need</h2>
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
                            data-bs-target={`#${faq.target}`} 
                            aria-expanded="false" 
                            aria-controls={faq.controls}
                          >
                            Q{faq.id}. {faq.question}
                          </button>
                        </h2>
                        <div id={faq.target} className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
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
                            data-bs-target={`#${faq.target}`} 
                            aria-expanded="false" 
                            aria-controls={faq.controls}
                          >
                            Q{faq.id}. {faq.question}
                          </button>
                        </h2>
                        <div id={faq.target} className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
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













