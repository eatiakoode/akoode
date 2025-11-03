import dynamic from "next/dynamic";
import MySubscribeEnquiry from "@/components/dashboard/my-subscribeenquiry";

export const metadata = {
  title: 'My Review || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MySubscribeEnquiry/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
