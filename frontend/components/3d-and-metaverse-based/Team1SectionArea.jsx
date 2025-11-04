import React from 'react'

export default function Team1SectionArea() {
  const features = [
    {
      id: 1,
      title: "3D Virtual Ecosystem",
      description: "With the help of Metaverse 3D development services, you have the flexibility to create, update, and make your own virtual space. And allow the customers to interact with your brand at any place they want."
    },
    {
      id: 2,
      title: "Enable Digital Currency",
      description: "For the purpose of creating Metaverse 3D platforms, enable digital currency for the online gaming process along with making digital currency for the retail platform."
    },
    {
      id: 3,
      title: "Decentralization",
      description: "Get complete ownership and right over the metaverse assets created as per your organizational budget. Experience ownership with no interference from any other entity."
    }
  ]

  return (
    <div className="team1-section-area sp2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="team-header heading2 text-center">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Must Look At Features of Metaverse 3D Development
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">
                Rely on the Metaverse and 3D experts to create an intuitive user experience by developing a real-like digital world for the benefit of customers to better connect and buy from you. As part of the Metaverse 3D development services, have a close look at the following few features.
              </h2>
              <ul className="list-content">
                {features.map((feature) => (
                  <li key={feature.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                      <path d="M11.3909 14C11.0558 14 10.8325 13.8667 10.6091 13.6L5.91878 8C5.47208 7.46667 5.47208 6.66667 5.91878 6.13333C6.36548 5.6 7.03553 5.6 7.48223 6.13333L11.3909 10.8L20.1015 0.4C20.5482 -0.133333 21.2183 -0.133333 21.665 0.4C22.1117 0.933333 22.1117 1.73333 21.665 2.26667L12.1726 13.6C12.0609 13.8667 11.7259 14 11.3909 14Z" fill="#514DE0"></path>
                      <path d="M5.80711 14C5.47208 14 5.24873 13.8667 5.02538 13.6L0.335025 8C-0.111675 7.46667 -0.111675 6.66667 0.335025 6.13333C0.781726 5.6 1.45178 5.6 1.89848 6.13333L6.58883 11.7333C7.03553 12.2667 7.03553 13.0667 6.58883 13.6C6.47716 13.8667 6.14213 14 5.80711 14ZM11.7259 7.06667C11.3909 7.06667 11.1675 6.93333 10.9442 6.66667C10.4975 6.13333 10.4975 5.33333 10.9442 4.8L14.5178 0.4C14.9645 -0.133333 15.6345 -0.133333 16.0812 0.4C16.5279 0.933333 16.5279 1.73333 16.0812 2.26667L12.5076 6.66667C12.2843 6.93333 12.0609 7.06667 11.7259 7.06667Z" fill="#514DE0"></path>
                    </svg>
                    <strong>{feature.title}:</strong> {feature.description}
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













