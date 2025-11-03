import dynamic from "next/dynamic";
import AdminLogin from "@/components/adminlogin";

export const metadata = {
  title: 'Login || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <AdminLogin />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
