import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop | Apna Market",
  description: "Shop electronics, books, stationery, and garments at Apna Market. Honest prices, fast delivery across India.",
  // other metadata
};

const ShopWithSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithSidebar products={products} />
    </main>
  );
};

export default ShopWithSidebarPage;
