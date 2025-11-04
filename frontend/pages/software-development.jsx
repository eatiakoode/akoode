import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InnerPageHero from '../components/software-development/InnerPageHero'
import ServiceSection from '../components/software-development/ServiceSection'
import ScrollSpyNav from '../components/software-development/ScrollSpyNav'
import CustomSoftwareSection from '../components/software-development/CustomSoftwareSection'
import EnterpriseSolutionSection from '../components/software-development/EnterpriseSolutionSection'
import CRMSolutionSection from '../components/software-development/CRMSolutionSection'
import FAQSection from '../components/software-development/FAQSection'

export default function SoftwareDevelopment() {

  const scrollSpySections = [
    { id: 'csd', title: 'Custom Software Development' },
    { id: 'es', title: 'Enterprise Solution' },
    { id: 'crms', title: 'CRM Solutions' }
  ];

  const faqs = [
    {
      question: "Q1. What types of software development services does Akoode Technologies offer?",
      answer: "Akoode Technologies provides a wide array of software development services, such as custom programming, enterprise application development, CRM solutions, SaaS-based development services, web and mobile application creation, user experience design (UI/UX design), quality assurance & testing procedures and IT consulting."
    },
    {
      question: "Q2. What industries does Akoode Technologies serve?",
      answer: "Akoode Technologies serves a range of industries, such as healthcare, finance & banking, retail & e-commerce, education, manufacturing, logistics & supply chain management and travel & hospitality."
    },
    {
      question: "Q3. How does Akoode Technologies ensure the quality of its software solutions?",
      answer: "Akoode Technologies employs rigorous testing techniques, both manual and automated, to guarantee reliable software solutions free from bugs. The company strives to uphold the highest industry standards for quality assurance."
    },
    {
      question: "Q4. What development methodologies does Akoode Technologies use?",
      answer: "Akoode Technologies utilizes agile development methodologies, allowing for quicker project completion and frequent updates to software solutions to accommodate changing client demands."
    },
    {
      question: "Q5. How does Akoode Technologies ensure the security and compliance of its software solutions?",
      answer: "Akoode Technologies adheres to stringent security protocols and industry best practices in order to guarantee its software solutions are secure and compliant with relevant regulations. This dedication to security helps protect customers' data, decreasing the potential risk of breaches."
    },
    {
      question: "Q6. Can Akoode Technologies develop software solutions for both web and mobile platforms?",
      answer: "Akoode Technologies specializes in creating responsive web applications and mobile apps for iOS and Android platforms, providing a unified user experience and robust functionality across devices."
    },
    {
      question: "Q7. How does Akoode Technologies handle project communication and collaboration with clients?",
      answer: "Akoode Technologies prioritizes client satisfaction by working closely with them throughout the development process. To guarantee smooth collaboration and regular updates on project progress, Akoode Technologies utilizes various communication channels like email, phone calls, and video conferencing for client updates."
    },
    {
      question: "Q8. What is Akoode Technologies's pricing structure?",
      answer: "Akoode Technologies offers competitive pricing and customizable engagement models to ensure clients get the most for their investment. Pricing is determined by factors such as project scope, complexity, and duration; for more specific pricing information, clients are encouraged to contact Akoode Technologies for a personalized quote."
    },
    {
      question: "Q9. How can I get started with Akoode Technologies for my software development project?",
      answer: "To get started, contact Akoode Technologies through their website, email or phone. A representative will review your project requirements, timeline and budget to create a tailored proposal tailored to your requirements."
    }
  ];

  return (
    <>
      <Head>
        <title>Akoode - Software Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <InnerPageHero 
        title="Software"
        subtitle="Development"
        breadcrumb={{
          homeLink: "/",
          homeText: "Home",
          currentPage: "Software Development"
        }}
      />

      {/* Service Header Section */}
      <ServiceSection 
        title="Best Software Development Company in Gurgaon | India"
        description="Akoode Technologies is a best software development company in India based out of Gurgaon that offers custom software, enterprise software, CRM solutions and SaaS-based development services to businesses and organizations around the world. Our team of talented developers and designers work together to produce high-quality software products tailored to our clients' specific needs and specifications."
      />

      {/* ScrollSpy Navigation */}
      <ScrollSpyNav sections={scrollSpySections} />

      {/* Custom Software Development Section */}
      <CustomSoftwareSection />

      {/* Enterprise Solution Section */}
      <EnterpriseSolutionSection />

      {/* CRM Solutions Section */}
      <CRMSolutionSection />

      {/* FAQ Section */}
      <FAQSection 
        title="FAQs"
        subtitle="Your questions answered. Find all the details you need"
        faqs={faqs}
      />

      <Footer />
    </>
  )
}
