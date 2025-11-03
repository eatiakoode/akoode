import dynamic from "next/dynamic";
import MyState from "@/components/dashboard/my-state";

export const metadata = {
  title: 'My Properties || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyState />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
