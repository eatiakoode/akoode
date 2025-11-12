export const metadata = {
  title: 'Enterprise Application Development - Akoode | Custom Enterprise Software',
  description:
    'Akoode Technologies offers enterprise application development services. Custom enterprise software, mobility solutions, legacy modernization, integration services, cloud solutions, and maintenance support.',
  keywords: [
    'enterprise application development',
    'custom enterprise software',
    'enterprise mobility solutions',
    'legacy modernization',
    'enterprise integration',
    'cloud enterprise solutions',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/enterprise-application-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/enterprise-application-development/About5SectionArea';
import Service1SectionArea from '@/components/enterprise-application-development/Service1SectionArea';
import Faq5SectionArea from '@/components/enterprise-application-development/Faq5SectionArea';

export default function EnterpriseApplicationDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Enterprise Application<span> Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Enterprise Application Development</span>
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

