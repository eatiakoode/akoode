"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <>
      {/*===== SERVICE AREA STARTS =======*/}
      <div
        className="service1-section-area sp2"
        style={{
          backgroundImage: "url('images/bg-hexagon.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="service-header text-center heading2 space-margin60">
                <h5>
                  <span>
                    <Image src="images/sub-logo1.svg" alt="" width={30} height={30} />
                  </span>
                  Services
                </h5>
                <div className="space24"></div>
                <h2 className="text-anime-style-3">
                  Discover our wide range of solutions <br className="d-lg-block d-none" />
                  designed to bring your ideas to life
                </h2>
              </div>
            </div>
          </div>

          <div className="service-widget owl-carousel">
            <div className="service-slider-boxarea">
              <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="800">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/artificial-intelligence.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="artificial-intelligence.html">Artificial Intelligence</Link>
                    <div className="space16"></div>
                    <h6>Transform intelligence into impact.</h6>
                    <div className="space16"></div>
                    <p>
                      Harness bespoke AI solutions to automate, optimize, and amplify every
                      aspect of your business strategy.
                    </p>
                    <div className="space24"></div>
                    <h5>01</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="900">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/digital-transformation.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Digital Transformation</Link>
                    <div className="space16"></div>
                    <h6>Reimagine. Reinvent. Rise.</h6>
                    <div className="space16"></div>
                    <p>
                      We architect seamless digital transitions, aligning technology with your
                      long-term business vision.
                    </p>
                    <div className="space24"></div>
                    <h5>02</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/software-development.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Software Development</Link>
                    <div className="space16"></div>
                    <h6>Precision-coded solutions for limitless scalability.</h6>
                    <div className="space16"></div>
                    <p>
                      From agile MVPs to enterprise-grade systems, we develop software that
                      drives real results.
                    </p>
                    <div className="space24"></div>
                    <h5>03</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1100">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/mobile-app-development.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Mobile App Development</Link>
                    <div className="space16"></div>
                    <h6>Crafted apps that connect, engage, and convert.</h6>
                    <div className="space16"></div>
                    <p>
                      Native or cross-platform, our mobile apps deliver premium user
                      experiences with cutting-edge performance.
                    </p>
                    <div className="space24"></div>
                    <h5>04</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/web-development.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Web Development</Link>
                    <div className="space16"></div>
                    <h6>Beyond websites—crafted digital experiences.</h6>
                    <div className="space16"></div>
                    <p>
                      We create sleek, scalable, and responsive web platforms that captivate
                      and convert.
                    </p>
                    <div className="space24"></div>
                    <h5>05</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1300">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/ecommerce.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">eCommerce Solution</Link>
                    <div className="space16"></div>
                    <h6>Accelerate digital retail with intelligence.</h6>
                    <div className="space16"></div>
                    <p>
                      Launch high-performance, conversion-driven stores tailored to scale with
                      your brand.
                    </p>
                    <div className="space24"></div>
                    <h5>06</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-slider-boxarea">
              <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="800">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/iot-development.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">IoT Intelligence Engineering</Link>
                    <div className="space16"></div>
                    <h6>Bridge physical and digital with connected innovation.</h6>
                    <div className="space16"></div>
                    <p>
                      We architect smart IoT systems that sense, respond, and evolve in real
                      time.
                    </p>
                    <div className="space24"></div>
                    <h5>07</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="900">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/analytics-data.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">BigData & Data Analytics</Link>
                    <div className="space16"></div>
                    <h6>From data chaos to strategic clarity.</h6>
                    <div className="space16"></div>
                    <p>
                      Leverage actionable insights with our enterprise analytics, AI-powered
                      modeling, and intuitive dashboards.
                    </p>
                    <div className="space24"></div>
                    <h5>08</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/azuredevops.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Cloud and DevOps</Link>
                    <div className="space16"></div>
                    <h6>Infinite scalability. Zero friction.</h6>
                    <div className="space16"></div>
                    <p>
                      Streamline deployments and maximize uptime with secure, agile,
                      cloud-native infrastructures.
                    </p>
                    <div className="space24"></div>
                    <h5>09</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1100">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/blockchain.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">Blockchain Development</Link>
                    <div className="space16"></div>
                    <h6>Decentralized solutions. Immutable trust.</h6>
                    <div className="space16"></div>
                    <p>
                      We build secure, scalable blockchain systems—from smart contracts to
                      full DeFi ecosystems.
                    </p>
                    <div className="space24"></div>
                    <h5>10</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/staff-augmentation.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">On-Demand Tech Talent</Link>
                    <div className="space16"></div>
                    <h6>Elite developers. Embedded seamlessly.</h6>
                    <div className="space16"></div>
                    <p>
                      Accelerate delivery with top-tier professionals—dedicated to your
                      mission, on your terms.
                    </p>
                    <div className="space24"></div>
                    <h5>11</h5>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1300">
                  <div className="service1-boxarea">
                    <div className="icons">
                      <Image
                        src="images/services/digital-marketing.svg"
                        alt="image"
                        width={100}
                        height={100}
                        className="img-fluid"
                      />
                    </div>
                    <div className="arrow">
                      <Link href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <div className="space24"></div>
                    <Link href="javascript:void(0)">360 Degree Digital Marketing</Link>
                    <div className="space16"></div>
                    <h6>Marketing that moves markets.</h6>
                    <div className="space16"></div>
                    <p>
                      We blend data, design, and creativity to drive measurable growth across
                      digital ecosystems.
                    </p>
                    <div className="space24"></div>
                    <h5>12</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== SERVICE AREA ENDS =======*/}
    </>
  );
}
