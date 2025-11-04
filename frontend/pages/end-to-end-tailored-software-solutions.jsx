import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/end-to-end-tailored-software-solutions/About5SectionArea'
import Service1SectionArea from '../components/end-to-end-tailored-software-solutions/Service1SectionArea'
import Faq5SectionArea from '../components/end-to-end-tailored-software-solutions/Faq5SectionArea'

export default function EndToEndTailoredSoftwareSolutions() {
  return (
    <>
      <Head>
        <title>End-to-End Tailored Software Solutions - Akoode | Custom Software Development</title>
        <meta name="description" content="Akoode Technologies offers end-to-end tailored software solutions for businesses. Custom software development, web & mobile apps, enterprise solutions, cloud integration, UI/UX design, and maintenance support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="end-to-end software solutions, custom software development, web mobile app development, enterprise software, cloud solutions, UI UX design, software maintenance, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/end-to-end-tailored-software-solutions" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>End to End Tailored <span>Software Solutions</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>End to End Tailored Software Solutions</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/end-to-end-tailored-software-solutions.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/end-to-end-tailored-software-solutions.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/end-to-end-tailored-software-solutions.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













