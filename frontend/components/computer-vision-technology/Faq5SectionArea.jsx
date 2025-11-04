import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What industries do you serve?",
      answer: "At Akoode Technologies, we serve clients across various industries, including healthcare, finance, retail, manufacturing, and more.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "Can you customize your Integrated Intelligence solutions to fit my specific business needs?",
      answer: "Absolutely! We believe in providing tailor-made solutions to address your unique business challenges and requirements.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "How do you ensure the security and privacy of my data?",
      answer: "We take data security and privacy very seriously. Our team follows strict protocols and adheres to industry-best practices to ensure your data is protected at all times.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "What is the typical turnaround time for a project?",
      answer: "The turnaround time depends on the complexity and scope of the project. We'll work closely with you to establish a timeline that meets your needs and ensures high-quality results.",
      target: "collapseFour",
      controls: "collapseFour"
    }
  ]

  return (
    <div className="faq5-section-area border-1 sp1">
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













