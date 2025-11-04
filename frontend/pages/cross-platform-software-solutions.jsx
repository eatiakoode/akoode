import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/cross-platform-software-solutions/About5SectionArea'
import Service1SectionArea from '../components/cross-platform-software-solutions/Service1SectionArea'
import Faq5SectionArea from '../components/cross-platform-software-solutions/Faq5SectionArea'

export default function CrossPlatformSoftwareSolutions() {
  return (
    <>
      <Head>
        <title>Cross Platform Software Solutions - Akoode | Multi-Platform Development</title>
        <meta name="description" content="Akoode Technologies offers cross-platform software solutions. Custom cross-platform app development, UI/UX design, hybrid frameworks, third-party integrations, cloud deployment, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="cross-platform software solutions, cross-platform app development, hybrid frameworks, React Native, Flutter, Xamarin, multi-platform development, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/cross-platform-software-solutions" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Cross Platform <span>Software Solutions</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Cross Platform Software Solutions</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/cross-platform-software-solutions.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/cross-platform-software-solutions.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/cross-platform-software-solutions.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













