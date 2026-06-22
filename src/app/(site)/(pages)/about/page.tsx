import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Apna Market",
  description: "Learn about Apna Market—India's trusted store for electronics, books, stationery, and garments.",
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
