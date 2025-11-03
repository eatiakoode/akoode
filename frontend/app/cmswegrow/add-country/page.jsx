import dynamic from "next/dynamic";
import AddCountry from "@/components/dashboard/add-country";

export const metadata = {
  title: 'My Properties || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
