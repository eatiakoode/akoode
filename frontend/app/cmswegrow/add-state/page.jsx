import dynamic from "next/dynamic";
import AddState from "@/components/dashboard/add-state";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <AddState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
