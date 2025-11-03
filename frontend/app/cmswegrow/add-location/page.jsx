import dynamic from "next/dynamic";
import AddLocation from "@/components/dashboard/add-location";

export const metadata = {
  title: 'My Properties || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddLocation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
