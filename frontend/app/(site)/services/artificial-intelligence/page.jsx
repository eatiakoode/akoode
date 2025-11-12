export const metadata = {
  title: 'Artificial Intelligence Services - Akoode | AI Solutions Company in Gurgaon',
  description:
    'Akoode Technologies delivers cutting-edge AI services including deep learning, data science, computer vision, and generative AI integration. Premier AI company in India.',
  keywords: [
    'artificial intelligence',
    'AI services',
    'deep learning',
    'data science',
    'computer vision',
    'generative AI',
    'AI company India',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/artificial-intelligence',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/artificial-intelligence/About5SectionArea';
import Service1SectionArea from '@/components/artificial-intelligence/Service1SectionArea';
import Faq5SectionArea from '@/components/artificial-intelligence/Faq5SectionArea';

export default function ArtificialIntelligencePage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Artificial <span>Intelligence</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Artificial Intelligence</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Service1SectionArea />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

