import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/custom-website-development/About5SectionArea'
import About6SectionArea from '../components/custom-website-development/About6SectionArea'
import ServiceSliderArea from '../components/custom-website-development/ServiceSliderArea'
import DatabaseTechnologies from '../components/custom-website-development/DatabaseTechnologies'
import Faq5SectionArea from '../components/custom-website-development/Faq5SectionArea'

export default function CustomWebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Custom Website Development - Akoode | Web Development Company Gurgaon</title>
        <meta name="description" content="Akoode Technologies offers custom website development services in Gurgaon. Futuristic web design, responsive development, AI integration, SEO optimization, and ongoing support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="custom website development, web development company Gurgaon, futuristic web design, responsive web development, AI integration, SEO optimization, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/custom-website-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Custom <span>Website Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Custom Website Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/custom-website-development.html */}
      <About5SectionArea />

      {/* Benefits Section - Matches akoodehtml/custom-website-development.html */}
      <About6SectionArea />

      {/* Services Section - Matches akoodehtml/custom-website-development.html */}
      <ServiceSliderArea />

      {/* Why Choose Us Section - Matches akoodehtml/custom-website-development.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/custom-website-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













