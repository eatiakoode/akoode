export const metadata = {
  title: 'Deep Learning and Data Science Services - Akoode | AI Solutions Company',
  description:
    'Akoode Technologies provides cutting-edge deep learning and data science solutions. Expert AI company in India offering predictive analytics, NLP, and machine learning services.',
  keywords: [
    'deep learning',
    'data science',
    'predictive analytics',
    'natural language processing',
    'machine learning',
    'AI solutions',
    'Akoode Technologies',
  ],
  authors: [{ name: 'Akoode' }],
  alternates: {
    canonical: 'https://www.akoode.com/deep-learning-and-data-science',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About5SectionArea from '@/components/deep-learning-and-data-science/About5SectionArea';
import Service1SectionArea from '@/components/deep-learning-and-data-science/Service1SectionArea';
import DatabaseTechnologies from '@/components/deep-learning-and-data-science/DatabaseTechnologies';
import Faq5SectionArea from '@/components/deep-learning-and-data-science/Faq5SectionArea';

export default function DeepLearningAndDataSciencePage() {
  return (
    <>
      <Header />

      <div className="inner-page-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="inner-header text-center heading1">
                <h1>
                  Deep Learning and <span>Data Science</span>
                </h1>
                <div className="space28"></div>
                <a href="/">
                  Home <i className="fa-solid fa-angle-right"></i>{' '}
                  <span>Deep Learning and Data Science</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About5SectionArea />
      <Service1SectionArea />
      <DatabaseTechnologies />
      <Faq5SectionArea />

      <Footer />
    </>
  );
}

