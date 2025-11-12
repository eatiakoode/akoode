export const metadata = {
  title: 'eCommerce Website in WooCommerce India Gurgaon - Akoode Technologies',
  description:
    'Akoode Technologies is an expert WooCommerce development company in India. We create feature-rich, SEO-friendly, customized WooCommerce solutions in Gurgaon for your eCommerce business.',
  keywords: [
    'WooCommerce development company India',
    'eCommerce website development Gurgaon',
    'WooCommerce development services',
    'custom WooCommerce store',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/woocommerce-development-company-india',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/woocommerce-development-company-india/About5SectionArea';
import Team1SectionArea from '@/components/woocommerce-development-company-india/Team1SectionArea';
import Service1SectionArea from '@/components/woocommerce-development-company-india/Service1SectionArea';
import DatabaseTechnologies from '@/components/woocommerce-development-company-india/DatabaseTechnologies';

export default function WooCommerceDevelopmentCompanyIndiaPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  eCommerce Website in WooCommerce <span>India Gurgaon</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>eCommerce Website in WooCommerce India Gurgaon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Team1SectionArea />
      <Service1SectionArea />
      <DatabaseTechnologies />

      <Footer />
    </>
  );
}

