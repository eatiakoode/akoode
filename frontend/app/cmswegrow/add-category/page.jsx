import dynamic from "next/dynamic";
import AddCategory from "@/components/dashboard/add-category";

export const metadata = {
  title: 'My Category || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AddCategory />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
