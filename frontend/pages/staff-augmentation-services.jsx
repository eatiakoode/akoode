import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About5SectionArea from '../components/staff-augmentation-services/About5SectionArea'
import Team1SectionArea from '../components/staff-augmentation-services/Team1SectionArea'
import Service1SectionArea from '../components/staff-augmentation-services/Service1SectionArea'
import DatabaseTechnologies from '../components/staff-augmentation-services/DatabaseTechnologies'
import About6SectionArea from '../components/staff-augmentation-services/About6SectionArea'
import Faq5SectionArea from '../components/staff-augmentation-services/Faq5SectionArea'

export default function StaffAugmentationServices() {
  return (
    <>
      <Head>
        <title>IT Staff Augmentation Services - Akoode | Hire Tech Experts Temporarily</title>
        <meta name="description" content="Akoode Technologies offers IT staff augmentation services in Gurgaon. Hire skilled tech experts temporarily to scale your team, reduce costs, and accelerate project delivery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="IT staff augmentation services, hire tech experts temporarily, contractual staffing, IT staffing services, Akoode Technologies Gurgaon" />
        <meta name="author" content="Akoode" />
        <link rel="canonical" href="https://www.akoode.com/staff-augmentation-services" />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>IT Staff Augmentation <span>Services</span></h1>
                <div className="space28"></div>
                <a href="/">Home <i className="fa-solid fa-angle-right"></i> <span>IT Staff Augmentation Services</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Matches akoodehtml/staff-augmentation-services.html */}
      <About5SectionArea />

      {/* Team Section - Matches akoodehtml/staff-augmentation-services.html */}
      <Team1SectionArea />

      {/* Services Section - Matches akoodehtml/staff-augmentation-services.html */}
      <Service1SectionArea />

      {/* Process Section - Matches akoodehtml/staff-augmentation-services.html */}
      <DatabaseTechnologies />

      {/* Models Section - Matches akoodehtml/staff-augmentation-services.html */}
      <About6SectionArea />

      {/* FAQ Section - Matches akoodehtml/staff-augmentation-services.html */}
      <Faq5SectionArea />

      <Footer />
    </>
  )
}












