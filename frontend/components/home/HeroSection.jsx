"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/*===== HERO AREA STARTS =======*/}
      <div className="hero-section-wrapper">
        <div className="hero-widget owl-carousel">
          <div className="hero-slider-boxarea">
            <div className="img1 image-anime">
              {/* <img src="images/home/AI-Consultation.webp" alt="image" class="img-fluid"> */}
              <Image src="/images/roboai/slide-1.png" alt="image" className="img-fluid" width={1600} height={900} />
            </div>
            <div className="container">
              <div className="hero1-header heading1">
                <h5 data-aos="fade-left" data-aos-duration="800">
                  <span>
                    <Image src="/images/sub-logo1.svg" alt="image" className="img-fluid" width={30} height={30} />
                  </span>
                  Your dream project, crafted to perfection
                </h5>
                <div className="space16"></div>
                <h1 className="text-anime-style-3">Harness the Full Potential of Artificial Intelligence</h1>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="900">
                  To Transform Your Business, Supercharge Productivity, and Stay Ahead in an Ever-Evolving World.
                </p>
                <div className="space32"></div>
                <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                  <Link href="contactus.html" className="vl-btn1">
                    Explore AI Solutions Today <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                    <span>
                      <i className="fa-solid fa-play"></i>
                    </span>
                    Testimony
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slider-boxarea">
            <div className="img1 image-anime">
              <Image src="/images/roboai/slide-2.png" alt="image" className="img-fluid" width={1600} height={900} />
            </div>
            <div className="container">
              <div className="hero1-header heading1">
                <h5 data-aos="fade-left" data-aos-duration="800">
                  <span>
                    <Image src="/images/sub-logo1.svg" alt="image" className="img-fluid" width={30} height={30} />
                  </span>
                  Innovating tomorrow’s solutions today
                </h5>
                <div className="space16"></div>
                <h1 className="text-anime-style-3">Step Into the Future with AI Solutions</h1>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="900">
                  {" "}
                  That Don’t Just Adapt to Change—They Drive It. Unlock Growth, Innovate Faster, and Dominate Your Industry.
                </p>
                <div className="space32"></div>
                <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                  <Link href="contactus.html" className="vl-btn1">
                    Request Your Free AI Consultation <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                    <span>
                      <i className="fa-solid fa-play"></i>
                    </span>
                    Testimony
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slider-boxarea">
            <div className="img1 image-anime">
              <Image src="/images/roboai/slide-3.png" alt="image" className="img-fluid" width={1600} height={900} />
            </div>
            <div className="container">
              <div className="hero1-header heading1">
                <h5 data-aos="fade-left" data-aos-duration="800">
                  <span>
                    <Image src="/images/sub-logo1.svg" alt="image" className="img-fluid" width={30} height={30} />
                  </span>
                  imagine It, We'll bring It to life
                </h5>
                <div className="space16"></div>
                <h1 className="text-anime-style-3">From Data to Decisions, We Build Smarter Systems</h1>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="900">
                  {" "}
                  That Think, Learn, and Act. Empower Your Business to Solve Complex Problems with Precision and Speed.
                </p>
                <div className="space32"></div>
                <div className="btn-area1" data-aos="fade-left" data-aos-duration="800">
                  <Link href="contactus.html" className="vl-btn1">
                    Get a Tailored AI Strategy <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="https://www.youtube.com/watch?v=gnMLebu-PbU" className="popup-youtube">
                    <span>
                      <i className="fa-solid fa-play"></i>
                    </span>
                    Testimony
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js"></div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
    </>
  );
}
