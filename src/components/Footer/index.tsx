"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
  { label: "FAQ", href: "/faqs" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms and Conditions", href: "/terms-of-use" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const columnClass =
  "flex flex-col px-6 py-10 sm:px-8 sm:py-12 xl:px-10 xl:py-14";

const sectionTitleClass = "mb-6 text-base font-semibold text-dark";

const linkBaseClass =
  "text-sm text-dark-4 transition-colors duration-200 hover:text-green-600";

const iconWrapClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-600/10 text-green-600";

function FooterLink({
  href,
  label,
  active,
  alignRight,
}: {
  href: string;
  label: string;
  active?: boolean;
  alignRight?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${linkBaseClass} ${alignRight ? "block text-right" : ""} ${
        active ? "font-medium text-green-600" : ""
      }`}
    >
      {label}
    </Link>
  );
}

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-300 bg-white">
      <div className="mx-auto max-w-[1170px]">
        <div className="grid grid-cols-1 divide-y divide-neutral-300 md:grid-cols-2 md:divide-x md:divide-y xl:grid-cols-4 xl:divide-y-0">
          {/* Brand */}
          <div className={columnClass}>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo/logo.svg"
                alt={siteConfig.brand.name}
                width={219}
                height={36}
                className="h-8 w-auto sm:h-9"
              />
            </Link>
            <p className="mb-8 flex-1 text-sm leading-relaxed text-dark-4">
              {siteConfig.brand.name} is India&apos;s trusted store for electronics, books,
              stationery, and garments. Enjoy honest prices, fast delivery, and support made for
              Indian shoppers.
            </p>
            <Link
              href="/shop"
              className="inline-flex w-fit items-center rounded-lg border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-dark transition-colors duration-200 hover:border-orange-600 hover:text-orange-600"
            >
              Shop now
            </Link>
          </div>

          {/* Quick links */}
          <div className={columnClass}>
            <h2 className={sectionTitleClass}>Quick Links</h2>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink
                    href={link.href}
                    label={link.label}
                    active={
                      pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href))
                    }
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={columnClass}>
            <h2 className={sectionTitleClass}>Legal</h2>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink
                    href={link.href}
                    label={link.label}
                    active={pathname === link.href}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`${columnClass} xl:items-end xl:text-right`}>
            <h2 className={`${sectionTitleClass} w-full`}>Contact</h2>
            <div className="flex w-full flex-col gap-4 xl:items-end">
              <p className="text-sm leading-relaxed text-dark-4">
                {siteConfig.brand.address.street}
                <br />
                {siteConfig.brand.address.city}, {siteConfig.brand.address.state}{" "}
                {siteConfig.brand.address.zip}
              </p>

              <div className="flex items-center gap-3 xl:flex-row-reverse">
                <span className={iconWrapClass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                  </svg>
                </span>
                <span className="text-sm text-dark-4">
                  {siteConfig.brand.address.location}
                </span>
              </div>

              <div className="flex items-start gap-3 xl:flex-row-reverse">
                <span className={iconWrapClass}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919Z"
                    />
                  </svg>
                </span>
                <div>
                  <a
                    href={`tel:${siteConfig.brand.phone.replace(/\s/g, "")}`}
                    className="block text-sm font-medium text-dark transition-colors hover:text-green-600"
                  >
                    {siteConfig.brand.phone}
                  </a>
                  <p className="mt-1 text-sm text-dark-4">
                    {siteConfig.brand.businessHours}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${siteConfig.brand.email.general}`}
                className={`${linkBaseClass} font-medium`}
              >
                {siteConfig.brand.email.general}
              </a>
              <a
                href={siteConfig.brand.url}
                className={`${linkBaseClass} font-medium`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.brand.domain}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-300">
        <div className="mx-auto flex max-w-[1170px] flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7 xl:px-10">
          <p className="text-sm text-dark-4">
            &copy; {year}. All rights reserved by {siteConfig.brand.name}.
          </p>

          <div className="flex flex-wrap items-center gap-4 rounded-lg bg-gray-1 px-5 py-4 sm:gap-5">
            <p className="text-sm font-medium text-dark-4">We accept</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Image src="/images/payment/payment-01.svg" alt="Visa" width={66} height={22} />
              <Image src="/images/payment/payment-02.svg" alt="PayPal" width={18} height={21} />
              <Image src="/images/payment/payment-03.svg" alt="Mastercard" width={33} height={24} />
              <Image src="/images/payment/payment-04.svg" alt="Apple Pay" width={53} height={22} />
              <Image src="/images/payment/payment-05.svg" alt="Google Pay" width={56} height={22} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
