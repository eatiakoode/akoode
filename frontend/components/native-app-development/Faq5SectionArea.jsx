import React from 'react'

export default function Faq5SectionArea() {
  const faqs = [
    {
      id: 1,
      question: "What platforms can Akoode Technologies develop native apps for?",
      answer: "Akoode Technologies can create native apps for iOS, Android, and Windows platforms to deliver tailored experiences on devices like iPhones, iPads, Android smartphones and tablets as well as Windows desktops, laptops and Surface tablets.",
      target: "collapseOne",
      controls: "collapseOne"
    },
    {
      id: 2,
      question: "What programming languages and tools do you use for native app development?",
      answer: "For iOS app development, we primarily utilize Swift and Objective-C programming languages; while for Android app creation, Java and Kotlin programming languages are employed. Furthermore, each platform requires its own set of development tools and SDKs that are tailored specifically for it.",
      target: "collapseTwo",
      controls: "collapseTwo"
    },
    {
      id: 3,
      question: "How do you ensure that the app is optimized for performance and user experience?",
      answer: "At our company, we take a comprehensive app development process that involves user research, prototyping and testing to guarantee the app's performance and user experience is optimized. Furthermore, we utilize industry-standard app development tools and techniques for maximum efficiency.",
      target: "collapseThree",
      controls: "collapseThree"
    },
    {
      id: 4,
      question: "Can Akoode Technologies help with the app submission and approval process for app stores?",
      answer: "Yes, we can assist with the app submission and approval process for both Apple App Store and Google Play Store. With our extensive knowledge of these stores, we guarantee your app meets their guidelines and requirements.",
      target: "collapseFour",
      controls: "collapseFour"
    },
    {
      id: 5,
      question: "Do you handle app maintenance and updates after launch?",
      answer: "We provide ongoing app maintenance and support services to guarantee your app remains up-to-date and running optimally. This includes bug fixes, updates to address changes in the platform, as well as regular performance optimization.",
      target: "collapseFive",
      controls: "collapseFive"
    },
    {
      id: 6,
      question: "Can you provide examples of native apps you've developed in the past?",
      answer: "Yes, we have created a variety of native apps for clients across numerous industries. Please visit our portfolio on our website to view examples of our work.",
      target: "collapseSix",
      controls: "collapseSix"
    },
    {
      id: 7,
      question: "How long does it typically take to develop a native app?",
      answer: "The timeline for native app development can vary based on the scope and complexity of the project. We typically provide an estimated timeline at the start, then work closely with our clients to meet their deadlines.",
      target: "collapseSeven",
      controls: "collapseSeven"
    },
    {
      id: 8,
      question: "What is the pricing structure for Akoode Technologies's native app development services?",
      answer: "Our pricing structure is customized according to the scope and complexity of each project. At the start, we provide a detailed proposal and estimate that includes all costs and fees associated with development.",
      target: "collapseEight",
      controls: "collapseEight"
    },
    {
      id: 9,
      question: "What is your process for testing and quality assurance before launch?",
      answer: "At Akoode, we conduct a rigorous testing and quality assurance process to guarantee the app functions optimally and meets the highest standards. This includes both manual and automated tests, as well as checks on various devices and platforms to guarantee compatibility.",
      target: "collapseNine",
      controls: "collapseNine"
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
                    {faqs.slice(0, 5).map((faq, index) => (
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
                    {faqs.slice(5, 9).map((faq, index) => (
                      <div key={faq.id} className="accordion-item" data-aos="fade-up" data-aos-duration="1300">
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
                        <div id={faq.target} className="accordion-collapse collapse" data-bs-parent="#accordionRight">
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













