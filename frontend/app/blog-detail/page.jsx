import dynamic from "next/dynamic";
import BlogDetails from "@/components/blog-details";

export const metadata = {
  title: 'Blog Details || akoode',
  description:
    'akoode',
}

const index = () => {
  return (
    <>
      <BlogDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
