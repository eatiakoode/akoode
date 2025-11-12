"use client";

import React, { useEffect, useState } from "react";

export default function CRMSolutionSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !isClient) return;

    const initializeTabs = () => {
      console.log("Initializing CRM tabs...");

      // Check if Bootstrap is available
      if (!window.bootstrap) {
        console.log("Bootstrap not available, retrying...");
        setTimeout(initializeTabs, 500);
        return;
      }

      console.log("Bootstrap available:", !!window.bootstrap);

      // Check if document and required elements exist
      if (!document || !document.querySelector) {
        console.log("Document not ready, retrying...");
        setTimeout(initializeTabs, 500);
        return;
      }

      // Wait for DOM to be ready
      if (window.$) {
        $(document).ready(() => {
          // Initialize Bootstrap tabs
          if (window.bootstrap && window.bootstrap.Tab) {
            const tabElements = document.querySelectorAll(
              '#pills-tab button[data-bs-toggle="pill"]'
            );
            tabElements.forEach((element) => {
              try {
                new window.bootstrap.Tab(element);
              } catch (error) {
                console.error("Error initializing tab for element:", error);
              }
            });
            console.log(
              "Bootstrap tabs initialized for",
              tabElements.length,
              "elements"
            );
          }
        });
      } else {
        // Fallback if jQuery is not available
        setTimeout(() => {
          if (window.bootstrap && window.bootstrap.Tab) {
            const tabElements = document.querySelectorAll(
              '#pills-tab button[data-bs-toggle="pill"]'
            );
            tabElements.forEach((element) => {
              try {
                new window.bootstrap.Tab(element);
              } catch (error) {
                console.error("Error initializing tab for element:", error);
              }
            });
            console.log(
              "Bootstrap tabs initialized for",
              tabElements.length,
              "elements"
            );
          }
        }, 100);
      }
    };

    // Add a delay to ensure DOM is fully rendered
    const timer = setTimeout(initializeTabs, 200);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [isClient]);

  return (
    <section id="crms" className="bg-light p-5">
      <div className="crm-solutions service2-section-area sp1">
        <div className="container">
          <div className="service-header text-center heading2">
            <h2 className="text-anime-style-3 space-margin30">CRM Solutions</h2>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="service-widgets-section">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="service-boxarea">
                          <div className="space28"></div>
                          <div className="content-area">
                            <h3 data-aos="fade-left" data-aos-duration="800">
                              Akoode Technologies
                            </h3>
                            <div className="space16"></div>
                            <p data-aos="fade-left" data-aos-duration="900">
                              Providing every single solution with respect to
                              the software
                            </p>
                            <div className="space28"></div>
                            <a href="contactus.html" className="vl-btn2">
                              Learn More{" "}
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-5">
                        <div className="images-area">
                          <div className="img1 reveal">
                            <img
                              src="/images/custom-soft-dev/end-to-end.webp"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="service-boxarea">
                          {/* <div className="icons" data-aos="fade-left" data-aos-duration="700">
                              <img src="assets/img/icons/service-icon8.svg" alt="">
                          </div> */}
                          <div className="space28"></div>
                          <div className="content-area">
                            <h3 data-aos="fade-left" data-aos-duration="800">
                              Akoode Technologies
                            </h3>
                            <div className="space16"></div>
                            <p data-aos="fade-left" data-aos-duration="900">
                              Delivering end-to-end software solutions tailored
                              to your business needs.
                            </p>
                            <div className="space28"></div>
                            <a href="contactus.html" className="vl-btn2">
                              Learn More{" "}
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-5">
                        <div className="images-area">
                          <div className="img1 reveal">
                            <img
                              src="/images/custom-soft-dev/end-to-end.webp"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabIndex={0}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="service-boxarea">
                          {/* <div className="icons" data-aos="fade-left" data-aos-duration="700">
                              <img src="assets/img/icons/service-icon9.svg" alt="">
                          </div> */}
                          <div className="space28"></div>
                          <div className="content-area">
                            <h3 data-aos="fade-left" data-aos-duration="800">
                              Akoode Technologies
                            </h3>
                            <div className="space16"></div>
                            <p data-aos="fade-left" data-aos-duration="900">
                              Empowering digital transformation through
                              innovative software development services.
                            </p>
                            <div className="space28"></div>
                            <a href="contactus.html" className="vl-btn2">
                              Learn More{" "}
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-5">
                        <div className="images-area">
                          <div className="img1 reveal">
                            <img
                              src="/images/custom-soft-dev/end-to-end.webp"
                              alt="img"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space80"></div>

                <div className="tabs-btn-area">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Updated software{" "}
                        <span>Every second, software will be updated</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Real-Time Customization{" "}
                        <span>To make sure up-to-date with latest</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        End-To-End testing{" "}
                        <span>To make sure plateform robustness</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
