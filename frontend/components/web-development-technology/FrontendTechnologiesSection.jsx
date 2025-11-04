import React from 'react';

export default function FrontendTechnologiesSection() {
  const technologies = [
    {
      title: "HTML",
      description: "HyperText Markup Language (HTML) is the widely-used markup language for creating web pages. It provides the foundation of a website and guarantees accurate formatting of text and images."
    },
    {
      title: "CSS",
      description: "Cascading Style Sheets (CSS) are a stylesheet language designed to manage the presentation of HTML elements. This allows developers to craft visually appealing designs and responsive layouts with ease."
    },
    {
      title: "JavaScript",
      description: "JavaScript is a programming language designed to provide interactive elements and client-side functionality on websites. It's commonly used for tasks like form validation, animations, and dynamic content updates."
    },
    {
      title: "React",
      description: "React is a popular JavaScript library for creating user interfaces, especially single-page applications. It enables developers to quickly and efficiently create reusable UI components and manage the state of a web application more efficiently."
    },
    {
      title: "Angular",
      description: "Angular is a platform and framework for creating client-side applications using HTML, CSS, JavaScript/TypeScript. It features two-way data binding, dependency injection, and a modular architecture suited for large-scale projects."
    }
  ];

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Front-End Technologies</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">Front-end technologies are responsible for creating and managing the design and user interface of a website. Here are some popular front-end technologies we utilize:</p>
              <div className="space24"></div>
            </div>
          </div>    
        </div>
            
        <div className="row">
          <div className="col-lg-7">
            <div className="about6-header">
              {technologies.map((tech, index) => (
                <div key={index}>
                  <div className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={1000 + (index * 100)}>
                    <div className="content-area">
                      <a href="#">{tech.title}</a>
                      <p>{tech.description}</p>
                    </div>
                  </div>
                  {index < technologies.length - 1 && <div className="space24"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="images" data-aos="fade-left" data-aos-duration="800">
              <div className="img1 reveal image-anime br20">
                <img src="/images/frontend-tech/front-end-tech.webp" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="space24"></div>
          <div className="btn-area1 text-center" data-aos="fade-left" data-aos-duration="1100">
            <a href="blog1.html" className="vl-btn2">Start Your Project Now <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
