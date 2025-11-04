import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/pioneering-generative-ai-integration/About5SectionArea'
import Service1SectionArea from '../components/pioneering-generative-ai-integration/Service1SectionArea'
import DatabaseTechnologies from '../components/pioneering-generative-ai-integration/DatabaseTechnologies'
import Faq5SectionArea from '../components/pioneering-generative-ai-integration/Faq5SectionArea'

export default function PioneeringGenerativeAiIntegration() {
  return (
    <>
      <Head>
        <title>Generative AI Integration Solutions - Akoode | Pioneering AI Company India</title>
        <meta name="description" content="Akoode Technologies is the leading Generative AI solution provider in India offering pioneering AI integration solutions. Content generation, design generation, data synthesis, and customized AI solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="generative AI solutions, AI integration, content generation, design generation, data synthesis, AI company India, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/pioneering-generative-ai-integration" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Generative AI - <span>NLP Services</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Generative AI - NLP Services</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/pioneering-generative-ai-integration.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/pioneering-generative-ai-integration.html */}
      <Service1SectionArea />

      {/* Database Technologies Section - Matches akoodehtml/pioneering-generative-ai-integration.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/pioneering-generative-ai-integration.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}













