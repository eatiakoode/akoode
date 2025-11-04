import React from 'react'

export default function ContactInnerArea() {
  return (
    <div className="contact-inner-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="heading2 text-center">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="" />
                </span>
                Have Questions? Reach Out!
              </h5>
              <div className="space20"></div>
              <h2>Let's Discuss Your IT Needs</h2>
            </div>
            <div className="space40"></div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="widget-contactbox">
                  <div className="icons">
                    <img src="/images/email-white.svg" alt="images" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>Our Email</h4>
                    <a href="mailto:info@akoode.com">info@akoode.com</a>
                  </div>
                </div>
                <div className="space30 d-lg-none d-block"></div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="widget-contactbox">
                  <div className="icons">
                    <img src="/images/phone.svg" alt="images" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>Phone</h4>
                    <a href="tel:+919899300017">+91-9899300017</a>
                  </div>
                </div>
                <div className="space30 d-lg-none d-block"></div>
              </div>
            </div>
            <div className="space60"></div>
            <div className="row">
              <div className="col-lg-6">
                <div className="img1 reveal image-anime">
                  <img src="/images/contactus.webp" alt="image" className="img-fluid br-10" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-author-boxarea">
                  <h3>Get In Touch Now</h3>
                  <div className="space8"></div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-area">
                        <input type="text" placeholder="First Name*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input type="text" placeholder="Last Name*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input type="number" placeholder="Phone Number*" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="input-area">
                        <input type="email" placeholder="Email Address*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <input type="text" placeholder="Service Type*" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea placeholder="Your Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="space32"></div>
                      <div className="input-area">
                        <button type="submit" className="vl-btn2">
                          Get Started Now <i className="fa-solid fa-arrow-right"></i>
                        </button>
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
  )
}

