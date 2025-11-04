import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/full-stack-website-development/About5SectionArea'
import About6SectionArea from '../components/full-stack-website-development/About6SectionArea'
import ServiceSliderArea from '../components/full-stack-website-development/ServiceSliderArea'
import DatabaseTechnologies from '../components/full-stack-website-development/DatabaseTechnologies'
import Faq5SectionArea from '../components/full-stack-website-development/Faq5SectionArea'

export default function FullStackWebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Full Stack Website Development - Akoode | Web Development Company Gurgaon</title>
        <meta name="description" content="Akoode Technologies offers full stack website development services in Gurgaon. Complete web applications with front-end and back-end development, AI integration, and progressive web apps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="full stack website development, web development company Gurgaon, front-end back-end development, AI integration, progressive web apps, custom web applications, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/full-stack-website-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Full Stack <span>Website Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Full Stack Website Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/full-stack-website-development.html */}
      <About5SectionArea />

      {/* Benefits Section - Matches akoodehtml/full-stack-website-development.html */}
      <About6SectionArea />

      {/* Services Section - Matches akoodehtml/full-stack-website-development.html */}
      <ServiceSliderArea />

      {/* Why Choose Us Section - Matches akoodehtml/full-stack-website-development.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/full-stack-website-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













