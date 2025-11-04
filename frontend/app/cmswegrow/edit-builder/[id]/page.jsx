import dynamic from "next/dynamic";
import EditBuilder from "@/components/dashboard/edit-builder";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditBuilder />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
