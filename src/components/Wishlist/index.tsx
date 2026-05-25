"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import SingleItem from "./SingleItem";
import WishlistSummary from "./WishlistSummary";

export const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const handleClearWishlist = () => {
    dispatch(removeAllItemsFromWishlist());
  };

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />

      {wishlistItems.length > 0 ? (
        <section className="overflow-hidden bg-gray-1 py-12 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 xl:px-0">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
              <div>
                <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-dark-4">
                  Saved for later
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-[1.65rem]">
                  Your Wishlist
                </h2>
                <p className="mt-2 text-sm text-dark-4">
                  {wishlistItems.length}{" "}
                  {wishlistItems.length === 1 ? "item" : "items"} saved
                </p>
              </div>
              <button
                type="button"
                onClick={handleClearWishlist}
                className="text-sm font-medium text-orange-600 transition-colors hover:text-orange-700"
              >
                Clear wishlist
              </button>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-4">
                  {wishlistItems.map((item) => (
                    <SingleItem item={item} key={item.id} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <WishlistSummary />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="overflow-hidden bg-gray-1 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 bg-white text-red">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M10 16.4584C10 16.4584 3.33333 11.875 3.33333 7.29169C3.33333 5.41669 4.79167 3.95835 6.66667 3.95835C7.91667 3.95835 9.04167 4.58335 10 5.62502C10.9583 4.58335 12.0833 3.95835 13.3333 3.95835C15.2083 3.95835 16.6667 5.41669 16.6667 7.29169C16.6667 11.875 10 16.4584 10 16.4584Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-dark">Your wishlist is empty</h3>
            <p className="mb-8 text-sm text-dark-4">
              Save products you love and come back anytime.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-[0.98]"
            >
              Browse Shop
            </Link>
          </div>
        </section>
      )}
    </>
  );
};
