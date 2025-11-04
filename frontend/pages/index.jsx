import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/home/HeroSection'
import FeatureSection from '../components/home/FeatureSection'
import ServiceSection from '../components/home/ServiceSection'
import IndustriesSection from '../components/home/IndustriesSection'
import Technology1Section from '../components/home/Technology1Section'
import TestimonialSection from '../components/home/TestimonialSection'
import CaseStudySection from '../components/home/CaseStudySection'
import FAQSection from '../components/home/FAQSection'
import AboutSection from '../components/home/AboutSection'
import BlogSection from '../components/home/BlogSection'
import Footer from '../components/Footer'

import { getBlogTableData } from "../api/frontend/blog";
import { getFaqTableDataFeatured } from "../api/frontend/faq";
import { getCasestudyTableDataFeatured } from "../api/frontend/case-study";

export default function Home({ bloglist, faqlist, casestudylist }) {
  
  return (
    <>
      <Head>
        <title>Akoode - Home Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <IndustriesSection />
      <Technology1Section />
      <TestimonialSection />
      <CaseStudySection casestudylist={casestudylist}/>
      <FAQSection faqlist={faqlist}/>
      <AboutSection />
      <BlogSection bloglist={bloglist}/>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  try {
    let filter = {
      istrending: "yes",
      limit: 9,
      page: 1
    }
    const [BloglistRes, FaqlistRes, CasestudylistRes] = await Promise.all([
      getBlogTableData(),
      getFaqTableDataFeatured(),
      getCasestudyTableDataFeatured(),
      // getTestimonialTableData(),
      // getCityWithPropertyPage(),
      // getLocationTableData(filter),
    ]);
    const bloglist = BloglistRes?.data || [];
    const faqlist = FaqlistRes?.data || [];
    const casestudylist = CasestudylistRes?.data || [];
    
    return {
      props: {
        bloglist,
        faqlist,
        casestudylist
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        bloglist: [],
        faqlist: [],  
        casestudylist: [],
      },
    }
  }
}


