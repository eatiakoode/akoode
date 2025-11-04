import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: "collapseOne",
      question: "Q1. Which AI technologies do you utilize?",
      answer: "We utilize a range of AI techniques, such as machine learning, natural language processing, computer vision and deep learning to create cutting-edge AI-powered websites."
    },
    {
      id: "collapseTwo", 
      question: "Q2. Can you upgrade an existing website with AI features?",
      answer: "Absolutely, our team can assess your current website and suggest the most effective approach for integrating AI elements, providing a smooth transition towards a more advanced, engaging platform."
    },
    {
      id: "collapseThree",
      question: "Q3. How long does it take to develop an AI-powered website?",
      answer: "The timeline for developing an AI-powered website varies based on its complexity and requirements. We work closely with our clients to establish a precise timeline and guarantee timely delivery of their project."
    },
    {
      id: "collapseFour",
      question: "Q4. Do you offer ongoing support and maintenance for AI-powered websites?",
      answer: "Absolutely, we offer our ongoing support and maintenance services to guarantee your AI website remains up-to-date and running optimally."
    }
  ]

  return (
    <div className="faq5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5>
                <span><img src="/images/sub-logo1.svg" alt="" /></span>FAQs
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">
                AI-Powered Website Development Services questions answered. Find all the details you need
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













