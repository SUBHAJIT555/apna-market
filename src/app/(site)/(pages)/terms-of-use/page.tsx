import TermsOfUse from "@/components/TermsOfUse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | Supreme Cart",
  description: "Terms and conditions for using Supreme Cart website and services.",
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
