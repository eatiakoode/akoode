import dynamic from "next/dynamic";
import MyPropertytype from "@/components/dashboard/my-propertytype";

export const metadata = {
  title: 'My Properties  || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyPropertytype />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
