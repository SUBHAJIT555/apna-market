"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
  removeAllItemsFromCart,
} from "@/redux/features/cart-slice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/schemas";
import Breadcrumb from "../Common/Breadcrumb";
import Billing from "./Billing";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotalPrice);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (cartItems.length === 0) {
      setError("Your cart is empty. Add items before checkout.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const orderItems = cartItems.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: item.discountedPrice,
      }));

      const formData = new FormData();
      formData.append("formType", "quote");
      formData.append("billing_first_name", data.firstName);
      formData.append("billing_last_name", data.lastName);
      formData.append("billing_email", data.email);
      formData.append("billing_phone", data.phone);
      formData.append("billing_address", data.address);
      formData.append("billing_town", data.town);
      formData.append("billing_state", data.state || "");
      formData.append("cart_items", JSON.stringify(orderItems));
      formData.append("cart_total", total.toString());
      formData.append("order_total", total.toString());
      if (data.notes) formData.append("notes", data.notes);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit quote request");
      }

      dispatch(removeAllItemsFromCart());
      router.push("/mail-success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["Checkout"]} />

      {cartItems.length === 0 ? (
        <section className="overflow-hidden bg-gray-1 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-300 bg-white text-orange-600">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M15.5433 9.5172C15.829 9.21725 15.8174 8.74252 15.5174 8.45686C15.2175 8.17119 14.7428 8.18277 14.4571 8.48272L12.1431 10.9125L11.5433 10.2827C11.2576 9.98277 10.7829 9.97119 10.483 10.2569C10.183 10.5425 10.1714 11.0173 10.4571 11.3172L11.6 12.5172C11.7415 12.6658 11.9378 12.75 12.1431 12.75C12.3483 12.75 12.5446 12.6658 12.6862 12.5172L15.5433 9.5172Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L21.3935 10.0295L21.3925 10.0341L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512ZM5.70828 6.86996L5.70828 9.75996C5.70828 11.249 5.72628 12.1578 5.83744 12.8068C5.93933 13.4018 6.11202 13.7324 6.43219 14.0701C6.70473 14.3576 7.08235 14.5418 7.79716 14.6432C8.53783 14.7482 9.5209 14.75 10.9377 14.75H16.2406C17.0399 14.75 17.5714 14.7487 17.9746 14.6993C18.3573 14.6525 18.5348 14.571 18.66 14.469C18.7853 14.3669 18.9009 14.2095 19.024 13.8441C19.1537 13.4592 19.2623 12.9389 19.4237 12.156L19.9225 9.73591L19.9229 9.73369C20.1005 8.84376 20.217 8.2515 20.2444 7.80793C20.2704 7.38648 20.2043 7.23927 20.1429 7.15786C20.1367 7.15259 20.0931 7.11565 19.9661 7.07101C19.8107 7.01639 19.5895 6.97049 19.2939 6.93745C18.6991 6.87096 17.9454 6.86996 17.089 6.86996H5.70828Z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-dark">Nothing to checkout</h3>
            <p className="mb-8 text-sm text-dark-4">
              Your cart is empty. Add products before requesting a quote.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-[0.98]"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      ) : (
        <section className="overflow-hidden bg-gray-1 py-12 sm:py-14 lg:py-16">
          <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 xl:px-0">
            <div className="mb-8 sm:mb-10">
              <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-dark-4">
                Secure checkout
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-[1.65rem]">
                Request for Quote
              </h2>
              <p className="mt-2 text-sm text-dark-4">
                Fill in your details and we will get back to you with a quote.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="space-y-6 lg:col-span-8">
                  <Billing register={register} errors={errors} />

                  <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
                    <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
                      <label htmlFor="notes" className="font-semibold text-dark">
                        Note about your order
                      </label>
                      <p className="mt-1 text-sm text-dark-4">
                        Optional delivery instructions
                      </p>
                    </div>
                    <div className="p-5 sm:p-6">
                      <textarea
                        {...register("notes")}
                        id="notes"
                        rows={5}
                        placeholder="Any special requests for delivery or packaging…"
                        className="w-full resize-none rounded-xl border border-neutral-300 bg-white p-4 text-sm text-dark outline-none transition-shadow placeholder:text-dark-4 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-28">
                    <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
                      <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
                        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-dark-4">
                          Summary
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-dark">Your Order</h3>
                        <p className="mt-1 text-sm text-dark-4">
                          {cartItems.length}{" "}
                          {cartItems.length === 1 ? "item" : "items"}
                        </p>
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
                            <div
                              key={item.id}
                              className="flex items-start justify-between gap-3"
                            >
                              <p className="line-clamp-2 flex-1 text-sm text-dark">
                                {item.title}
                                <span className="text-dark-4"> × {item.quantity}</span>
                              </p>
                              <p className="shrink-0 text-sm font-medium text-dark">
                                ₹
                                {(item.discountedPrice * item.quantity).toLocaleString(
                                  "en-IN"
                                )}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between rounded-xl border border-neutral-300 bg-gray-1 px-4 py-3.5">
                          <p className="font-semibold text-dark">Total</p>
                          <p className="text-lg font-bold text-green-600">
                            ₹{total.toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {error && (
                      <p
                        className="mt-4 rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm text-red"
                        role="alert"
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-6 flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Processing…" : "Ask for Quote"}
                    </button>

                    <Link
                      href="/cart"
                      className="mt-3 flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-dark transition-colors hover:border-neutral-400"
                    >
                      Back to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Checkout;
