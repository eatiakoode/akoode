export const metadata = {
  title: 'Blog - Akoode | Latest Technology Insights and News',
  description:
    'Read the latest blog posts from Akoode covering AI, software development, mobile apps, web development, and technology trends. Stay updated with industry insights.',
  keywords: [
    'akoode blog',
    'technology blog',
    'AI blog',
    'software development blog',
    'mobile app development blog',
    'web development blog',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/blog',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/career/About5SectionArea';

export default function CareerPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Career</h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Career</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />

      <Footer />
    </>
  );
}
