export const metadata = {
  title: 'Generative AI Integration Solutions - Akoode | Pioneering AI Company India',
  description:
    'Akoode Technologies is the leading Generative AI solution provider in India offering pioneering AI integration solutions. Content generation, design generation, data synthesis, and customized AI solutions.',
  keywords: [
    'generative AI solutions',
    'AI integration',
    'content generation',
    'design generation',
    'data synthesis',
    'AI company India',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/pioneering-generative-ai-integration',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/pioneering-generative-ai-integration/About5SectionArea';
import Service1SectionArea from '@/components/pioneering-generative-ai-integration/Service1SectionArea';
import DatabaseTechnologies from '@/components/pioneering-generative-ai-integration/DatabaseTechnologies';
import Faq5SectionArea from '@/components/pioneering-generative-ai-integration/Faq5SectionArea';

export default function PioneeringGenerativeAiIntegrationPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Generative AI - <span>NLP Services</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Generative AI - NLP Services</span>
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

