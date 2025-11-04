import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/saas-product-development/About5SectionArea'
import Service1SectionArea from '../components/saas-product-development/Service1SectionArea'
import Faq5SectionArea from '../components/saas-product-development/Faq5SectionArea'

export default function SaasProductDevelopment() {
  return (
    <>
      <Head>
        <title>SaaS Product Development - Akoode | Custom SaaS Applications</title>
        <meta name="description" content="Akoode Technologies offers SaaS product development services. Custom SaaS applications, UI/UX design, multi-tenant architecture, integration services, cloud hosting, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="SaaS product development, custom SaaS applications, SaaS UI UX design, multi-tenant architecture, SaaS integration, cloud hosting, SaaS maintenance, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/saas-product-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Saas Product <span>Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Saas Product Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/saas-product-development.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/saas-product-development.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/saas-product-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













