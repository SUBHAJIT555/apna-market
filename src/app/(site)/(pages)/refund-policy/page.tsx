import RefundPolicy from "@/components/RefundPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Refund Policy | Apna Market",
  description: "Apna Market refund and return policy. Easy 7-day returns for your peace of mind.",
  // other metadata
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
