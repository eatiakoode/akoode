import dynamic from "next/dynamic";
import MySeller from "@/components/dashboard/my-seller";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <MySeller />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
