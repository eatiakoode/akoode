import React from 'react'

export default function About6SectionArea() {
  const advantages = [
    {
      title: "Interactive User Experience:",
      description: "Dynamic websites offer users personalized content to enhance their browsing experience and drive engagement with your brand."
    },
    {
      title: "Easier Content Updates:",
      description: "With a Content Management System (CMS), updating your website content becomes simple even for those with minimal technical know-how."
    },
    {
      title: "Scalability:",
      description: "Dynamic websites can easily scale with growing businesses, making it simple to add new features, pages or functionality as needed."
    },
    {
      title: "Advanced Functionality:",
      description: "Dynamic websites enable integration of complex features and interactive elements like forms, e-commerce stores and multimedia files."
    }
  ]

  return (
    <div className="about6-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading8 text-center">
              <div className="space18"></div>
              <h2 className="text-anime-style-3">Advantages of Dynamic Website Development</h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Dynamic website development offers many advantages; some of which include Dynamic websites offer several advantages, such as:
              </p>
              <div className="space24"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="about6-header">
              {advantages.map((advantage, index) => (
                <div key={index} className="about-boxarea pera-box" data-aos="fade-left" data-aos-duration={`${1000 + (index * 100)}`}>
                  <div className="content-area">
                    <a href="#">{advantage.title}</a>
                    <p>{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="images" data-aos="fade-left" data-aos-duration="800">
              <div className="img1 reveal image-anime br20">
                <img src="/images/dynamic-website/dynamic-website.webp" alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="space24"></div>
          <div className="btn-area1 text-center" data-aos="fade-left" data-aos-duration="1100">
            <a href="/blog" className="vl-btn2">
              Start Your Project Now <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}













