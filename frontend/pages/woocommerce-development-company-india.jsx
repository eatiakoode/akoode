import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/woocommerce-development-company-india/About5SectionArea'
import Team1SectionArea from '../components/woocommerce-development-company-india/Team1SectionArea'
import Service1SectionArea from '../components/woocommerce-development-company-india/Service1SectionArea'
import DatabaseTechnologies from '../components/woocommerce-development-company-india/DatabaseTechnologies'

export default function WooCommerceDevelopmentCompanyIndia() {
  return (
    <>
      <Head>
        <title>eCommerce Website in WooCommerce India Gurgaon - Akoode Technologies</title>
        <meta name="description" content="Akoode Technologies is an expert WooCommerce development company in India. We create feature-rich, SEO-friendly, customized WooCommerce solutions in Gurgaon for your eCommerce business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="WooCommerce development company India, eCommerce website development Gurgaon, WooCommerce development services, custom WooCommerce store, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/woocommerce-development-company-india" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>eCommerce Website in WooCommerce <span>India Gurgaon</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>eCommerce Website in WooCommerce India Gurgaon</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/woocommerce-development-company-india.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/woocommerce-development-company-india.html */}
      <Team1SectionArea />

      {/* Additional Services Section - Matches akoodehtml/woocommerce-development-company-india.html */}
      <Service1SectionArea />

      {/* Why Choose Us Section - Matches akoodehtml/woocommerce-development-company-india.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}












