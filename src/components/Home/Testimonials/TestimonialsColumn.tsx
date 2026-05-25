"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export type ScrollingTestimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: ScrollingTestimonial[];
  duration?: number;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                translateY: "-50%",
              }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((loopIndex) => (
          <React.Fragment key={loopIndex}>
            {testimonials.map((item, i) => (
              <article
                key={`${loopIndex}-${i}`}
                className="w-full max-w-xs rounded-3xl border border-neutral-300 bg-white p-8 shadow-[0_8px_30px_rgba(25,25,25,0.06)] sm:p-10"
              >
                <p className="text-sm leading-relaxed text-dark-4">{item.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-600/15">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <p className="truncate font-medium leading-5 tracking-tight text-dark">
                      {item.name}
                    </p>
                    <p className="truncate text-sm leading-5 tracking-tight text-dark-4">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
