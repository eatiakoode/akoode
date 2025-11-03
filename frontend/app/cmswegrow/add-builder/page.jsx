import dynamic from "next/dynamic";
import AddBuilder from "@/components/dashboard/add-builder";

export const metadata = {
  title: 'My Properties || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
