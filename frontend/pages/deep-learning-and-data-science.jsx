import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/deep-learning-and-data-science/About5SectionArea'
import Service1SectionArea from '../components/deep-learning-and-data-science/Service1SectionArea'
import DatabaseTechnologies from '../components/deep-learning-and-data-science/DatabaseTechnologies'
import Faq5SectionArea from '../components/deep-learning-and-data-science/Faq5SectionArea'

export default function DeepLearningAndDataScience() {
  return (
    <>
      <Head>
        <title>Deep Learning and Data Science Services - Akoode | AI Solutions Company</title>
        <meta name="description" content="Akoode Technologies provides cutting-edge deep learning and data science solutions. Expert AI company in India offering predictive analytics, NLP, and machine learning services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="deep learning, data science, predictive analytics, natural language processing, machine learning, AI solutions, Akoode Technologies" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/deep-learning-and-data-science" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Deep Learning and <span>Data Science</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Deep Learning and Data Science</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/deep-learning-and-data-science.html */}
      <About5SectionArea />

      {/* Services Section - Matches akoodehtml/deep-learning-and-data-science.html */}
      <Service1SectionArea />

      {/* Database Technologies Section - Matches akoodehtml/deep-learning-and-data-science.html */}
      <DatabaseTechnologies />

      {/* FAQ Section - Matches akoodehtml/deep-learning-and-data-science.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}


