import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/mvp-development-for-startups/About5SectionArea'
import Service1SectionArea from '../components/mvp-development-for-startups/Service1SectionArea'
import Faq5SectionArea from '../components/mvp-development-for-startups/Faq5SectionArea'

export default function MvpDevelopmentForStartups() {
  return (
    <>
      <Head>
        <title>MVP Development for Startups - Akoode | Minimum Viable Product</title>
        <meta name="description" content="Akoode Technologies offers MVP development services for startups. Custom MVP development, UI/UX design, prototype development, rapid deployment, integration services, and post-MVP support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="MVP development for startups, minimum viable product, custom MVP development, MVP UI UX design, prototype development, rapid MVP deployment, MVP integration, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/mvp-development-for-startups" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>MVP Development for <span>Startups</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>MVP Development for Startups</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/mvp-development-for-startups.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/mvp-development-for-startups.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/mvp-development-for-startups.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













