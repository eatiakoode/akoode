export const metadata = {
  title: 'Shopify Development in India - Akoode Technologies | Custom Shopify Store Development',
  description:
    'Akoode Technologies is an esteemed Shopify development company in India. We create powerful, feature-rich online stores with custom Shopify development services tailored to your business needs.',
  keywords: [
    'Shopify development company India',
    'custom Shopify store development',
    'Shopify development services',
    'Shopify theme design',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/shopify-development-company-india',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/shopify-development-company-india/About5SectionArea';
import Team1SectionArea from '@/components/shopify-development-company-india/Team1SectionArea';
import Service1SectionArea from '@/components/shopify-development-company-india/Service1SectionArea';
import DatabaseTechnologies from '@/components/shopify-development-company-india/DatabaseTechnologies';

export default function ShopifyDevelopmentCompanyIndiaPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Shopify Development <span>in India</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Shopify Development in India</span>
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

