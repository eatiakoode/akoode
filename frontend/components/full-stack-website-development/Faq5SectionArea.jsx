import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: "collapseOne",
      question: "Q1. How long does it take to develop a custom website?",
      answer: "The timeline for developing an individual website varies based on its complexity and requirements. We collaborate closely with our clients in order to set an achievable timeline that guarantees timely delivery of their project."
    },
    {
      id: "collapseTwo", 
      question: "Q2. Can you incorporate existing branding into the custom website design?",
      answer: "Absolutely! Our designers will collaborate closely with you to guarantee that your existing branding is seamlessly incorporated into the customized website design."
    },
    {
      id: "collapseThree",
      question: "Q3. What AI-driven features can you incorporate into my custom website?",
      answer: "We offer a range of AI-driven capabilities, such as chatbots, personalized recommendations and predictive analytics to create an engaging and interactive user experience."
    },
    {
      id: "collapseFour",
      question: "Q4. Do you provide ongoing support and maintenance for custom websites?",
      answer: "Yes, we offer comprehensive support and maintenance services to ensure your website remains up-to-date, secure, and functioning optimally long after the initial development phase."
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
                Custom Website Development Services questions answered. Find all the details you need
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













