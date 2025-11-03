import dynamic from "next/dynamic";
import MyPropertyEnquiry from "@/components/dashboard/my-propertyenquiry";

export const metadata = {
  title: 'My Review || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyPropertyEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
