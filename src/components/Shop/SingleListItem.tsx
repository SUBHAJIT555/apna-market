"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cart-slice";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "@/redux/features/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { ProductStars, getProductBadgeLabel } from "./ProductStars";

const SingleListItem = ({ item }: { item: Product }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlistReducer.items
  );
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);
  const isInWishlist = wishlistItems.some((w) => w.id === item.id);
  const isInCart = cartItems.some((c) => c.id === item.id);
  const badgeLabel = getProductBadgeLabel(item);

  const openQuickView = () => {
    dispatch(updateQuickView({ ...item }));
    dispatch(updateproductDetails({ ...item }));
    const params = new URLSearchParams(searchParams.toString());
    params.set("productId", item.id.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    openModal();
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

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-300 bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(25,25,25,0.08)]">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-stretch sm:p-5">
        <div className="relative shrink-0 sm:w-[200px]">
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
              <div className="flex min-h-[180px] items-center justify-center px-4 py-6 sm:min-h-[200px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="max-h-[140px] w-auto object-contain transition-transform duration-500 group-hover/img:scale-105"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div>
            <h3 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-dark sm:text-lg">
              {item.title}
            </h3>
            <ProductStars rating={item.rating} reviewCount={item.reviews} />
            <div className="mt-3">
              <p className="text-xs text-dark-4">Price</p>
              <div className="mt-0.5 flex flex-wrap items-baseline gap-2">
                <p className="text-lg font-bold text-green-600">
                  ₹{item.discountedPrice.toLocaleString("en-IN")}
                </p>
                {item.price > item.discountedPrice && (
                  <p className="text-sm text-dark-4 line-through">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openQuickView}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-dark transition-colors hover:border-neutral-400"
            >
              Quick View
            </button>
            <button
              type="button"
              onClick={handleCartToggle}
              className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98] ${
                isInCart
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-neutral-900 hover:bg-orange-600"
              }`}
            >
              {isInCart ? "Added to cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleListItem;
