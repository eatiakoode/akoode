import React from 'react';
export default function VisionMissionSection() {
  return (
    <>
      <div className="service2-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="service-header text-center heading4 space-margin60">
                <div className="space20"></div>
                <h2 className="text-anime-style-3">Our Vision & Mission</h2>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Vision Section */}
            <div className="col-lg-6 m-auto">
              <div className="service-widgets-section">
                <div className="service-boxarea">
                  <div className="content-area">
                    <div className="space16"></div>
                    <h4 className="text-left" data-aos="fade-left" data-aos-duration="900">
                      Our Vision
                    </h4>
                    <div className="space28"></div>
                    <div className="custom-list">
                      <ul>
                        <li>
                          To be recognized as a <strong>global leader in technology innovation,</strong> creating
                          solutions that <strong>empower people, strengthen businesses, and inspire trust.</strong>
                        </li>
                        <li>
                          We envision a future where technology is seamlessly integrated into daily life — helping
                          businesses grow, enabling individuals to achieve more, and ensuring innovation remains
                          <strong> accessible to all.</strong>
                        </li>
                        <li>Our vision is to make technology simpler, smarter, and more human — for everyone.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="col-lg-6 m-auto">
              <div className="service-widgets-section">
                <div className="service-boxarea">
                  <div className="content-area">
                    <div className="space16"></div>
                    <h4 className="text-left" data-aos="fade-left" data-aos-duration="900">
                      Our Mission
                    </h4>
                    <div className="space28"></div>
                    <div className="custom-list">
                      <ul>
                        <li>
                          To develop <strong>human-centered, intelligent technologies</strong> that drive growth and
                          create real-world impact.
                        </li>
                        <li>
                          To <strong>make innovation affordable and accessible,</strong> helping startups and enterprises
                          alike embrace the power of digital transformation.
                        </li>
                        <li>
                          To <strong>invest in research and emerging technologies</strong> that improve lives and
                          redefine industries.
                        </li>
                        <li>
                          To <strong>empower people through technology and opportunity,</strong> enabling sustainable
                          growth and development.
                        </li>
                        <li>
                          To <strong>deliver meaningful value</strong> through trust, quality, and innovation in
                          everything we do.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Section */}
          <div className="dark-bg aboutus-highlight mt-5">
            <h5>
              At Akoode Technologies, our mission goes beyond delivering software —
              <span>
                We're here to shape the future, empower people, and make technology work for humanity.
              </span>
            </h5>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 clients-content">
              <h2 className="text-anime-style-3">Our Key Clients</h2>
              <p>
                We provide high-quality technology solutions for businesses of all sizes — from new startups to growing
                companies.
              </p>
            </div>

            {/* Right Column */}
            <div className="col-lg-8">
              <div className="clients-logos">
                <img src="/images/clients/dapper-doughnut.png" alt="image" className="img-fluid" />
                <img src="/images/clients/toni-guy.png" alt="image" className="img-fluid" />
                <img src="/images/clients/IGT_Logo.png" alt="image" className="img-fluid" />
                <img src="/images/clients/lexis.png" alt="image" className="img-fluid" />
                <img src="/images/clients/mullen.png" alt="image" className="img-fluid" />
                <img src="/images/clients/okinawa-scooters.png" alt="image" className="img-fluid" />
                <img src="/images/clients/patton.png" alt="image" className="img-fluid" />
                <img src="/images/clients/sarita-handa.png" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Logos */}
            <div className="col-lg-8">
              <div className="awards-logos">
                <div>
                  <img src="images/clients/clutch.webp" alt="image" className="img-fluid" />
                  <img src="images/clients/good-firms.webp" alt="image" className="img-fluid" />
                </div>
                <div>
                  <img src="images/feature/fox-news-logo.webp" alt="image" className="img-fluid" />
                  <img src="images/feature/outlook.webp" alt="image" className="img-fluid" />
                  <img src="images/feature/business-standard-logo.webp" alt="image" className="img-fluid" />
                  <img src="images/feature/entrepreneur-award-logo.webp" alt="image" className="img-fluid" />
                  <img src="images/feature/zee-business.svg" alt="image" className="img-fluid" />
                  <img src="images/feature/hindustan-times.webp" alt="image" className="img-fluid" />
                  <img src="images/feature/toi.webp" alt="image" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-4 awards-content">
              <h2 className="text-anime-style-3">Awards & Recognitions</h2>
              <p>
                In the last 20 years, we have been acknowledged by prestigious organizations and awarded for our
                innovative work, commitment, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
