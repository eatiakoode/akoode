export const metadata = {
  title: 'About Us - Akoode | Leading Software Development Company',
  description:
    'Learn about Akoode, a leading software development company specializing in AI, web development, mobile apps, and digital transformation solutions.',
  keywords: [
    'about akoode',
    'software development company',
    'AI solutions',
    'web development',
    'mobile app development',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/aboutus',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About6SectionWidget from '@/components/aboutus/About6SectionWidget';
import Service2SectionArea from '@/components/aboutus/Service2SectionArea';
import Work5SectionArea from '@/components/aboutus/Work5SectionArea';

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  About <span>Us</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About6SectionWidget />
      <Service2SectionArea />
      <Work5SectionArea />

      <Footer />
    </>
  );
}

