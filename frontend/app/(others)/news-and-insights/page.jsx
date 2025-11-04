import dynamic from "next/dynamic";
import NewsandInsights from "@/components/news-and-insights";

export const metadata = {
  title: 'Real Estate News \& Market Insights | akoode INFRAVENTURES',
  description:
    'Stay informed with the latest real estate news, trends, and expert insights from akoode INFRAVENTURES. Get updates on Gurgaon’s property market and investment opportunities. ',
}

const index = () => {
  return (
    <>
      <NewsandInsights />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
