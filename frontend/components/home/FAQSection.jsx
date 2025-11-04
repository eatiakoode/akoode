import { useEffect } from 'react'

export default function FAQSection({ faqlist = [] }) {
  const safeFaqlist = Array.isArray(faqlist) ? faqlist : [];
  useEffect(() => {
    const initializeFAQ = () => {
      console.log('Initializing FAQ section...');

      // Check if Bootstrap is available
      if (typeof window === 'undefined' || !window.bootstrap) {
        console.log('Bootstrap not available, retrying...');
        setTimeout(initializeFAQ, 500);
        return;
      }

      console.log('Bootstrap available:', !!window.bootstrap);

      // Wait for DOM to be ready
      if (typeof window !== 'undefined' && window.$) {
        $(document).ready(() => {
          // Check if FAQ elements exist
          const faqWidgetArea = document.querySelector('.faq-widget-area');
          const accordionItems = document.querySelectorAll('.accordion-item');
          
          console.log('FAQ widget area found:', !!faqWidgetArea);
          console.log('Accordion items found:', accordionItems.length);

          if (faqWidgetArea) {
            // Add visible styling to ensure the section is displayed
            faqWidgetArea.style.display = 'block';
            faqWidgetArea.style.minHeight = '400px';
            console.log('FAQ widget area made visible');
          }

          // Initialize Bootstrap collapse functionality
          if (window.bootstrap && window.bootstrap.Collapse) {
            const collapseElements = document.querySelectorAll('.accordion-collapse');
            collapseElements.forEach((element) => {
              new window.bootstrap.Collapse(element, {
                toggle: false
              });
            });
            console.log('Bootstrap collapse initialized for', collapseElements.length, 'elements');
          }
        });
      }
    };

    // Start initialization
    initializeFAQ();

    // Cleanup function
    return () => {
      // No specific cleanup needed for Bootstrap collapse
    };
  }, []);

  return (
    <div className="faq5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>FAQs</h5>
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
                  {safeFaqlist.length > 0 ? (
          safeFaqlist.slice(0, 6).map((item, index) => {
            // Add safety checks for each item
            if (!item) return null;
            
            return (
                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="800" key={index}>
                      <h2 className="accordion-header">
                      <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseOne${index}`}
                          aria-expanded="false"
                          aria-controls={`collapseOne${index}`}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={`collapseOne${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    );
                    })
                    ) : (
                    // Fallback content when no blogs are available
                    <div className="col-lg-12">
                      <div className="text-center">
                        <p>No FAQs available at the moment.</p>
                      </div>
                    </div>
                    )}
                    {/* <div className="accordion-item" data-aos="fade-up" data-aos-duration="900">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How does Akoode Technology approach project development?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                        <div className="accordion-body">
                          <p>We follow an agile methodology to ensure flexibility and collaboration throughout
                            the project lifecycle. This includes understanding client requirements, creating prototypes,
                            iterative development, rigorous testing, and seamless deployment.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What industries does Akoode Technology specialize in?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                        <div className="accordion-body">
                          <p>We work across various industries, including healthcare, finance, retail,
                            manufacturing, education, logistics, real estate, energy, media, and e-commerce. Our
                            solutions are tailored to meet the specific needs of each sector.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1100">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          How does Akoode Technology ensure data security in its solutions?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                        <div className="accordion-body">
                          <p>We prioritize data security by implementing robust encryption protocols, adhering
                            to compliance standards (e.g., GDPR, HIPAA), and conducting regular security audits to
                            safeguard sensitive information.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          What technologies does Akoode Technology use?
                        </button>
                      </h2>
                      <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                        <div className="accordion-body">
                          <p>We use cutting-edge technologies such as AI (TensorFlow, PyTorch), Blockchain
                            (Ethereum, Hyperledger), IoT (AWS IoT, Raspberry Pi), and modern frameworks like React,
                            Node.js, Flutter, and Kubernetes for scalable and future-proof solutions.</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionRight">
                  {safeFaqlist.length > 0 ? (
          safeFaqlist.slice(6, 12).map((item, index) => {
            // Add safety checks for each item
            if (!item) return null;
            
            return (
                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                          Can Akoode Technology scale its services for enterprise-level projects?
                        </button>
                      </h2>
                      <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                        <div className="accordion-body">
                          <p>Absolutely! Our expertise in cloud computing, microservices, and scalable
                            architectures allows us to handle projects of any size, from startups to large enterprises.</p>
                        </div>
                      </div>
                    </div>
                    );
                  })
                  ) : (
                  // Fallback content when no blogs are available
                  <div className="col-lg-12">
                    <div className="text-center">
                      <p>No FAQs available at the moment.</p>
                    </div>
                  </div>
                  )}

                    {/* <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                          Does Akoode Technology offer support and maintenance after project delivery?
                        </button>
                      </h2>
                      <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                        <div className="accordion-body">
                          <p>Yes, we provide comprehensive post-launch support and maintenance, ensuring your
                            solution remains updated, secure, and optimized for performance.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                          How long does it take to complete a typical project?
                        </button>
                      </h2>
                      <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                        <div className="accordion-body">
                          <p>Project timelines depend on complexity and scope. Smaller projects may take 2-3
                            months, while larger, more complex solutions could take 6-12 months. We provide detailed
                            timelines during the initial consultation phase.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                          How does Akoode Technology ensure the quality of its solutions?
                        </button>
                      </h2>
                      <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                        <div className="accordion-body">
                          <p>We have a robust quality assurance process that includes automated and manual
                            testing, code reviews, and performance optimization to ensure all deliverables meet the
                            highest standards.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" data-aos="fade-up" data-aos-duration="1200">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                          How can I get started with Akoode Technology?
                        </button>
                      </h2>
                      <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                        <div className="accordion-body">
                          <p>Getting started is easy! Contact us through our website, request a free
                            consultation, or email our team directly. We'll assess your needs and propose a tailored
                            solution for your business.</p>
                        </div>
                      </div>
                    </div> */}
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
