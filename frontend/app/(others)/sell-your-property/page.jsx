import dynamic from "next/dynamic";
import SellPropertyPage from "@/components/sell-your-property";

export const metadata = {
  title: 'Landing Page || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <SellPropertyPage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
