import dynamic from "next/dynamic";
import EditSeller from "@/components/dashboard/edit-seller";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditSeller />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
