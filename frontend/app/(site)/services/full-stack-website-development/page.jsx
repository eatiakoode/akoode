export const metadata = {
  title: 'Full Stack Website Development - Akoode | Web Development Company Gurgaon',
  description:
    'Akoode Technologies offers full stack website development services in Gurgaon. Complete web applications with front-end and back-end development, AI integration, and progressive web apps.',
  keywords: [
    'full stack website development',
    'web development company Gurgaon',
    'front-end back-end development',
    'AI integration',
    'progressive web apps',
    'custom web applications',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/full-stack-website-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/full-stack-website-development/About5SectionArea';
import About6SectionArea from '@/components/full-stack-website-development/About6SectionArea';
import ServiceSliderArea from '@/components/full-stack-website-development/ServiceSliderArea';
import DatabaseTechnologies from '@/components/full-stack-website-development/DatabaseTechnologies';
import Faq5SectionArea from '@/components/full-stack-website-development/Faq5SectionArea';

export default function FullStackWebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Full Stack <span>Website Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Full Stack Website Development</span>
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

