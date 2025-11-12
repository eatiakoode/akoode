import React from 'react'

export default function OurTeamSection() {
  return (
    <>
      <div className="our-process-area sp8">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="work-header text-center space-margin60 heading2">
                <h5>
                  <span>
                    <img src="images/sub-logo1.svg" alt="" />
                  </span>
                  Our Team
                </h5>
                <div className="space18"></div>
                <h2 className="text-anime-style-3">
                  Our team brings together visionaries, engineers, and creators from around the globe, united by a
                  shared purpose — to deliver value, innovation, and impact. We embrace curiosity, celebrate creativity,
                  and remain grounded in the idea that great technology starts with empathy.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team sp1 pt-0">
        <div className="container">
          <div className="row g-4 text-center justify-content-center">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="images/teams/eati.webp" alt="Eati Sinha" className="img-fluid rounded-top" />
                </div>
                <div className="team-info">
                  <h5>Eati Sinha</h5>
                  <p>Tech Lead</p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="images/teams/sonali.webp" alt="Sonali Priya" className="img-fluid rounded-top" />
                </div>
                <div className="team-info">
                  <h5>Sonali Priya</h5>
                  <p>Digital Marketing Executive</p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="images/teams/lakshay.webp" alt="Lakshay Khare" className="img-fluid rounded-top" />
                </div>
                <div className="team-info">
                  <h5>Lakshay Khare</h5>
                  <p>AI Engineer</p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="images/teams/eati.webp" alt="Eati Sinha" className="img-fluid rounded-top" />
                </div>
                <div className="team-info">
                  <h5>Eati Sinha</h5>
                  <p>Tech Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutus-highlight mt-5">
          <h5>
            Every project we undertake is driven by one timeless question:
            <span>How can this make life better?</span>
          </h5>
          <h5 className="mt-4">
            At Akoode Technologies, we don’t just keep up with change —
            <span>we create it, shape it, and make it meaningful.</span>
          </h5>
        </div>
      </div>
    </>
  );
}


