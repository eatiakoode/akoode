export const metadata = {
  title: 'IT Staff Augmentation Services - Akoode | Hire Tech Experts Temporarily',
  description:
    'Akoode Technologies offers IT staff augmentation services in Gurgaon. Hire skilled tech experts temporarily to scale your team, reduce costs, and accelerate project delivery.',
  keywords: [
    'IT staff augmentation services',
    'hire tech experts temporarily',
    'contractual staffing',
    'IT staffing services',
    'Akoode Technologies Gurgaon',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/services/staff-augmentation-services',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/staff-augmentation-services/About5SectionArea';
import Team1SectionArea from '@/components/staff-augmentation-services/Team1SectionArea';
import Service1SectionArea from '@/components/staff-augmentation-services/Service1SectionArea';
import DatabaseTechnologies from '@/components/staff-augmentation-services/DatabaseTechnologies';
import About6SectionArea from '@/components/staff-augmentation-services/About6SectionArea';
import Faq5SectionArea from '@/components/staff-augmentation-services/Faq5SectionArea';

export default function StaffAugmentationServicesPage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  IT Staff Augmentation <span>Services</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>IT Staff Augmentation Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Team1SectionArea />
      <Service1SectionArea />
      <DatabaseTechnologies />
      <About6SectionArea />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

