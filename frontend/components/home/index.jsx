import Head from 'next/head'
import Header from '@/components/'
import HeroSection from '@/components/home/HeroSection'
import FeatureSection from '@/components/home/FeatureSection'
import ServiceSection from '@/components/home/ServiceSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import Technology1Section from '@components/home/Technology1Section'
import TestimonialSection from '@/components/home/TestimonialSection'
import CaseStudySection from '@/components/home/CaseStudySection'
import FAQSection from '@/components/home/FAQSection'
import AboutSection from '@/components/home/AboutSection'
import BlogSection from '@/components/home/BlogSection'
import Footer from '@/components/Footer'

export default function Home() {
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
      <CaseStudySection />
      <FAQSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </>
  )
}


