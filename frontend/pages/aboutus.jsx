import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About6SectionWidget from '../components/aboutus/About6SectionWidget'
import Service2SectionArea from '../components/aboutus/Service2SectionArea'
import Work5SectionArea from '../components/aboutus/Work5SectionArea'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Akoode | Leading Software Development Company</title>
        <meta name="description" content="Learn about Akoode, a leading software development company specializing in AI, web development, mobile apps, and digital transformation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="about akoode, software development company, AI solutions, web development, mobile app development" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/aboutus" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>About <span>Us</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>About Us</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About6 Section Widget - Matches akoodehtml/aboutus.html */}
      <About6SectionWidget />

      {/* Service2 Section Area - Matches akoodehtml/aboutus.html */}
      <Service2SectionArea />

      {/* Work5 Section Area - Matches akoodehtml/aboutus.html */}
      <Work5SectionArea />

      

      <Footer />
    </>
  )
}
