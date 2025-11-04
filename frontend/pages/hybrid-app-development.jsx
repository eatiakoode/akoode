import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/hybrid-app-development/About5SectionArea'
import MobileAppSectionArea from '../components/hybrid-app-development/MobileAppSectionArea'
import PeopleSection from '../components/hybrid-app-development/PeopleSection'
import Faq5SectionArea from '../components/hybrid-app-development/Faq5SectionArea'

export default function HybridAppDevelopment() {
  return (
    <>
      <Head>
        <title>Hybrid App Development - Akoode | Cross-Platform Mobile Apps</title>
        <meta name="description" content="Akoode Technologies offers hybrid app development services for iOS and Android. Custom hybrid apps, UI/UX design, app integration, testing, migration, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="hybrid app development, cross-platform mobile apps, hybrid mobile development, React Native, Flutter, Ionic, Cordova, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/hybrid-app-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Hybrid <span>App Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Hybrid App Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/hybrid-app-development.html */}
      <About5SectionArea />

      {/* Mobile App Section - Matches akoodehtml/hybrid-app-development.html */}
      <MobileAppSectionArea />

      {/* People Section - Matches akoodehtml/hybrid-app-development.html */}
      <PeopleSection />

      {/* FAQ Section - Matches akoodehtml/hybrid-app-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}