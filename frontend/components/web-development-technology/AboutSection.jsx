import React from 'react';

export default function AboutSection({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = ""
}) {
  return (
    <div className="about5-section-area sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className="img1" style={{backgroundImage: "url('/assets/img/all-images/bg/about-bg3.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <img src={imageSrc} alt={imageAlt} className="about-img9 img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8">
              <h5 data-aos="fade-left" data-aos-duration="800">{title}</h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">{subtitle}</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">{description}</p>
              {buttonText && buttonLink && (
                <>
                  <div className="space32"></div>
                  <div className="btn-area1 text-left" data-aos="fade-left" data-aos-duration="1100">
                    <a href={buttonLink} className="vl-btn2">{buttonText} <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
