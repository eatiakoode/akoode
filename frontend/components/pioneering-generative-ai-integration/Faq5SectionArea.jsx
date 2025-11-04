import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What industries can benefit from Generative AI?",
      answer: "Generative AI can benefit a wide range of industries, including retail, healthcare, finance, manufacturing, marketing, and many more. Its versatility enables businesses across sectors to leverage its power for improved productivity, innovation, and customer experience.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "How secure is my data with Akoode Technologies?",
      answer: "At Akoode Technologies, we take data security very seriously. We employ industry-standard security measures and best practices to ensure the confidentiality, integrity, and availability of your data.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "How long does it take to implement Generative AI solutions?",
      answer: "The implementation timeline varies depending on the complexity of the project and your specific requirements. Our team will work closely with you to develop a realistic timeline and ensure a smooth and efficient integration process.",
      target: "collapseThree",
      controls: "collapseThree"
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
                    {faqs.slice(2, 3).map((faq, index) => (
                      <div key={faq.id} className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
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













