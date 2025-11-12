export const metadata = {
  title: 'MVP Development for Startups - Akoode | Minimum Viable Product',
  description:
    'Akoode Technologies offers MVP development services for startups. Custom MVP development, UI/UX design, prototype development, rapid deployment, integration services, and post-MVP support.',
  keywords: [
    'MVP development for startups',
    'minimum viable product',
    'custom MVP development',
    'MVP UI UX design',
    'prototype development',
    'rapid MVP deployment',
    'MVP integration',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/mvp-development-for-startups',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/mvp-development-for-startups/About5SectionArea';
import Service1SectionArea from '@/components/mvp-development-for-startups/Service1SectionArea';
import Faq5SectionArea from '@/components/mvp-development-for-startups/Faq5SectionArea';

export default function MvpDevelopmentForStartupsPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  MVP Development for <span>Startups</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>MVP Development for Startups</span>
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

