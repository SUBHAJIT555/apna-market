import React from "react";
import Image from "next/image";
import Link from "next/link";

const stripeBgStyle: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, transparent, transparent 2px, #DDDDDD 2px, #DDDDDD 4px)",
};

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Featured promo */}
          <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white lg:col-span-7">
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={stripeBgStyle}
              aria-hidden
            />
            <div className="relative z-2 flex min-h-[148px] items-center justify-between gap-4 p-5 sm:min-h-[160px] sm:p-6">
              <div className="min-w-0 flex-1">
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-green-600 px-2.5 py-0.5 text-custom-xs font-medium text-white">
                  Up to 30% off
                </span>
                <h2 className="mb-1.5 text-lg font-semibold leading-snug text-dark sm:text-xl">
                  Electronics, Books &amp; More
                </h2>
                <p className="mb-3 line-clamp-2 max-w-md text-custom-sm text-gray-600">
                  Mobile accessories, gadgets, books, stationery &amp; fashion — delivered across India.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex rounded-lg bg-gradient-to-t from-green-700 to-green-500 px-5 py-2 text-custom-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30 active:scale-95"
                >
                  Shop Now
                </Link>
              </div>

              <div className="relative hidden shrink-0 sm:block">
                <Image
                  src="/images/HomePageImages/6.webp"
                  alt="Electronics and gadgets"
                  width={140}
                  height={140}
                  className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Secondary promos */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Link
              href="/shop"
              className="group relative flex min-h-[120px] items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-200 hover:border-green-600 sm:min-h-[132px] lg:min-h-0 lg:flex-1"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-80"
                style={stripeBgStyle}
                aria-hidden
              />
              <Image
                src="/images/HomePageImages/7.webp"
                alt="Books and stationery"
                width={88}
                height={88}
                className="relative z-1 ml-4 shrink-0 object-contain transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 sm:ml-5"
              />
              <div className="relative z-1 min-w-0 flex-1 px-4 py-4 sm:px-5">
                <span className="text-custom-xs font-medium text-green-600">Books &amp; Stationery</span>
                <h3 className="mt-0.5 text-base font-semibold text-dark sm:text-lg">
                  Office Essentials
                </h3>
                <p className="mt-1 text-custom-sm font-medium text-green-700">Flat 20% off</p>
                <span className="mt-2 inline-flex items-center gap-1 text-custom-xs font-medium text-gray-600 transition-colors group-hover:text-green-600">
                  Shop now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M5.25 3.5L8.75 7L5.25 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <Link
              href="/shop"
              className="group relative flex min-h-[120px] items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-200 hover:border-green-600 sm:min-h-[132px] lg:min-h-0 lg:flex-1"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 opacity-80"
                style={stripeBgStyle}
                aria-hidden
              />
              <div className="relative z-1 min-w-0 flex-1 px-4 py-4 sm:px-5">
                <span className="text-custom-xs font-medium text-green-600">Men, Women &amp; Kids</span>
                <h3 className="mt-0.5 text-base font-semibold text-dark sm:text-lg">
                  Family Fashion
                </h3>
                <p className="mt-1 text-custom-sm font-medium text-green-700">
                  Up to <span className="text-green-600">40%</span> off
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-custom-xs font-medium text-gray-600 transition-colors group-hover:text-green-600">
                  Shop now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M5.25 3.5L8.75 7L5.25 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <Image
                src="/images/HomePageImages/5.webp"
                alt="Fashion apparel"
                width={88}
                height={88}
                className="relative z-1 mr-4 shrink-0 object-contain transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 sm:mr-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
