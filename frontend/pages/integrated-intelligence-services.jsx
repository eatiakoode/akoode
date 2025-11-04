import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/integrated-intelligence-services/About5SectionArea'
import Service1SectionArea from '../components/integrated-intelligence-services/Service1SectionArea'
import DatabaseTechnologies from '../components/integrated-intelligence-services/DatabaseTechnologies'
import Faq5SectionArea from '../components/integrated-intelligence-services/Faq5SectionArea'

export default function IntegratedIntelligenceServices() {
  return (
    <>
      <Head>
        <title>Best Artificial Intelligence Company in India - Akoode | Integrated Intelligence Services</title>
        <meta name="description" content="Akoode Technologies is the best AI company in India offering integrated intelligence services. Expert AI solutions, machine learning, NLP, RPA, and business intelligence services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="best AI company India, integrated intelligence services, artificial intelligence solutions, machine learning, NLP, RPA, business intelligence, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/integrated-intelligence-services" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Best Artificial Intelligence <span>Company in India</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Best Artificial Intelligence Company in India</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/integrated-intelligence-services.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/integrated-intelligence-services.html */}
      <Service1SectionArea />

      {/* Database Technologies Section - Matches akoodehtml/integrated-intelligence-services.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/integrated-intelligence-services.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}


