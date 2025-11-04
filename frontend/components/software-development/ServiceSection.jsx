import React from 'react';

export default function ServiceSection({ 
  title, 
  description 
}) {
  return (
    <div className="service1-section-area sp2" style={{backgroundImage: 'url(/images/bg-hexagon.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading2">
              <h2 className="text-anime-style-3 space-margin30">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
