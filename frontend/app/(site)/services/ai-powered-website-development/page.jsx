export const metadata = {
  title: 'AI-Powered Website Development - Akoode | Web Development Company Gurgaon',
  description:
    'Akoode Technologies offers AI-powered website development services in Gurgaon. Personalized user experience, automated customer support, data-driven insights, and cutting-edge AI technologies.',
  keywords: [
    'AI-powered website development',
    'artificial intelligence web development',
    'personalized user experience',
    'AI chatbots',
    'machine learning websites',
    'Akoode Technologies Gurgaon',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/ai-powered-website-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/ai-powered-website-development/About5SectionArea';
import About6SectionArea from '@/components/ai-powered-website-development/About6SectionArea';
import ServiceSliderArea from '@/components/ai-powered-website-development/ServiceSliderArea';
import DatabaseTechnologies from '@/components/ai-powered-website-development/DatabaseTechnologies';
import Faq5SectionArea from '@/components/ai-powered-website-development/Faq5SectionArea';

export default function AiPoweredWebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Ai Powered <span>Website Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Ai Powered Website Development</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <About6SectionArea />
      <ServiceSliderArea />
      <DatabaseTechnologies />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

