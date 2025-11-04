import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInnerArea from '../components/contactus/ContactInnerArea'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Akoode | Get in Touch with Our Team</title>
        <meta name="description" content="Contact Akoode for all your software development needs. Get in touch with our expert team for AI, web development, mobile apps, and digital transformation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="contact akoode, software development contact, AI solutions contact, web development contact, mobile app development contact" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/contactus" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="inner-header text-center heading1">
                <h1>Contact <span>Us</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>Contact Us</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Inner Area - Matches akoodehtml/contactus.html */}
      <ContactInnerArea />

      <Footer />
    </>
  )
}

