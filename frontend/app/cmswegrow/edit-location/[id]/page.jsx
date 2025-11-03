import dynamic from "next/dynamic";
import EditLocation from "@/components/dashboard/edit-location";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditLocation />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
