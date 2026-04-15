export const SUPPORTED_LOCALES = ["en", "es", "fr", "de"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
};

export function isValidLocale(lang: string): lang is Locale {
  return SUPPORTED_LOCALES.includes(lang as Locale);
}

/** Build a path with locale prefix. English (default) has no prefix. */
export function localePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return `/${locale}${path}`;
}

/** English default UI strings — used when locale is "en" or as fallback */
export const DEFAULT_UI: Record<string, string> = {
  "hero.title": "Find Your Perfect WiFi Router",
  "hero.description": "Compare the top 10 WiFi routers on the market. From blazing-fast WiFi 7 mesh systems to budget-friendly WiFi 6 options, find the router that fits your needs.",
  "hero.cta": "Browse Routers",
  "stats.top_routers": "Top Routers",
  "stats.major_brands": "Major Brands",
  "stats.latest_standard": "Latest Standard",
  "stats.avg_rating": "Avg. Rating",
  "collection.title": "Our Router Collection",
  "collection.description": "Handpicked routers tested and reviewed by networking experts",
  "empty.title": "No routers found",
  "empty.description": "Run npm run db:seed to populate the database.",
  "card.view_details": "View Details",
  "nav.home": "Home",
  "detail.back": "Back to All Routers",
  "detail.specs": "Technical Specifications",
  "detail.features": "Key Features",
  "detail.wifi_standard": "WiFi Standard",
  "detail.max_speed": "Max Speed",
  "detail.frequency_bands": "Frequency Bands",
  "detail.ports": "Ports",
  "detail.rating": "Rating",
  "detail.in_stock": "In Stock",
  "footer.rights": "All rights reserved.",
  "lang.name": "English",
};

/** Get a translated string with English fallback */
export function t(translations: Record<string, string>, key: string): string {
  return translations[key] ?? DEFAULT_UI[key] ?? key;
}
