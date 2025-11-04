import React from 'react'

export default function Team1SectionArea() {
  const services = [
    {
      title: "Custom Opencart Development:",
      description: "Our talented Opencart developers create tailored, feature-rich eCommerce websites to fit your business objectives. We strive to offer tailored solutions that help you stand out from competitors and engage your customers effectively."
    },
    {
      title: "Opencart Theme Design and Development:",
      description: "Express your brand identity with a visually appealing, responsive Opencart theme designed to deliver an unmatched user experience across all devices. Our creative designers guarantee your online store looks fantastic and functions optimally, leaving a lasting impression on customers."
    },
    {
      title: "Opencart Extension Development:",
      description: "Extend your store's capabilities with custom Opencart extensions, designed to integrate seamlessly and add new features to your eCommerce website. We create secure and scalable extensions that enhance both performance and user experience."
    },
    {
      title: "Opencart Migration Services:",
      description: "Transform your current eCommerce platform to Opencart with our expert migration services. We guarantee a smooth transition, preserving all of your store's data and functionality while optimizing performance and security."
    },
    {
      title: "Opencart Integration Services:",
      description: "Simplify your business operations by integrating your Opencart store with third-party systems and applications. Our developers have extensive expertise in integrating Opencart stores with ERP, CRM, payment gateway systems."
    }
  ]

  return (
    <div className="team1-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="team-header heading2 text-center">
              <h5>
                <span><img src="/images/sub-logo1.svg" alt="image" className="img-fluid" /></span>
                Our Opencart eCommerce Development Services
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">
                We provide custom OpenCart eCommerce development services, creating secure, scalable, and feature-rich online stores designed to boost performance, user experience, and business growth.
              </h2>
              <ul className="list-content">
                {services.map((service, index) => (
                  <li key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                      <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#514DE0"></path>
                      <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#514DE0"></path>
                    </svg>
                    <strong>{service.title}</strong> {service.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}












