"use client";

import { Product } from "@/types/product";
import ShopProductCard from "./ShopProductCard";

const SingleListItem = ({ item }: { item: Product }) => {
  return <ShopProductCard item={item} variant="list" />;
};

export default SingleListItem;
