import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/artificial-intelligence/About5SectionArea'
import Service1SectionArea from '../components/artificial-intelligence/Service1SectionArea'
import Faq5SectionArea from '../components/artificial-intelligence/Faq5SectionArea'

export default function ArtificialIntelligence() {
  return (
    <>
      <Head>
        <title>Artificial Intelligence Services - Akoode | AI Solutions Company in Gurgaon</title>
        <meta name="description" content="Akoode Technologies delivers cutting-edge AI services including deep learning, data science, computer vision, and generative AI integration. Premier AI company in India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="artificial intelligence, AI services, deep learning, data science, computer vision, generative AI, AI company India, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/artificial-intelligence" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Artificial <span>Intelligence</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Artificial Intelligence</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/artificial-intelligence.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/artificial-intelligence.html */}
      <Service1SectionArea />

      {/* FAQ Section - Matches akoodehtml/artificial-intelligence.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}
