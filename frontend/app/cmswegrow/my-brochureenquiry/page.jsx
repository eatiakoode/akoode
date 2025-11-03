import dynamic from "next/dynamic";
import MyBrochureEnquiry from "@/components/dashboard/my-brochureenquiry";

export const metadata = {
  title: 'My Review || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyBrochureEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
