import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
        <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-dark-4">
            Summary
          </p>
          <h3 className="mt-1 text-lg font-semibold text-dark">Order Summary</h3>
        </div>

        <div className="px-5 py-6 sm:px-6">
          <div className="mb-4 flex items-center justify-between border-b border-neutral-300 pb-3">
            <p className="text-xs font-medium uppercase tracking-wide text-dark-4">
              Product
            </p>
            <p className="text-xs font-medium uppercase tracking-wide text-dark-4">
              Subtotal
            </p>
          </div>

          <div className="max-h-[220px] space-y-3 overflow-y-auto no-scrollbar">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start justify-between gap-3">
                <p className="line-clamp-2 flex-1 text-sm text-dark">{item.title}</p>
                <p className="shrink-0 text-sm font-medium text-dark">
                  ₹{(item.discountedPrice * item.quantity).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 bg-gray-1 px-4 py-3.5">
            <p className="font-semibold text-dark">Total</p>
            <p className="text-lg font-bold text-green-600">
              ₹{totalPrice.toLocaleString("en-IN")}
            </p>
          </div>

          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-[0.98]"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-3 flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-dark transition-colors hover:border-neutral-400"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
