export default function AboutSection5({ 
  title, 
  subtitle, 
  description, 
  additionalDescription, 
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
            <div className="img1">
              <img src={imageSrc} alt={imageAlt} className="about-img9" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8">
              <h5 data-aos="fade-left" data-aos-duration="800">{title}</h5>
              <div className="space18"></div>
              <h2 className="text-anime-style-3">{subtitle}</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">{description}</p>
              <div className="space32"></div>
              {additionalDescription && (
                <>
                  <p data-aos="fade-left" data-aos-duration="900">{additionalDescription}</p>
                  <div className="space32"></div>
                </>
              )}
              {buttonText && buttonLink && (
                <div className="btn-area1" data-aos="fade-left" data-aos-duration="1200">
                  <a href={buttonLink} className="vl-btn2">{buttonText} <i className="fa-solid fa-arrow-right"></i></a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
