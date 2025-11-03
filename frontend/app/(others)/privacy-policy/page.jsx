import dynamic from "next/dynamic";
import Privacy from "@/components/privacy-policy";

export const metadata = {
  title: 'Privacy Policy || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <Privacy />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
