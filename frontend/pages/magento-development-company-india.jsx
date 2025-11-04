import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/magento-development-company-india/About5SectionArea'
import Team1SectionArea from '../components/magento-development-company-india/Team1SectionArea'
import Service1SectionArea from '../components/magento-development-company-india/Service1SectionArea'
import DatabaseTechnologies from '../components/magento-development-company-india/DatabaseTechnologies'

export default function MagentoDevelopmentCompanyIndia() {
  return (
    <>
      <Head>
        <title>Best Magento Development in India - Akoode Technologies | Magento eCommerce Development</title>
        <meta name="description" content="Akoode Technologies is a renowned Magento eCommerce development company in India. We deliver high-quality, scalable, and secure eCommerce solutions with experienced Magento developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Magento development company India, best Magento development, Magento eCommerce development, custom Magento store, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/magento-development-company-india" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Best Magento Development <span>in India</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Best Magento Development in India</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/magento-development-company-india.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/magento-development-company-india.html */}
      <Team1SectionArea />

      {/* Additional Services Section - Matches akoodehtml/magento-development-company-india.html */}
      <Service1SectionArea />

      {/* Why Choose Us Section - Matches akoodehtml/magento-development-company-india.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}












