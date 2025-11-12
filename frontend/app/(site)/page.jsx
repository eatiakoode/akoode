import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import ServiceSection from '@/components/home/ServiceSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import Technology1Section from '@/components/home/Technology1Section';
import TestimonialSection from '@/components/home/TestimonialSection';
import CaseStudySection from '@/components/home/CaseStudySection';
import FAQSection from '@/components/home/FAQSection';
import AboutSection from '@/components/home/AboutSection';
import BlogSection from '@/components/home/BlogSection';
import Footer from '@/components/Footer';

import { getBlogTableData } from '@/api/frontend/blog';
import { getFaqTableDataFeatured } from '@/api/frontend/faq';
import { getCasestudyTableDataFeatured } from '@/api/frontend/case-study';

export const metadata = {
  title: 'Akoode - Home Page',
};

async function getHomeData() {
  try {
    const [blogResponse, faqResponse, casestudyResponse] = await Promise.all([
      getBlogTableData(),
      getFaqTableDataFeatured(),
      getCasestudyTableDataFeatured(),
    ]);

    return {
      bloglist: blogResponse?.data || [],
      faqlist: faqResponse?.data || [],
      casestudylist: casestudyResponse?.data || [],
    };
  } catch (error) {
    console.error('Error fetching home data:', error);
    return {
      bloglist: [],
      faqlist: [],
      casestudylist: [],
    };
  }
}

export default async function HomePage() {
  const { bloglist, faqlist, casestudylist } = await getHomeData();

  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <IndustriesSection />
      <Technology1Section />
      <TestimonialSection />
      <CaseStudySection casestudylist={casestudylist} />
      <FAQSection faqlist={faqlist} />
      <AboutSection />
      <BlogSection bloglist={bloglist} />
      <Footer />
    </>
  );
}

