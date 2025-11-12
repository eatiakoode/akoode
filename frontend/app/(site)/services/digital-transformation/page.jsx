export const metadata = {
  title: 'Best Digital Transformation Company - Akoode | 3D and Metaverse Solutions',
  description:
    'Akoode Technologies is the best digital transformation company in India offering transformation solutions.',
  keywords: [
    'digital transformation company',
    // '3D metaverse solutions',
    // 'AR VR development',
    // '3D modeling animation',
    // 'metaverse platform',
    'spatial computing',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/digital-transformation',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/digital-transformation/About5SectionArea';
import Service1SectionArea from '@/components/digital-transformation/Service1SectionArea';
// import Team1SectionArea from '@/components/3d-and-metaverse-based/Team1SectionArea';
import Faq5SectionArea from '@/components/digital-transformation/Faq5SectionArea';

export default function DigitalTransformationPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Digital <span>Transformation</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Digital Transformation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Service1SectionArea />
      {/* <Team1SectionArea /> */}
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

