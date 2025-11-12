export const metadata = {
  title: 'Contact Us - Akoode | Get in Touch with Our Team',
  description:
    'Contact Akoode for all your software development needs. Get in touch with our expert team for AI, web development, mobile apps, and digital transformation solutions.',
  keywords: [
    'contact akoode',
    'software development contact',
    'AI solutions contact',
    'web development contact',
    'mobile app development contact',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/contactus',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactInnerArea from '@/components/contactus/ContactInnerArea';

export default function ContactUsPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Contact <span>Us</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactInnerArea />

      <Footer />
    </>
  );
}

