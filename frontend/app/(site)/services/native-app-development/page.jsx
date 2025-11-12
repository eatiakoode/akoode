export const metadata = {
  title: 'Native App Development - Akoode | iOS & Android Native Apps',
  description:
    'Akoode Technologies offers native app development services for iOS and Android. Custom native apps, UI/UX design, app integration, testing, migration, and maintenance support.',
  keywords: [
    'native app development',
    'iOS app development',
    'Android app development',
    'native mobile apps',
    'Swift',
    'Kotlin',
    'Java',
    'Objective-C',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/native-app-development',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/native-app-development/About5SectionArea';
import MobileAppSectionArea from '@/components/native-app-development/MobileAppSectionArea';
import PeopleSection from '@/components/native-app-development/PeopleSection';
import Faq5SectionArea from '@/components/native-app-development/Faq5SectionArea';

export default function NativeAppDevelopmentPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Native <span>App Development</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i> <span>Native App Development</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <MobileAppSectionArea />
      <PeopleSection />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

