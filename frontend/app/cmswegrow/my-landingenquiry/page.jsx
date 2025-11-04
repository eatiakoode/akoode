import dynamic from "next/dynamic";
import MyLandingEnquiry from "@/components/dashboard/my-landingenquiry";

export const metadata = {
  title: 'My Review || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyLandingEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
