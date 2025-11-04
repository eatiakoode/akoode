import React from 'react';

export default function PeopleSection({
  title,
  subtitle,
  description,
  processTitle,
  processSteps = [],
  imageSrc,
  imageAlt = "Team"
}) {
  return (
    <section className="people-section d-flex align-items-center">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Left Side Image */}
          <div className="col-lg-6">
            <div className="people-image h-100">
              <img src={imageSrc} alt={imageAlt} className="img-fluid w-100 h-100 object-fit-cover" />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 text-white d-flex align-items-center">
            <div className="content-wrapper heading8 p-5">
              <h2 className="display-5 fw-semibold">
                {title}<br />
                {subtitle} <span className="text-danger">for Your Business</span>
              </h2>
              <p className="mt-4 mb-3 text-white-100">
                {description}
              </p>
              {processTitle && (
                <p className="text-14">{processTitle}</p>
              )}
              {processSteps.length > 0 && (
                <div className="custom-list">
                  <ul>
                    {processSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
