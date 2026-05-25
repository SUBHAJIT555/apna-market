import React from "react";

const Discount = () => {
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
          <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
            <h3 className="font-semibold text-dark">Have a discount code?</h3>
            <p className="mt-1 text-sm text-dark-4">Apply your coupon at checkout</p>
          </div>

          <div className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:px-6 sm:py-6">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Enter coupon code"
              className="min-w-0 flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-dark outline-none transition-shadow placeholder:text-dark-4 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600 active:scale-[0.98] sm:px-8"
            >
              Apply Code
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Discount;
