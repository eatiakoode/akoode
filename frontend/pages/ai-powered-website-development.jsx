import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/ai-powered-website-development/About5SectionArea'
import About6SectionArea from '../components/ai-powered-website-development/About6SectionArea'
import ServiceSliderArea from '../components/ai-powered-website-development/ServiceSliderArea'
import DatabaseTechnologies from '../components/ai-powered-website-development/DatabaseTechnologies'
import Faq5SectionArea from '../components/ai-powered-website-development/Faq5SectionArea'

export default function AiPoweredWebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>AI-Powered Website Development - Akoode | Web Development Company Gurgaon</title>
        <meta name="description" content="Akoode Technologies offers AI-powered website development services in Gurgaon. Personalized user experience, automated customer support, data-driven insights, and cutting-edge AI technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="AI-powered website development, artificial intelligence web development, personalized user experience, AI chatbots, machine learning websites, Akoode Technologies Gurgaon" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/ai-powered-website-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Ai Powered <span>Website Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Ai Powered Website Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/ai-powered-website-development.html */}
      <About5SectionArea />

      {/* Advantages Section - Matches akoodehtml/ai-powered-website-development.html */}
      <About6SectionArea />

      {/* Services Section - Matches akoodehtml/ai-powered-website-development.html */}
      <ServiceSliderArea />

      {/* Why Choose Us Section - Matches akoodehtml/ai-powered-website-development.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/ai-powered-website-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













