import dynamic from "next/dynamic";
import ScanMe from "@/components/scanme";

export const metadata = {
  title: 'Scan Me || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <ScanMe />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
