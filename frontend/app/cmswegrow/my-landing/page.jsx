import dynamic from "next/dynamic";
import MyLanding from "@/components/dashboard/my-landing";

export const metadata = {
  title: 'My landing page || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyLanding />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
