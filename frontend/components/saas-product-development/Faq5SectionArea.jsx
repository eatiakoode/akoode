import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What is SaaS product development?",
      answer: "SaaS product development is the process of designing, building, and deploying cloud-based software that users can access via the internet. These applications are scalable, subscription-based, and designed to streamline business operations, improve collaboration, and deliver value to customers without the need for local installation.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "How is SaaS different from traditional software?",
      answer: "Unlike traditional software that requires local installation and maintenance, SaaS applications are hosted on the cloud and delivered via subscription. They offer real-time updates, multi-tenant architecture, and seamless scalability, allowing businesses to reduce infrastructure costs, improve accessibility, and quickly adapt to changing market needs.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "What technologies are used in SaaS product development?",
      answer: "SaaS development involves modern technologies like Node.js, Java, .NET, Python, React, Angular, and cloud platforms such as AWS, Azure, or Google Cloud. Databases, APIs, and microservices architecture are commonly used to ensure scalability, reliability, security, and seamless integration with third-party tools.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Do you provide post-deployment support for SaaS products?",
      answer: "Yes, we offer comprehensive post-deployment support including monitoring, maintenance, bug fixes, security updates, and feature enhancements. Our team ensures that your SaaS product remains secure, performs optimally, and adapts to evolving business and user requirements for long-term success.",
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













