export default function FAQSection() {
  return (
    <div className="faq5-section-area border-1 sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="faq-header text-center heading2 space-margin60">
              <h5>
                <span>
                  <img src="images/sub-logo1.svg" alt="" />
                </span>
                FAQs
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">
                Your questions answered. Find all the details you need
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
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Q1. What is digital transformation?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Digital transformation is the integration of digital
                            technologies into all areas of a business to improve
                            operations, enhance customer experiences, and drive
                            growth. It’s not just about technology but also about
                            reimagining processes, culture, and business models
                            to stay competitive in the digital era.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Q2. Why is digital transformation important for
                          businesses?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionLeft"
                      >
                        <div className="accordion-body">
                          <p>
                            Digital transformation helps businesses stay agile,
                            competitive, and customer-focused. It enables faster
                            decision-making, reduces costs through automation,
                            strengthens security, and creates new revenue
                            opportunities. In today’s digital-first world,
                            companies that transform can adapt quickly to market
                            changes and deliver superior customer value.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-xl-6 col-lg-6">
                  <div className="accordion" id="accordionRight">
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Q3. Which technologies are part of digital
                          transformation?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            Digital transformation typically involves cloud
                            computing, artificial intelligence (AI), data
                            analytics, robotic process automation (RPA),
                            Internet of Things (IoT), and advanced cybersecurity.
                            The right mix depends on business goals, industry
                            needs, and scalability requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-duration="1100"
                    >
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Q4. How long does a digital transformation process
                          take?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionRight"
                      >
                        <div className="accordion-body">
                          <p>
                            The timeline varies depending on the size of the
                            organization and the scope of the transformation.
                            While some improvements can be implemented in a few
                            months, full-scale digital transformation may take
                            1–3 years. It’s an ongoing journey of continuous
                            adaptation and innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
