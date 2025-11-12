export const metadata = {
  title: 'End-to-End Tailored Software Solutions - Akoode | Custom Software Development',
  description:
    'Akoode Technologies offers end-to-end tailored software solutions for businesses. Custom software development, web & mobile apps, enterprise solutions, cloud integration, UI/UX design, and maintenance support.',
  keywords: [
    'end-to-end software solutions',
    'custom software development',
    'web mobile app development',
    'enterprise software',
    'cloud solutions',
    'UI UX design',
    'software maintenance',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/end-to-end-tailored-software-solutions',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/end-to-end-tailored-software-solutions/About5SectionArea';
import Service1SectionArea from '@/components/end-to-end-tailored-software-solutions/Service1SectionArea';
import Faq5SectionArea from '@/components/end-to-end-tailored-software-solutions/Faq5SectionArea';

export default function EndToEndTailoredSoftwareSolutionsPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  End to End Tailored <span>Software Solutions</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>End to End Tailored Software Solutions</span>
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

