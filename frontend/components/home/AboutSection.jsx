import { useEffect } from 'react'

export default function AboutSection() {
  useEffect(() => {
    const initializeAbout = () => {
      console.log('Initializing About section...');

      // Check if required libraries are available
      if (typeof window === 'undefined') {
        console.log('Window not available, retrying...');
        setTimeout(initializeAbout, 500);
        return;
      }

      // Wait for DOM to be ready
      if (typeof window !== 'undefined' && window.$) {
        $(document).ready(() => {
          // Initialize circle progress if available
          if (window.$ && window.$.fn.circleProgress) {
            $('.circle').circleProgress({
              value: 1.0,
              size: 80,
              fill: {
                gradient: ["#474972", "#585c9c"]
              },
              startAngle: -Math.PI / 2,
              thickness: 8
            });
            console.log('Circle progress initialized');
          }

          // Initialize AOS animations if available
          if (window.AOS) {
            window.AOS.refresh();
            console.log('AOS animations refreshed');
          }
        });
      }
    };

    // Start initialization
    initializeAbout();

    // Cleanup function
    return () => {
      // No specific cleanup needed
    };
  }, []);

  return (
    <div className="about-area sp1">
      <img src="/images/elements9.png" alt="" className="elements9 rotate-me" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-images-area">
              <img src="/images/elements10.png" alt="" className="elements10" />
              <div className="row align-items-start">
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime reveal">
                    <img src="/images/about-img1.webp" alt="" className="img-fluid" />
                  </div>
                  <div className="space30 d-lg-none d-block"></div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="img1 image-anime reveal">
                    <img src="/images/about-img2.png" alt="" className="img-fluid" />
                  </div>
                  <div className="space30"></div>
                  <div className="img1 image-anime reveal">
                    <img src="/images/about-img3.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="check-icons aniamtion-key-1">
                <div className="check-ico"><i className="fas fa-check"></i></div>
                <p>With 15+ years of experience
                  IT solution help community.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="about-header-area heading2 ms-4">
              <h5><span><img src="/images/sub-logo1.svg" alt="" /></span>Akoode Technology</h5>
              <div className="space24"></div>
              <h3 className="text-anime-style-3">Why Choose Akoode Technology?</h3>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="800">Akoode Technology is your trusted partner in innovation, delivering cutting-edge AI-driven
                solutions tailored to your business needs. With expertise spanning Artificial Intelligence,
                Blockchain, IoT, and Digital Transformation, we offer comprehensive services designed to
                future-proof your operations.</p>
              <div className="space28"></div>
              <div className="row" data-aos="fade-left" data-aos-duration="900">
                <div className="col-lg-12 col-md-12">
                  <div className="progresbar">
                    <div className="progressbar">
                      <div className="circle" data-percent="100">
                        <canvas width="80" height="80"></canvas>
                        <div className="count">100%</div>
                      </div>
                    </div>
                    <div className="content-area">
                      <h4>Our proven track record of 100+ successful projects,</h4>
                      <div className="space8"></div>
                      <p>global reach, and focus on quality ensures scalable, reliable, and impactful results.</p>
                    </div>
                  </div>
                </div>

               
              </div>
              <div className="space28"></div>
              <div className="pera-box" data-aos="fade-left" data-aos-duration="1000">
                <p>"By combining
                  advanced technologies with a client-first approach, we empower businesses to achieve
                  measurable growth and long-term success, supported by dedicated maintenance and
                  ongoing support."</p>
              </div>
              <div className="space28"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1200">
                <a href="contactus.html" className="vl-btn2">See How We Can Help <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
