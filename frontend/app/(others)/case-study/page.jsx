import dynamic from "next/dynamic";
import CaseStudy from "@/components/case-study";

export const metadata = {
  title: 'Case Study - Akoode Technology | Our Success Stories',
  description:
    'Explore our successful case studies showcasing innovative solutions in AI, mobile app development, web development, and digital transformation projects.',
}

const index = () => {
  return (
    <>
      <CaseStudy />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });






