import dynamic from "next/dynamic";
import MyMessage from "@/components/dashboard/my-message";

export const metadata = {
  title: 'My Message || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyMessage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
