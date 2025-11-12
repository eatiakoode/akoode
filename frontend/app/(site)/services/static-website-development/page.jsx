export const metadata = {
  title: 'Static Website Development - Akoode | Web Development Company Gurgaon',
  description:
    'Akoode Technologies offers static website development services in Gurgaon. Fast performance, enhanced security, cost-effective solutions, custom web design, responsive development, and SEO optimization.',
  keywords: [
    'static website development',
    'web development company Gurgaon',
    'custom web design',
    'responsive web development',
    'SEO optimization',
    'cost-effective websites',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/static-website-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/static-website-development/About5SectionArea';
import About6SectionArea from '@/components/static-website-development/About6SectionArea';
import ServiceSliderArea from '@/components/static-website-development/ServiceSliderArea';
import DatabaseTechnologies from '@/components/static-website-development/DatabaseTechnologies';

export default function StaticWebsiteDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Static <span>Website Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Static Website Development</span>
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

