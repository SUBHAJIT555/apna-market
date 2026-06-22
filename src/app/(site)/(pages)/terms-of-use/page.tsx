import TermsOfUse from "@/components/TermsOfUse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | Apna Market",
  description: "Terms and conditions for using Apna Market website and services.",
  // other metadata
};

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;
