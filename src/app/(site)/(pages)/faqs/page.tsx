import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | Apna Market",
  description: "Frequently asked questions about Apna Market—delivery, payments, returns, and more.",
  // other metadata
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
