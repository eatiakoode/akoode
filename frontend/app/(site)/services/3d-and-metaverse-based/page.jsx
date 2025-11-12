export const metadata = {
  title: 'Best Metaverse Development Company - Akoode | 3D and Metaverse Solutions',
  description:
    'Akoode Technologies is the best metaverse development company in India offering 3D and metaverse-based solutions. AR/VR development, 3D modeling, metaverse platform development, and spatial computing.',
  keywords: [
    'metaverse development company',
    '3D metaverse solutions',
    'AR VR development',
    '3D modeling animation',
    'metaverse platform',
    'spatial computing',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/3d-and-metaverse-based',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/3d-and-metaverse-based/About5SectionArea';
import Service1SectionArea from '@/components/3d-and-metaverse-based/Service1SectionArea';
import Team1SectionArea from '@/components/3d-and-metaverse-based/Team1SectionArea';
import Faq5SectionArea from '@/components/3d-and-metaverse-based/Faq5SectionArea';

export default function ThreeDAndMetaverseBasedPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Best Metaverse Development<span>Company</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Best Metaverse Development Company</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Service1SectionArea />
      <Team1SectionArea />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

