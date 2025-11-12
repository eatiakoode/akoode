export const metadata = {
  title: 'SaaS Product Development - Akoode | Custom SaaS Applications',
  description:
    'Akoode Technologies offers SaaS product development services. Custom SaaS applications, UI/UX design, multi-tenant architecture, integration services, cloud hosting, and maintenance support.',
  keywords: [
    'SaaS product development',
    'custom SaaS applications',
    'SaaS UI UX design',
    'multi-tenant architecture',
    'SaaS integration',
    'cloud hosting',
    'SaaS maintenance',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/saas-product-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/services/saas-product-development/About5SectionArea';
import Service1SectionArea from '@/components/services/saas-product-development/Service1SectionArea';
import Faq5SectionArea from '@/components/services/saas-product-development/Faq5SectionArea';

export default function SaasProductDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Saas Product <span>Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Saas Product Development</span>
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

