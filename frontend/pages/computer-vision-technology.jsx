import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/computer-vision-technology/About5SectionArea'
import Service1SectionArea from '../components/computer-vision-technology/Service1SectionArea'
import DatabaseTechnologies from '../components/computer-vision-technology/DatabaseTechnologies'
import Faq5SectionArea from '../components/computer-vision-technology/Faq5SectionArea'

export default function ComputerVisionTechnology() {
  return (
    <>
      <Head>
        <title>Computer Vision Technology Services - Akoode | Leading Computer Vision Company in India</title>
        <meta name="description" content="Akoode Technologies is a leading computer vision company in India offering advanced computer vision services. Object detection, image segmentation, facial recognition, OCR, and AR/VR solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="computer vision technology, computer vision company India, object detection, image segmentation, facial recognition, OCR, AR VR, video analytics, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/computer-vision-technology" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Computer Vision in <span>AI</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Computer Vision in AI</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/computer-vision-technology.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/computer-vision-technology.html */}
      <Service1SectionArea />

      {/* Database Technologies Section - Matches akoodehtml/computer-vision-technology.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/computer-vision-technology.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













