export const metadata = {
  title: 'Dynamic Website Development - Akoode | Web Development Company Gurgaon',
  description:
    'Akoode Technologies offers dynamic website development services in Gurgaon. Custom web design, responsive development, CMS integration, SEO optimization, and ongoing support.',
  keywords: [
    'dynamic website development',
    'web development company Gurgaon',
    'custom web design',
    'responsive web development',
    'CMS integration',
    'SEO optimization',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/dynamic-website-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/dynamic-website-development/About5SectionArea';
import About6SectionArea from '@/components/dynamic-website-development/About6SectionArea';
import ServiceSliderArea from '@/components/dynamic-website-development/ServiceSliderArea';
import DatabaseTechnologies from '@/components/dynamic-website-development/DatabaseTechnologies';

export default function DynamicWebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Dynamic <span>Website Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Dynamic Website Development</span>
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

      <Footer />
    </>
  );
}

