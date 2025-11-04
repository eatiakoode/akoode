import dynamic from "next/dynamic";
import AddPropertytype from "@/components/dashboard/add-propertytype";

export const metadata = {
  title: 'My Properties || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
