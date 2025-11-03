import dynamic from "next/dynamic";
import EditCategory from "@/components/dashboard/edit-category";

export const metadata = {
  title: 'My Properties || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <EditCategory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
