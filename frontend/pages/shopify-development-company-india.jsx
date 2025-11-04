import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/shopify-development-company-india/About5SectionArea'
import Team1SectionArea from '../components/shopify-development-company-india/Team1SectionArea'
import Service1SectionArea from '../components/shopify-development-company-india/Service1SectionArea'
import DatabaseTechnologies from '../components/shopify-development-company-india/DatabaseTechnologies'

export default function ShopifyDevelopmentCompanyIndia() {
  return (
    <>
      <Head>
        <title>Shopify Development in India - Akoode Technologies | Custom Shopify Store Development</title>
        <meta name="description" content="Akoode Technologies is an esteemed Shopify development company in India. We create powerful, feature-rich online stores with custom Shopify development services tailored to your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Shopify development company India, custom Shopify store development, Shopify development services, Shopify theme design, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/shopify-development-company-india" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Shopify Development <span>in India</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Shopify Development in India</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/shopify-development-company-india.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/shopify-development-company-india.html */}
      <Team1SectionArea />

      {/* Additional Services Section - Matches akoodehtml/shopify-development-company-india.html */}
      <Service1SectionArea />

      {/* Why Choose Us Section - Matches akoodehtml/shopify-development-company-india.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}












