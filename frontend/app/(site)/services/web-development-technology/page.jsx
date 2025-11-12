export const metadata = {
  title: 'Akoode - Web Development Technology',
};

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const InnerPageHero = dynamic(
  () => import('@/components/web-development-technology/InnerPageHero'),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import('@/components/web-development-technology/AboutSection'),
  { ssr: false }
);
const FrontendTechnologiesSection = dynamic(
  () => import('@/components/web-development-technology/FrontendTechnologiesSection'),
  { ssr: false }
);
const BackendTechnologiesSection = dynamic(
  () => import('@/components/web-development-technology/BackendTechnologiesSection'),
  { ssr: false }
);
const DatabaseTechnologiesSection = dynamic(
  () => import('@/components/web-development-technology/DatabaseTechnologiesSection'),
  { ssr: false }
);

export default function WebDevelopmentTechnologyPage() {
  return (
    <>
      <Header />

      <InnerPageHero
        title="Web"
        subtitle="Development Technology"
        breadcrumb={{
          homeLink: '/',
          homeText: 'Home',
          currentPage: 'Web Development Technology',
        }}
      />

      <AboutSection
        title="Empowering The Future"
        subtitle="A Comprehensive Guide by Akoode Technologies"
        description="Acquiring a website requires the correct combination of technologies, each serving an important role in the creation process. Akoode Technologies boasts expertise across over 20 website development technologies, guaranteeing your website is built using only top quality tools. This comprehensive guide outlines our selection of technologies as well as their advantages and use cases so you can make an informed decision for your next web project."
        buttonText="Get a Quote"
        buttonLink="blog1.html"
        imageSrc="/images/web-dev/web-dev.webp"
        imageAlt="Web Development Technology"
      />

      <FrontendTechnologiesSection />
      <BackendTechnologiesSection />
      <DatabaseTechnologiesSection />

      <Footer />
    </>
  );
}

