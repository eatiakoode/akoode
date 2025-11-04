import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/dynamic-website-development/About5SectionArea'
import About6SectionArea from '../components/dynamic-website-development/About6SectionArea'
import ServiceSliderArea from '../components/dynamic-website-development/ServiceSliderArea'
import DatabaseTechnologies from '../components/dynamic-website-development/DatabaseTechnologies'

export default function DynamicWebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Dynamic Website Development - Akoode | Web Development Company Gurgaon</title>
        <meta name="description" content="Akoode Technologies offers dynamic website development services in Gurgaon. Custom web design, responsive development, CMS integration, SEO optimization, and ongoing support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="dynamic website development, web development company Gurgaon, custom web design, responsive web development, CMS integration, SEO optimization, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/dynamic-website-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Dynamic <span>Website Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Dynamic Website Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/dynamic-website-development.html */}
      <About5SectionArea />

      {/* Advantages Section - Matches akoodehtml/dynamic-website-development.html */}
      <About6SectionArea />

      {/* Services Section - Matches akoodehtml/dynamic-website-development.html */}
      <ServiceSliderArea />

      {/* Why Choose Us Section - Matches akoodehtml/dynamic-website-development.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}













