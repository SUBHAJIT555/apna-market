"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import categoriesData from "@/constants/categoryData";
import SingleItem from "./SingleItem";

const Categories = () => {
  const sliderRef = useRef<{ swiper: SwiperType } | null>(null);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-neutral-200/60 py-12 sm:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -left-40 top-16 h-64 w-64 rounded-full bg-orange-600/5 blur-3xl"
        aria-hidden
      />

      <div className="relative z-1 mx-auto max-w-[1170px] px-4 sm:px-6 xl:px-0">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div className="min-w-0 flex-1">
            <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-dark-4">
              Shop by department
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-[1.65rem]">
              Browse Categories
            </h2>
            <p className="mt-2 max-w-md text-sm text-dark-4">
              Swipe through departments and jump straight into what you need.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 sm:inline-flex"
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

        <div className="categories-carousel">
          <Swiper
            ref={sliderRef}
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2.5, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 18 },
              900: { slidesPerView: 4, spaceBetween: 20 },
              1100: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {categoriesData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <SingleItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6 sm:justify-end">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-dark shadow-sm sm:hidden"
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

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous categories"
              className="categories-nav-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next categories"
              className="categories-nav-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
