import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/opencart-development-company-india/About5SectionArea'
import Team1SectionArea from '../components/opencart-development-company-india/Team1SectionArea'
import Service1SectionArea from '../components/opencart-development-company-india/Service1SectionArea'
import DatabaseTechnologies from '../components/opencart-development-company-india/DatabaseTechnologies'

export default function OpenCartDevelopmentCompanyIndia() {
  return (
    <>
      <Head>
        <title>Best Ecommerce Website Opencart Designing in India - Akoode Technologies</title>
        <meta name="description" content="Akoode Technologies is an award-winning Opencart eCommerce development company in India. We provide superior, scalable, and budget-friendly eCommerce solutions with custom online stores." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Opencart development company India, best ecommerce website opencart designing, Opencart eCommerce development, custom Opencart store, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/opencart-development-company-india" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Best Ecommerce Website Opencart <span>Designing in India</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Best Ecommerce Website Opencart Designing in India</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/opencart-development-company-india.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/opencart-development-company-india.html */}
      <Team1SectionArea />

      {/* Additional Services Section - Matches akoodehtml/opencart-development-company-india.html */}
      <Service1SectionArea />

      {/* Why Choose Us Section - Matches akoodehtml/opencart-development-company-india.html */}
      <DatabaseTechnologies />

      <Footer />
    </>
  )
}












