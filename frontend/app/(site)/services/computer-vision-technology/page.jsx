export const metadata = {
  title: 'Computer Vision Technology Services - Akoode | Leading Computer Vision Company in India',
  description:
    'Akoode Technologies is a leading computer vision company in India offering advanced computer vision services. Object detection, image segmentation, facial recognition, OCR, and AR/VR solutions.',
  keywords: [
    'computer vision technology',
    'computer vision company India',
    'object detection',
    'image segmentation',
    'facial recognition',
    'OCR',
    'AR VR',
    'video analytics',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/computer-vision-technology',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/computer-vision-technology/About5SectionArea';
import Service1SectionArea from '@/components/computer-vision-technology/Service1SectionArea';
import DatabaseTechnologies from '@/components/computer-vision-technology/DatabaseTechnologies';
import Faq5SectionArea from '@/components/computer-vision-technology/Faq5SectionArea';

export default function ComputerVisionTechnologyPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Computer Vision in <span>AI</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Computer Vision in AI</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Service1SectionArea />
      <DatabaseTechnologies />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

