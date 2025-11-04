import dynamic from "next/dynamic";
import MyEnquiry from "@/components/dashboard/my-enquiry";

export const metadata = {
  title: 'My Review || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyEnquiry />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
