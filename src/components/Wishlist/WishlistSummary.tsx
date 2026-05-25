"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cart-slice";

const WishlistSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const totalValue = wishlistItems.reduce(
    (sum, item) => sum + item.discountedPrice,
    0
  );
  const inStockCount = wishlistItems.filter(
    (item) =>
      item.status !== "out of stock" && item.status !== "unavailable"
  ).length;

  const handleAddAllToCart = () => {
    wishlistItems.forEach((item) => {
      const inStock =
        item.status !== "out of stock" && item.status !== "unavailable";
      if (inStock) {
        dispatch(
          addItemToCart({
            ...item,
            img: item.img || "",
            quantity: 1,
          })
        );
      }
    });
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
        <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-dark-4">
            Overview
          </p>
          <h3 className="mt-1 text-lg font-semibold text-dark">Wishlist Summary</h3>
        </div>

        <div className="px-5 py-6 sm:px-6">
          <div className="space-y-3 border-b border-neutral-300 pb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-dark-4">Saved items</span>
              <span className="font-medium text-dark">{wishlistItems.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-dark-4">In stock</span>
              <span className="font-medium text-dark">{inStockCount}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 bg-gray-1 px-4 py-3.5">
            <p className="font-semibold text-dark">Total value</p>
            <p className="text-lg font-bold text-green-600">
              ₹{totalValue.toLocaleString("en-IN")}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddAllToCart}
            disabled={inStockCount === 0}
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add All to Cart
          </button>

          <Link
            href="/shop"
            className="mt-3 flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-dark transition-colors hover:border-neutral-400"
          >
            Continue Shopping
          </Link>

          <Link
            href="/cart"
            className="mt-3 flex w-full items-center justify-center text-sm font-medium text-orange-600 transition-colors hover:text-orange-700"
          >
            View Cart →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistSummary;
