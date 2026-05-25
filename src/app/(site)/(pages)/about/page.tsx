import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Supreme Cart",
  description: "Learn about Supreme Cart—India's trusted store for electronics, books, stationery, and garments.",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
