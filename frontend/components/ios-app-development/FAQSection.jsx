'use client'

import { useEffect, useState } from 'react'

export default function FAQSection({ 
  title = "FAQs",
  subtitle = "Your questions answered. Find all the details you need",
  faqs = []
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !isClient) return;

    const initializeFAQ = () => {
      console.log('Initializing iOS FAQ section...');

      // Check if Bootstrap is available
      if (!window.bootstrap) {
        console.log('Bootstrap not available, retrying...');
        setTimeout(initializeFAQ, 500);
        return;
      }

      console.log('Bootstrap available:', !!window.bootstrap);

      // Check if document and required elements exist
      if (!document || !document.querySelector) {
        console.log('Document not ready, retrying...');
        setTimeout(initializeFAQ, 500);
        return;
      }

      // Wait for DOM to be ready
      if (window.$) {
        $(document).ready(() => {
          // Check if FAQ elements exist
          const faqWidgetArea = document.querySelector('.faq-widget-area');
          const accordionItems = document.querySelectorAll('.accordion-item');
          
          console.log('FAQ widget area found:', !!faqWidgetArea);
          console.log('Accordion items found:', accordionItems.length);

          // Initialize Bootstrap collapse functionality
          if (window.bootstrap && window.bootstrap.Collapse) {
            const collapseElements = document.querySelectorAll('.accordion-collapse');
            collapseElements.forEach((element) => {
              try {
                new window.bootstrap.Collapse(element, {
                  toggle: false
                });
              } catch (error) {
                console.error('Error initializing collapse for element:', error);
              }
            });
            console.log('Bootstrap collapse initialized for', collapseElements.length, 'elements');
          }
        });
      } else {
        // Fallback if jQuery is not available
        setTimeout(() => {
          if (window.bootstrap && window.bootstrap.Collapse) {
            const collapseElements = document.querySelectorAll('.accordion-collapse');
            collapseElements.forEach((element) => {
              try {
                new window.bootstrap.Collapse(element, {
                  toggle: false
                });
              } catch (error) {
                console.error('Error initializing collapse for element:', error);
              }
            });
            console.log('Bootstrap collapse initialized for', collapseElements.length, 'elements');
          }
        }, 100);
      }
    };

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeFAQ, 200);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [isClient]);

  return (
    <div className="faq5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>{title}</h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">{subtitle}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="faq-widget-area" style={{ display: 'block', minHeight: '400px' }}>
              <div className="row align-items-start">
                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionLeft">
                    {faqs && faqs.length > 0 ? faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                      <div key={index} className="accordion-item" data-aos="fade-up" data-aos-duration={800 + (index * 100)}>
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded="false" aria-controls={`collapse${index + 1}`}>
                            {faq.question}
                          </button>
                        </h2>
                        <div id={`collapse${index + 1}`} className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                            Loading FAQs...
                          </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionLeft">
                          <div className="accordion-body">
                            <p>Please wait while FAQs are loading...</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionRight">
                    {faqs && faqs.length > 0 ? faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                      <div key={index + Math.ceil(faqs.length / 2)} className="accordion-item" data-aos="fade-up" data-aos-duration={1100 + (index * 100)}>
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + Math.ceil(faqs.length / 2) + 1}`} aria-expanded="false" aria-controls={`collapse${index + Math.ceil(faqs.length / 2) + 1}`}>
                            {faq.question}
                          </button>
                        </h2>
                        <div id={`collapse${index + Math.ceil(faqs.length / 2) + 1}`} className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                          <div className="accordion-body">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Loading FAQs...
                          </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionRight">
                          <div className="accordion-body">
                            <p>Please wait while FAQs are loading...</p>
                          </div>
                        </div>
                      </div>
                    )}
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
