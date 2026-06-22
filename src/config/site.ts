export const siteConfig = {
  brand: {
    name: "Apna Market",
    domain: "apna-market.com",
    url: "https://apna-market.com",
    email: {
      support: "info@apna-market.com",
      privacy: "info@apna-market.com",
      legal: "info@apna-market.com",
      general: "info@apna-market.com",
    },
    phone: "+964 742 44 763",
    address: {
      street: "4517 Washington Ave.",
      city: "Manchester",
      state: "Kentucky",
      zip: "39495",
      full: "4517 Washington Ave., Manchester, Kentucky 39495",
      location: "711-2880 Nulla St.",
    },
    businessHours: "Mon - Sat: 9 AM - 5 PM",
  },
  metadata: {
    defaultTitle:
      "Apna Market | Online Shopping for Electronics, Books, Stationery, and Garments",
    defaultDescription:
      "Apna Market is India's trusted store for electronics, books, stationery, and garments. Enjoy honest prices, fast delivery, and support made for Indian shoppers.",
  },
} as const;

export const brandName = siteConfig.brand.name;

export function pageTitle(title: string) {
  return title.includes(brandName) ? title : `${title} | ${brandName}`;
}
