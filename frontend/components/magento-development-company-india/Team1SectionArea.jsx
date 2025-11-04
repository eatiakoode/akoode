import React from 'react'

export default function Team1SectionArea() {
  const services = [
    {
      title: "Custom Magento Development:",
      description: "Our experienced Magento developers specialize in crafting unique and fully-featured eCommerce websites tailored to fit the unique requirements of your business. We prioritize creating exceptional user experiences that encourage customer engagement and sales growth."
    },
    {
      title: "Magento Theme Design and Development:",
      description: "Stand out from your competition with an attention-grabbing and responsive Magento theme tailored to reflect your brand identity. Our team of creative designers ensure that your eCommerce store looks stunning across all devices, giving customers an unmatched user experience."
    },
    {
      title: "Magento Extension Development:",
      description: "Extend your store's functionality with custom Magento extensions, designed to enhance features and provide a superior shopping experience. We create secure, scalable extensions that integrate seamlessly with existing websites."
    },
    {
      title: "Magento 2 Migration:",
      description: "Transition your Magento 1 store to the latest Magento 2 platform with our seamless migration services. Our Magento experts guarantee a stress-free transition, preserving all data and functionality while improving performance and security."
    },
    {
      title: "Magento Integration Services:",
      description: "Connect your Magento store to third-party systems and applications to streamline business operations. Our developers have extensive experience integrating with ERPs, CRMs, payment gateways, shipping providers, and more for seamless data synchronization and improved efficiency."
    },
    {
      title: "Magento Performance Optimization:",
      description: "Enhance your store's performance with our Magento optimization services. We analyze your website's current performance, identify bottlenecks, and implement solutions to reduce page load times, enhance user experience, and boost search engine rankings."
    },
    {
      title: "Magento Support and Maintenance:",
      description: "Keep your eCommerce store up to date and secure with our comprehensive Magento support and maintenance services. Our team of experts are available 24/7 to address any issues, provide regular updates, and guarantee optimal performance for your store."
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
                Our Magento eCommerce Development Services
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">
                We deliver tailored Magento eCommerce development services to build secure, scalable, and high-performing online stores that enhance user experience and drive business growth.
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












