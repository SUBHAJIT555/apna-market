import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const promoCards = [
  {
    index: "01",
    title: "Electronics & Gadgets",
    subtitle: "Latest tech, best prices",
    price: "From ₹499",
    href: "/shop",
    image: "/images/HomePageImages/3.webp",
    imageAlt: "Electronics",
    tone: "green" as const,
  },
  {
    index: "02",
    title: "Exclusive Offers",
    subtitle: "Books, stationery & more",
    price: "From ₹99",
    href: "/shop",
    image: "/images/HomePageImages/4.webp",
    imageAlt: "Books and stationery",
    tone: "orange" as const,
  },
];

const toneStyles = {
  green: {
    bar: "bg-green-600",
    price: "text-green-600",
    hover: "hover:border-green-600/40",
  },
  orange: {
    bar: "bg-orange-600",
    price: "text-orange-600",
    hover: "hover:border-orange-600/40",
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[4.75rem] sm:pt-45 lg:pb-18 lg:pt-30 xl:pt-52">
      <div className="relative z-1 mx-auto max-w-[1170px] px-4 sm:px-6 xl:px-0">
        {/* Trust strip — sits above the stage, not below */}
        <div className="mb-6 w-full sm:mb-8 xl:flex xl:justify-center">
          <HeroFeature />
        </div>

        {/* Main editorial stage */}
        <div className="overflow-hidden rounded-[1.75rem] shadow-lg shadow-dark/8 ring-1 ring-neutral-200/60">
          <HeroCarousel />
        </div>

        {/* Promo ribbons — spaced below hero (no overlap) */}
        <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5">
          {promoCards.map((card) => {
            const style = toneStyles[card.tone];
            return (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-md transition-all duration-300 ${style.hover} hover:shadow-lg`}
              >
                <div className="flex min-w-0 flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <span className="font-mono text-[10px] font-medium tracking-widest text-dark-5">
                      {card.index}
                    </span>
                    <h2 className="mt-2 text-base font-semibold leading-snug text-dark transition-colors group-hover:text-dark sm:text-lg">
                      {card.title}
                    </h2>
                    <p className="mt-1 text-xs text-dark-4">{card.subtitle}</p>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <span className={`text-lg font-bold ${style.price}`}>
                      {card.price}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5 ${style.bar}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M2.91669 7H11.0834M11.0834 7L7.00002 2.91667M11.0834 7L7.00002 11.0833"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="relative w-[38%] min-w-[120px] max-w-[160px] shrink-0 overflow-hidden bg-gray-1">
                  <div className={`absolute inset-y-0 left-0 w-1 ${style.bar}`} />
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="160px"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
