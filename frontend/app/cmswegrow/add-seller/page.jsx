import dynamic from "next/dynamic";
import AddSeller from "@/components/dashboard/add-seller";

export const metadata = {
  title: 'My Seller || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddSeller />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
