import dynamic from "next/dynamic";
import EditCity from "@/components/dashboard/edit-city";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditCity />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
