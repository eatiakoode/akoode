import dynamic from "next/dynamic";
import EditFaq from "@/components/dashboard/edit-faq";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditFaq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
