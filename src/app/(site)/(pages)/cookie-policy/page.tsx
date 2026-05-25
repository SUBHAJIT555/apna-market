import CookiePolicy from "@/components/CookiePolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Supreme Cart",
  description: "Cookie Policy for Supreme Cart - how we use cookies and similar technologies on our website.",
};

const CookiePolicyPage = () => {
  return (
    <main>
      <CookiePolicy />
    </main>
  );
};

export default CookiePolicyPage;
