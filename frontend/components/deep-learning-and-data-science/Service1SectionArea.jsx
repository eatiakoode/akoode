import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/services/artificial-intelligence.svg",
      title: "Data Science Consulting",
      description: "Understanding the challenges and opportunities within your data is critical to formulating effective strategies for growth. Our data science consulting services are designed to help you gain valuable insights into your data and devise comprehensive plans to leverage it for maximum impact. Our team of data scientists will work closely with you to identify key areas for improvement, uncover hidden patterns and trends, and recommend data-driven solutions that align with your business objectives. By partnering with Akoode Technologies, you can be confident that your data is in the hands of experts who are committed to your success.",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/artificial-intelligence/deep-learning.svg",
      title: "Deep Learning Model Development",
      description: "Deep learning is a subset of machine learning that uses artificial neural networks to model complex patterns and relationships within data. This advanced technology has the potential to transform your business by uncovering hidden insights and making accurate predictions that can drive smarter decision-making. Our deep learning model development services leverage state-of-the-art algorithms and techniques to deliver powerful, customized models that address your unique business challenges. From image recognition and natural language processing to fraud detection and customer segmentation, our deep learning models are designed to provide you with the tools you need to stay ahead of the competition.",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/artificial-intelligence/analytics.svg",
      title: "Predictive Analytics",
      description: "The ability to accurately predict future trends and events is a game-changer for businesses looking to optimize their operations, reduce risk, and make more informed decisions. Our predictive analytics services use advanced data science techniques, including machine learning and statistical modeling, to analyze historical data and make accurate forecasts about future outcomes. By understanding the factors that drive your business and predicting how they will evolve, you can proactively adjust your strategies and tactics to capitalize on emerging opportunities and mitigate potential risks.",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/artificial-intelligence/processing.svg",
      title: "Natural Language Processing",
      description: "Natural language processing (NLP) is a branch of artificial intelligence that focuses on enabling computers to understand and interpret human language. With the increasing importance of text data in today's digital world, NLP has become an essential tool for businesses looking to enhance customer interactions, automate routine tasks, and gain valuable insights from unstructured text data. Our NLP services include sentiment analysis, text classification, entity recognition, and machine translation, among others. By leveraging the power of NLP, your business can improve customer satisfaction, streamline operations, and uncover hidden opportunities within your text data.",
      number: "04"
    }
  ]

  return (
    <div className="service1-section-area bg-light sp1">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="service-header text-center heading2 space-margin60">
              <h5>
                <span>
                  <img src="/images/sub-logo1.svg" alt="image" className="img-fluid" />
                </span>
                Our Services
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">
                At Akoode Technologies, implement feature-rich and intelligently driven deep learning applications in business to unlock the value of extensive data. Learning from the huge pile of structured and unstructured data for the benefit of business to identify both issues and opportunities at the same time.
              </h2>
            </div>
          </div>
        </div>

        <div className="deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="col-lg-6 col-md-6" 
                  data-aos="zoom-in" 
                  data-aos-duration={`${800 + (index * 100)}`}
                >
                  <div className="service1-boxarea">
                    <div className="icons">
                      <img src={service.icon} alt="image" className="img-fluid" />
                    </div>
                    <div className="arrow">
                      <a href="javascript:void(0)">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="space24"></div>
                    <a href="javascript:void(0)">{service.title}</a>
                    <div className="space16"></div>
                    <p>{service.description}</p>
                    <div className="space24"></div>
                    <h5>{service.number}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


