import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InnerPageHero from '../components/web-development-technology/InnerPageHero'
import AboutSection from '../components/web-development-technology/AboutSection'
import FrontendTechnologiesSection from '../components/web-development-technology/FrontendTechnologiesSection'
import BackendTechnologiesSection from '../components/web-development-technology/BackendTechnologiesSection'
import DatabaseTechnologiesSection from '../components/web-development-technology/DatabaseTechnologiesSection'

export default function WebDevelopmentTechnology() {

  return (
    <>
      <Head>
        <title>Akoode - Web Development Technology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <InnerPageHero 
        title="Web"
        subtitle="Development Technology"
        breadcrumb={{
          homeLink: "/",
          homeText: "Home",
          currentPage: "Web Development Technology"
        }}
      />

      {/* About Section */}
      <AboutSection 
        title="Empowering The Future"
        subtitle="A Comprehensive Guide by Akoode Technologies"
        description="Acquiring a website requires the correct combination of technologies, each serving an important role in the creation process. Akoode Technologies boasts expertise across over 20 website development technologies, guaranteeing your website is built using only top quality tools. This comprehensive guide outlines our selection of technologies as well as their advantages and use cases so you can make an informed decision for your next web project."
        buttonText="Get a Quote"
        buttonLink="blog1.html"
        imageSrc="/images/web-dev/web-dev.webp"
        imageAlt="Web Development Technology"
      />

      {/* Frontend Technologies Section */}
      <FrontendTechnologiesSection />

      {/* Backend Technologies Section */}
      <BackendTechnologiesSection />

      {/* Database Technologies Section */}
      <DatabaseTechnologiesSection />

      <Footer />
    </>
  )
}
