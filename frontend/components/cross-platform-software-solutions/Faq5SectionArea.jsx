import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What are cross-platform software solutions?",
      answer: "Cross-platform software solutions are applications designed to run on multiple operating systems and devices with a single codebase, providing consistent functionality, performance, and user experience across platforms.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "Why should businesses choose cross-platform development?",
      answer: "Cross-platform development reduces development time and costs, enables faster deployment, ensures consistent user experience, and allows businesses to reach a wider audience across devices and operating systems.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "Which frameworks are commonly used for cross-platform development?",
      answer: "Popular frameworks include React Native, Flutter, Xamarin, and Ionic. These frameworks allow developers to write code once and deploy it across multiple platforms, maintaining native-like performance and user experience.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Do you provide post-deployment support for cross-platform apps?",
      answer: "Yes, we offer ongoing support and maintenance, including bug fixes, performance optimization, security updates, and feature enhancements to ensure applications remain reliable, scalable, and high-performing across all platforms.",
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













