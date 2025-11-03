import dynamic from "next/dynamic";
import Disclaimer from "@/components/disclaimer";

export const metadata = {
  title: 'Disclaimer || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <Disclaimer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
