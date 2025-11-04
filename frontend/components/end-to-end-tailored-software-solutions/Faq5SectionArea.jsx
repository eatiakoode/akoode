import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What are end-to-end tailored software solutions?",
      answer: "End-to-end tailored software solutions are custom-built applications designed to address specific business needs from start to finish. They cover every stage of development—planning, design, coding, integration, deployment, and support—ensuring businesses get scalable, efficient, and future-ready solutions.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "How do tailored software solutions benefit my business?",
      answer: "Custom software aligns directly with your workflows, helping you improve efficiency, reduce manual processes, and enhance customer experiences. Unlike off-the-shelf products, tailored solutions are built around your goals, giving you flexibility, scalability, and long-term cost-effectiveness.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "Do you provide support after the software is deployed?",
      answer: "Yes. We offer ongoing maintenance and support services, including bug fixes, performance monitoring, security updates, and feature enhancements, ensuring your software stays reliable, secure, and aligned with evolving business needs.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Can end-to-end software solutions scale as my business grows?",
      answer: "Absolutely. Our solutions are designed with scalability in mind, allowing you to start small and expand as your requirements increase. Whether it's adding new features, handling higher traffic, or integrating advanced technologies, your software grows seamlessly with your business.",
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













