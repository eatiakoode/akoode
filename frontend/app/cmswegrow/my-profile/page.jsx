import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard/my-profile";

export const metadata = {
  title: 'My Profile || akoode - Real Estate ',
  description:
    'akoode - Real Estate ',
}

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
