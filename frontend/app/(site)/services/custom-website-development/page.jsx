export const metadata = {
  title: 'Custom Website Development - Akoode | Web Development Company Gurgaon',
  description:
    'Akoode Technologies offers custom website development services in Gurgaon. Futuristic web design, responsive development, AI integration, SEO optimization, and ongoing support.',
  keywords: [
    'custom website development',
    'web development company Gurgaon',
    'futuristic web design',
    'responsive web development',
    'AI integration',
    'SEO optimization',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/custom-website-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/custom-website-development/About5SectionArea';
import About6SectionArea from '@/components/custom-website-development/About6SectionArea';
import ServiceSliderArea from '@/components/custom-website-development/ServiceSliderArea';
import DatabaseTechnologies from '@/components/custom-website-development/DatabaseTechnologies';
import Faq5SectionArea from '@/components/custom-website-development/Faq5SectionArea';

export default function CustomWebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Custom <span>Website Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Custom Website Development</span>
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

