import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What is MVP development for startups?",
      answer: "MVP (Minimum Viable Product) development involves creating a basic version of a product with only core features. It allows startups to test their idea in the market, gather user feedback, validate assumptions, and make data-driven decisions before investing in full-scale development.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "Why is MVP important for startups?",
      answer: "An MVP helps startups minimize risks, reduce development costs, and launch quickly. By testing the market early, startups can understand user needs, identify potential improvements, and ensure that the final product meets customer expectations while saving time and resources.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "How long does it take to develop an MVP?",
      answer: "The timeline for MVP development depends on the complexity of the idea, features required, and technology stack. Typically, an MVP can be developed in 4–12 weeks, allowing startups to validate their concept quickly and start gathering real user feedback.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Do you provide post-launch support for MVPs?",
      answer: "Yes, we offer continuous support and iteration after MVP launch. Our services include bug fixes, performance optimization, feature enhancements, and user feedback analysis to refine the product, ensure stability, and prepare it for full-scale development and market expansion.",
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













