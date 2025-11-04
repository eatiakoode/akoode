import React from 'react'

export default function Service1SectionArea() {
  const services = [
    {
      id: 1,
      icon: "/images/artificial-intelligence/computer-vision/object-scan.svg",
      title: "Object Detection and Recognition",
      description: "Enable your business to identify and classify objects within images and videos accurately and efficiently. Our team develops state-of-the-art object detection and recognition solutions that can be customized to meet your specific requirements and use cases. Identify and interpret the meaningful insights of diverse visuals to perform an action-oriented operation.",
      number: "01"
    },
    {
      id: 2,
      icon: "/images/artificial-intelligence/computer-vision/image-segmentation.svg",
      title: "Image Segmentation",
      description: "Segment images into meaningful regions and objects with our advanced image segmentation services, developed by computer vision experts. We utilize cutting-edge computer vision technologies in India to provide precise and robust image segmentation solutions for a variety of applications, including medical imaging, autonomous vehicles, and more.",
      number: "02"
    },
    {
      id: 3,
      icon: "/images/artificial-intelligence/computer-vision/face-scan.svg",
      title: "Facial Recognition and Biometrics",
      description: "Enhance security and user authentication operations with our facial recognition and biometric solutions. We design and implement advanced systems that accurately identify and verify individuals based on their unique facial features and other biometric data.",
      number: "03"
    },
    {
      id: 4,
      icon: "/images/artificial-intelligence/computer-vision/video.svg",
      title: "Video Analytics",
      description: "Transform raw video data into actionable insights with our comprehensive video analytics services. Our team employs advanced computer vision techniques to analyze video content, enabling you to monitor activities, detect anomalies, and make data-driven decisions.",
      number: "04"
    },
    {
      id: 5,
      icon: "/images/artificial-intelligence/computer-vision/ocr.svg",
      title: "Optical Character Recognition (OCR)",
      description: "Automate data extraction from images and documents with our OCR solutions. We develop accurate and efficient OCR systems that can recognize and extract text from various formats, including printed documents, handwritten text, and images.",
      number: "05"
    },
    {
      id: 6,
      icon: "/images/artificial-intelligence/computer-vision/virtual-reality.svg",
      title: "Augmented Reality (AR) and Virtual Reality (VR) Applications",
      description: "Immerse users in interactive digital experiences with our AR and VR solutions. We create engaging and immersive applications that leverage computer vision technologies to overlay digital content onto the physical world, enhancing user experiences across various industries.",
      number: "06"
    },
    {
      id: 7,
      icon: "/images/artificial-intelligence/computer-vision/computer-vision.svg",
      title: "Custom Computer Vision Solutions",
      description: "Address your unique business challenges with our tailor-made computer vision solutions. Our team works closely with you to understand your specific requirements and develop customized solutions that drive tangible results.",
      number: "07"
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
                Wide Range of Computer Vision Services That We Offer
              </h2>
            </div>
          </div>
        </div>

        <div className="integrated-intelligence deep-learning-widget">
          <div className="service-slider-boxarea">
            <div className="row">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`col-lg-${index < 4 ? '6' : '4'} col-md-6`} 
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













