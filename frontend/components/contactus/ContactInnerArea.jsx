'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactInnerArea() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_API_URL || '';
      const response = await fetch(`${apiUrl}api/enquiry/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        toast.success(result.message || 'Thank you for your message. It has been sent.');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          serviceType: '',
          message: '',
        });
      } else {
        toast.error(result.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-area">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="input-area">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name*"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="input-area">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number*"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="input-area">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-area">
                          <input
                            type="text"
                            name="serviceType"
                            placeholder="Service Type*"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="input-area">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="space32"></div>
                        <div className="input-area">
                          <button type="submit" className="vl-btn2" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Get Started Now'}{' '}
                            <i className="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

