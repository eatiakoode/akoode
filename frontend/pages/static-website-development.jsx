import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/static-website-development/About5SectionArea'
import About6SectionArea from '../components/static-website-development/About6SectionArea'
import ServiceSliderArea from '../components/static-website-development/ServiceSliderArea'
import DatabaseTechnologies from '../components/static-website-development/DatabaseTechnologies'

export default function StaticWebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Static Website Development - Akoode | Web Development Company Gurgaon</title>
        <meta name="description" content="Akoode Technologies offers static website development services in Gurgaon. Fast performance, enhanced security, cost-effective solutions, custom web design, responsive development, and SEO optimization." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="static website development, web development company Gurgaon, custom web design, responsive web development, SEO optimization, cost-effective websites, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/static-website-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Static <span>Website Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Static Website Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/static-website-development.html */}
      <About5SectionArea />

      {/* Advantages Section - Matches akoodehtml/static-website-development.html */}
      <About6SectionArea />

      {/* Services Section - Matches akoodehtml/static-website-development.html */}
      <ServiceSliderArea />

      {/* Why Choose Us Section - Matches akoodehtml/static-website-development.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}













