import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuoteFormData } from "@/lib/schemas";

interface BillingProps {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm text-dark outline-none transition-shadow placeholder:text-dark-4 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/15 ${
    hasError ? "border-red" : "border-neutral-300"
  }`;

const labelClass = "mb-2 block text-sm font-medium text-dark";

const Billing = ({ register, errors }: BillingProps) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
        <div className="border-b border-neutral-300 px-5 py-4 sm:px-6">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-dark-4">
            Contact &amp; delivery
          </p>
          <h3 className="mt-1 text-lg font-semibold text-dark">Billing details</h3>
          <p className="mt-1 text-sm text-dark-4">
            Fields marked with <span className="text-red">*</span> are required
          </p>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                {...register("firstName")}
                id="firstName"
                placeholder="First name"
                className={inputClass(!!errors.firstName)}
              />
              {errors.firstName && (
                <p className="mt-1.5 text-sm text-red">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span className="text-red">*</span>
              </label>
              <input
                type="text"
                {...register("lastName")}
                id="lastName"
                placeholder="Last name"
                className={inputClass(!!errors.lastName)}
              />
              {errors.lastName && (
                <p className="mt-1.5 text-sm text-red">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="address" className={labelClass}>
              Street Address <span className="text-red">*</span>
            </label>
            <input
              type="text"
              {...register("address")}
              id="address"
              placeholder="Street address"
              className={inputClass(!!errors.address)}
            />
            {errors.address && (
              <p className="mt-1.5 text-sm text-red">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="town" className={labelClass}>
                Town / City <span className="text-red">*</span>
              </label>
              <input
                type="text"
                {...register("town")}
                id="town"
                placeholder="Town / City"
                className={inputClass(!!errors.town)}
              />
              {errors.town && (
                <p className="mt-1.5 text-sm text-red">{errors.town.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className={labelClass}>
                State / Country
              </label>
              <input
                type="text"
                {...register("state")}
                id="state"
                placeholder="State / Country"
                className={inputClass(false)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="postcode" className={labelClass}>
              Postcode / ZIP
            </label>
            <input
              type="text"
              {...register("postcode")}
              id="postcode"
              placeholder="Postcode / ZIP"
              className={inputClass(false)}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="Email"
                className={inputClass(!!errors.email)}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-red">*</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                id="phone"
                placeholder="Phone"
                className={inputClass(!!errors.phone)}
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm text-red">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
