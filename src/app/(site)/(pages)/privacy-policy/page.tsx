import PrivacyPolicy from "@/components/PrivacyPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | Supreme Cart",
  description: "How Supreme Cart collects, uses, and protects your personal information.",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
