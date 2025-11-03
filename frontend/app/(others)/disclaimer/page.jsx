import dynamic from "next/dynamic";
import Disclaimer from "@/components/disclaimer";

export const metadata = {
  title: 'Disclaimer || WeGrow',
  description:
    'WeGrow',
}

const index = () => {
  return (
    <>
      <Disclaimer />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
