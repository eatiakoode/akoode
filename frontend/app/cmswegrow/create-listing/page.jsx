import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: 'Create Listing || akoode - Real Estate',
  description:
    'akoode - Real Estate',
}

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
