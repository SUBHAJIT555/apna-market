import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On orders ₹499+",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "7-day policy",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Pay",
    description: "UPI & Cards",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Support",
    description: "Pan India",
  },
];

const HeroFeature = () => {
  return (
    <div className="w-full rounded-2xl border border-neutral-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-5 xl:w-auto xl:rounded-full xl:px-6 xl:py-3">
      {/* Mobile & tablet: 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:hidden">
        {featureData.map((item) => (
          <div key={item.title} className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-1 ring-1 ring-neutral-200/60">
              <Image src={item.img} alt="" width={18} height={18} className="opacity-80" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-dark">{item.title}</p>
              <p className="truncate text-[10px] text-dark-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: single horizontal row */}
      <div className="hidden items-center justify-center xl:flex">
        {featureData.map((item, key) => (
          <React.Fragment key={item.title}>
            {key > 0 && (
              <span className="mx-5 h-4 w-px shrink-0 bg-neutral-200" aria-hidden />
            )}
            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <Image src={item.img} alt="" width={18} height={18} className="opacity-70" />
              <span className="text-xs font-semibold text-dark">{item.title}</span>
              <span className="text-[10px] text-dark-4">· {item.description}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
