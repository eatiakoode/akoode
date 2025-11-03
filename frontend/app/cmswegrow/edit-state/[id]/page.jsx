import dynamic from "next/dynamic";
import EditState from "@/components/dashboard/edit-state";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
