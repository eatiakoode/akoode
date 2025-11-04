import React from 'react';

export default function EnterpriseSolutionSection() {
  return (
    <section id="es" className="p-5 bg-light">
      <div className="service1-section-area sp2">
        <div className="container-fluid">
          <div className="service-header text-center heading2">
            <h2 className="text-anime-style-3 space-margin30">Enterprise Solution</h2>
          </div>
          <div className="service-widget-inner">
            <div className="service-slider-boxarea">
              <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="800">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src="/images/custom-soft-dev/expertise.svg" alt="image" className="img-fluid" />
                    </div>
                    <div className="space24"></div>
                    <a href="javascript:void(0)">Proven Expertise</a>
                    <div className="space16"></div>
                    <p>Our team of experienced developers and designers has extensive knowledge in enterprise software development, ensuring that your solution is built with industry best practices and cutting-edge technologies.</p>
                    <div className="space24"></div>
                    <h5>01</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="900">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src="/images/custom-soft-dev/comprehensive-service.svg" alt="image" className="img-fluid" />
                    </div>
                    <div className="space24"></div>
                    <a href="javascript:void(0)">Comprehensive Service</a>
                    <div className="space16"></div>
                    <p>We provide end-to-end enterprise solutions including consultation, design, development, testing, deployment, and ongoing maintenance to ensure your software meets all your business requirements.</p>
                    <div className="space24"></div>
                    <h5>02</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src="/images/custom-soft-dev/quality.svg" alt="image" className="img-fluid" />
                    </div>
                    <div className="space24"></div>
                    <a href="javascript:void(0)">Quality Assurance</a>
                    <div className="space16"></div>
                    <p>Our rigorous testing and quality assurance processes ensure that your enterprise software is reliable, secure, and performs optimally under various conditions and user loads.</p>
                    <div className="space24"></div>
                    <h5>03</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
