import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | Supreme Cart",
  description: "Frequently asked questions about Supreme Cart—delivery, payments, returns, and more.",
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
