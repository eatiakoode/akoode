import Faq from "@/components/faq";
import { getFaqTableData } from "@/api/frontend/faq";

export const metadata = {
  title: "Faq || akoode",
  description: "akoode ",
};

// ✅ This is now a server component
export default async function FaqPage() {
  const result = await getFaqTableData();
  const faqs = result?.data || [];

  return <Faq faqs={faqs} />;
}
