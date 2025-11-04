import React from 'react'

export default function PeopleSection() {
  const benefits = [
    {
      title: "Superior Performance:",
      description: "Our native apps are developed using platform-specific languages and tools, guaranteeing optimal performance, faster load times, and an enjoyable user experience."
    },
    {
      title: "Enhanced User Experience:",
      description: "Native applications offer seamless integration with each platform's distinct features and design principles, providing a consistent and engaging user experience."
    },
    {
      title: "Better Access to Device Features:",
      description: "Native apps can take advantage of device-specific capabilities like cameras, GPS units and other sensors, giving users a more feature-rich and functional app experience."
    },
    {
      title: "Improved Security:",
      description: "Native apps take advantage of the platform's in-built security features, providing a more secure and dependable user experience."
    },
    {
      title: "Easier Maintenance & Updates:",
      description: "Native apps can take advantage of the platform's built-in support for updates and maintenance, making it simpler to keep your app current and relevant."
    }
  ]

  return (
    <section className="people-section d-flex align-items-center">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Left Side Image */}
          <div className="col-lg-6">
            <div className="people-image h-100">
              <img src="/images/ios/ios-app-image.jpg" alt="Team" className="img-fluid w-100 h-100 object-fit-cover" />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-6 text-white d-flex align-items-center">
            <div className="content-wrapper heading8 p-5">
              <h2 className="display-5 fw-semibold">
                Harness the Power of Native App Development <span className="text-danger">for Your Business</span>
              </h2>
              
              <p className="mt-4 mb-3 text-white-100">
                Akoode Technologies's Native App Development services offer a multitude of advantages to your business:
              </p>
              
              <div className="custom-list">
                <ul>
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <span>{benefit.title}</span> {benefit.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}