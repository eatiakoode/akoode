import dynamic from "next/dynamic";
import EditCountry from "@/components/dashboard/edit-country";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditCountry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
