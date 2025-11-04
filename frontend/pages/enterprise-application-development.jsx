import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/enterprise-application-development/About5SectionArea'
import Service1SectionArea from '../components/enterprise-application-development/Service1SectionArea'
import Faq5SectionArea from '../components/enterprise-application-development/Faq5SectionArea'

export default function EnterpriseApplicationDevelopment() {
  return (
    <>
      <Head>
        <title>Enterprise Application Development - Akoode | Custom Enterprise Software</title>
        <meta name="description" content="Akoode Technologies offers enterprise application development services. Custom enterprise software, mobility solutions, legacy modernization, integration services, cloud solutions, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="enterprise application development, custom enterprise software, enterprise mobility solutions, legacy modernization, enterprise integration, cloud enterprise solutions, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/enterprise-application-development" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Enterprise Application<span> Development</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Enterprise Application Development</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/enterprise-application-development.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/enterprise-application-development.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/enterprise-application-development.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













