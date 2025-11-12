export const metadata = {
  title: 'Best Ecommerce Website Opencart Designing in India - Akoode Technologies',
  description:
    'Akoode Technologies is an award-winning Opencart eCommerce development company in India. We provide superior, scalable, and budget-friendly eCommerce solutions with custom online stores.',
  keywords: [
    'Opencart development company India',
    'best ecommerce website opencart designing',
    'Opencart eCommerce development',
    'custom Opencart store',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/opencart-development-company-india',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/opencart-development-company-india/About5SectionArea';
import Team1SectionArea from '@/components/opencart-development-company-india/Team1SectionArea';
import Service1SectionArea from '@/components/opencart-development-company-india/Service1SectionArea';
import DatabaseTechnologies from '@/components/opencart-development-company-india/DatabaseTechnologies';

export default function OpenCartDevelopmentCompanyIndiaPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Best Ecommerce Website Opencart <span>Designing in India</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Best Ecommerce Website Opencart Designing in India</span>
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

