export default function CareersSection() {
  return (
    <>
    <div className="about6-section-area-widget sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about6-header heading2">
              <h5>
                <span>
                  <img src="images/sub-logo1.svg" alt="" />
                </span>
                Shaping Careers, Building Futures
              </h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Join Akoode Technologies Company and Make an Impact</h2>
              <div className="space24"></div>
              <div className="about-career" data-aos="fade-left" data-aos-duration="700">
                <div className="content-area">
                  <p>
                    At Akoode Technologies, we’re constantly seeking motivated and skilled professionals who are eager
                    to create real impact. Here, it’s not just about finding a job — it’s about building a rewarding
                    career where you can expand your knowledge, develop your talents, and achieve long-term growth.
                  </p>
                  <p>
                    At Akoode Technologies, we welcome innovators, problem solvers, creative minds, and collaborative
                    team players. Here, you’ll discover opportunities to push your limits, make a real difference, and
                    contribute to a vision that’s larger than yourself.
                  </p>
                  <h4 className="pt-4">Why Build Your Career with Us?</h4>
                  <div className="custom-list">
                    <ul>
                      <li>
                        <strong>Vibrant Culture:</strong> A supportive, inclusive, and collaborative environment where
                        everyone can thrive.
                      </li>
                      <li>
                        <strong>Growth & Learning:</strong> Opportunities for continuous development through training,
                        guidance, and career advancement.
                      </li>
                      <li>
                        <strong>Purposeful Work:</strong> Contribute to impactful projects that create real value and
                        drive positive change.
                      </li>
                    </ul>
                  </div>
                  <h3>We're Hiring!</h3>

                  <p>
                    Explore exciting opportunities in the fields of Artificial Intelligence, Machine Learning, and Data
                    Science:
                  </p>
                  <div className="space10"></div>
                  <div className="custom-list">
                    <ul>
                      <li>AI Research Engineers</li>
                      <li>Machine Learning Engineers</li>
                      <li>Data Scientists & Data Analysts</li>
                      <li>Natural Language Processing (NLP) Specialists</li>
                      <li>Computer Vision Engineers</li>
                      <li>Big Data Engineers & MLOps Specialists</li>
                    </ul>
                  </div>

                  <h4>Can’t Find the Right Role?</h4>
                  <div className="space10"></div>
                  <p>
                    We’re always open to connecting with passionate professionals. Share your resume with us at{" "}
                    <a href="mailto:hr@akoode.in">hr@akoode.in</a>, and we’ll reach out when a suitable opportunity
                    comes up.
                  </p>
                </div>
              </div>
              <div className="space24"></div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div className="submit-resume-block contact-author-boxarea">
              <h3>Submit Resume</h3>
              <div className="space8"></div>
              <form id="submitResumeForm" encType="multipart/form-data">
                <input type="hidden" name="subject" value="Career - Contact Form" />
                <div className="row">
                  <div className="col-lg-6 input-area">
                    <input type="text" name="r_name" placeholder="Full Name*" required />
                    <div className="with-errors re_name"></div>
                  </div>
                  <div className="col-lg-6 input-area">
                    <input type="email" name="r_email" placeholder="Email Address*" required />
                    <div className="with-errors re_email"></div>
                  </div>
                  <div className="col-lg-6 input-area">
                    <input type="tel" name="r_phone" placeholder="Phone Number*" required />
                    <div className="with-errors re_phone"></div>
                  </div>
                  <div className="col-lg-6 input-area choose-file">
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <i className="fa-solid fa-upload me-2"></i> Choose File
                    </label>
                    <input id="file-upload" type="file" name="attachment" accept=".pdf" />
                    <span className="file-name">No file chosen</span>
                  </div>
                  <div className="col-lg-6 input-area">
                    <input type="text" name="r_job_title" placeholder="Job Title*" required />
                    <div className="with-errors re_job_title"></div>
                  </div>
                  <div className="col-lg-6 input-area">
                    <input type="number" name="r_notice_period" placeholder="Notice Period (Days)" required />
                    <div className="with-errors re_notic"></div>
                  </div>
                  <div className="col-lg-12 input-area">
                    <input type="text" name="r_ctc" placeholder="Current CTC (In Lakhs)" required />
                    <div className="with-errors re_ctc"></div>
                  </div>
                  <div className="col-lg-12 input-area">
                    <textarea name="r_message" placeholder="Your Message"></textarea>
                    <div className="with-errors re_message"></div>
                  </div>
                  <div className="col-lg-12 input-area mt-4">
                    <button type="submit" id="submitResumeFormBtn" className="vl-btn2">
                      Submit{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
