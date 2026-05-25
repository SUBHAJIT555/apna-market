"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";

interface NewArrivalProps {
  products: Product[];
}

function ProductStars({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount: number;
}) {
  const normalized = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`${normalized} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = normalized >= i + 1;

          return (
            <svg
              key={i}
              className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                filled ? "text-[#FFA645]" : "text-neutral-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
      <span className="text-xs text-dark-4">
        {normalized.toFixed(1)} ({reviewCount})
      </span>
    </div>
  );
}

const NewArrivalCard = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlistReducer.items
  );
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  const isInWishlist = wishlistItems.some((w) => w.id === item.id);
  const isInCart = cartItems.some((c) => c.id === item.id);

  const badgeLabel = item.isNewArrival
    ? "New Arrival"
    : item.isBestSelling
      ? "Best Seller"
      : item.isTrending
        ? "Trending"
        : "Featured";

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeItemFromCart(item.id));
    } else {
      dispatch(addItemToCart({ ...item, quantity: 1 }));
    }
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeItemFromWishlist(item.id));
    } else {
      dispatch(
        addItemToWishlist({
          ...item,
          status: "available",
          quantity: 1,
        })
      );
    }
  };

  const openQuickView = () => {
    handleQuickViewUpdate();
    dispatch(updateproductDetails({ ...item }));
    openModal();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-300 bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(25,25,25,0.08)]">
      {/* Image frame */}
      <div className="p-3 pb-0">
        <div className="relative overflow-hidden rounded-xl bg-neutral-100">
          <span className="absolute left-3 top-3 z-10 rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-medium text-green-700">
            {badgeLabel}
          </span>

          <button
            type="button"
            onClick={handleWishlistToggle}
            aria-label={
              isInWishlist ? "Remove from wishlist" : "Add to wishlist"
            }
            className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors ${
              isInWishlist ? "text-red" : "text-red/80 hover:text-red"
            }`}
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 16 16" aria-hidden>
              {isInWishlist ? (
                <path d="M8 13.5C8 13.5 2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.5 2 7.5 2.5 8 3.5C8.5 2.5 9.5 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13.5 8 13.5Z" />
              ) : (
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8 13.5C8 13.5 2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.5 2 7.5 2.5 8 3.5C8.5 2.5 9.5 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13.5 8 13.5Z"
                />
              )}
            </svg>
          </button>

          <button
            type="button"
            onClick={openQuickView}
            className="group/img block w-full text-left"
          >
            <div className="flex min-h-[200px] items-center justify-center px-6 py-8 sm:min-h-[220px]">
              <Image
                src={item.img}
                alt={item.title}
                width={220}
                height={220}
                className="max-h-[160px] w-auto object-contain transition-transform duration-500 group-hover/img:scale-105 sm:max-h-[180px]"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4 pt-3 sm:p-5 sm:pt-4">
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-dark">
          {item.title}
        </h3>

        <ProductStars rating={item.rating} reviewCount={item.reviews} />

        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <div>
            <p className="text-xs text-dark-4">Price</p>
            <p className="text-lg font-bold text-green-600">
              ₹{item.discountedPrice.toLocaleString("en-IN")}
            </p>
            {item.price > item.discountedPrice && (
              <p className="text-xs text-dark-4 line-through">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              stopPropagation(e);
              handleCartToggle();
            }}
            aria-label={isInCart ? "Remove from cart" : "Add to cart"}
            className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-medium text-white transition-colors duration-200 active:scale-[0.98] sm:px-5 sm:text-sm ${
              isInCart
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-neutral-900 hover:bg-orange-600"
            }`}
          >
            {isInCart ? "Added to cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </article>
  );
};

const NewArrival = ({ products }: NewArrivalProps) => {
  return (
    <section className="overflow-hidden border-b border-neutral-200/60 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 xl:px-0">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-dark-4">
              This week&apos;s picks
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-[1.65rem]">
              New Arrivals
            </h2>
            <p className="mt-2 max-w-md text-sm text-dark-4">
              Fresh products landing now—rated by shoppers like you.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item) => (
            <NewArrivalCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
