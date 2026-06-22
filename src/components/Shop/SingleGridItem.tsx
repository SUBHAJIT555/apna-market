"use client";

import { Product } from "@/types/product";
import ShopProductCard from "./ShopProductCard";

const SingleGridItem = ({ item }: { item: Product }) => {
  return <ShopProductCard item={item} variant="grid" />;
};

export default SingleGridItem;
