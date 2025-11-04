import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/native-app-development/About5SectionArea'
import MobileAppSectionArea from '../components/native-app-development/MobileAppSectionArea'
import PeopleSection from '../components/native-app-development/PeopleSection'
import Faq5SectionArea from '../components/native-app-development/Faq5SectionArea'

export default function NativeAppDevelopment() {
  return (
    <>
      <Head>
        <title>Native App Development - Akoode | iOS & Android Native Apps</title>
        <meta name="description" content="Akoode Technologies offers native app development services for iOS and Android. Custom native apps, UI/UX design, app integration, testing, migration, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="native app development, iOS app development, Android app development, native mobile apps, Swift, Kotlin, Java, Objective-C, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/native-app-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Native <span>App Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Native App Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/native-app-development.html */}
      <About5SectionArea />

      {/* Mobile App Section - Matches akoodehtml/native-app-development.html */}
      <MobileAppSectionArea />

      {/* People Section - Matches akoodehtml/native-app-development.html */}
      <PeopleSection />

      {/* FAQ Section - Matches akoodehtml/native-app-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}