import React from 'react';

export default function DatabaseTechnologiesSection() {
  const databases = [
    {
      title: "MySQL",
      description: "MySQL is an open-source relational database management system (RDBMS) that utilizes Structured Query Language (SQL). It's renowned for its performance, dependability and ease of use."
    },
    {
      title: "MongoDB",
      description: "MongoDB is a leading NoSQL database that stores data in an adaptable, JSON-like format called BSON. It boasts impressive performance, horizontal scalability and ease of development - making it the ideal solution for modern web applications with large amounts of unstructured data."
    },
    {
      title: "Redis",
      description: "Redis is an in-memory data structure store that can serve as a database, cache or message broker. It supports various data structures and boasts high performance - making it ideal for caching purposes as well as real-time analytics."
    },
    {
      title: "Microsoft SQL Server",
      description: "Microsoft's SQL Server is a feature-packed relational database management system developed by the company. It offers comprehensive tools and capabilities for data management, security, and analytics - making it ideal for enterprise-level web applications."
    }
  ];

  return (
    <div className="database-technologies about5-section-area sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <h2 className="text-anime-style-3">Database Technologies</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">Databases are essential for storing, retrieving, and managing data in web applications. Here are some popular database technologies we utilize:</p>
              <div className="space24"></div>
            </div>
          </div>    
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last" data-aos="zoom-in" data-aos-duration="1000">
            <div className="img1" style={{backgroundImage: "url('/assets/img/all-images/bg/about-bg3.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <img src="/images/frontend-tech/database-tech.webp" alt="image" className="about-img9 img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about5-header heading8 p-0">
              {databases.map((db, index) => (
                <div key={index}>
                  <div className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={1000 + (index * 100)}>
                    <div className="content-area">
                      <a href="#">{db.title}</a>
                      <p>{db.description}</p>
                    </div> 
                  </div>
                  {index < databases.length - 1 && <div className="space16"></div>}
                </div>
              ))}
              <div className="space32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
