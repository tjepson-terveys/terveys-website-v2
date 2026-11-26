/**
 * Stub pages for every menu/footer destination, so nothing 404s.
 * Service and healthcare stubs are generated from services.ts and healthcare.ts.
 */
export type StubPageKey =
  | "services"
  | "privacy"
  | "ja";

export type StubPage = {
  path: string;
  eyebrow: string;
  title: string;
  /** Language of the page body (the Japanese stub sets "ja"). */
  lang?: string;
  comingSoon?: string;
};

export const comingSoon = "Content coming soon";
export const backHome = { label: "Back to home", href: "/" };

export const stubPages: Record<StubPageKey, StubPage> = {
  services: { path: "/services", eyebrow: "Services", title: "Services" },
  privacy: { path: "/privacy-policy", eyebrow: "Legal", title: "Privacy Policy" },
  // TODO: Japanese copy needs translation.
  ja: { path: "/ja", eyebrow: "日本語", title: "日本語", lang: "ja", comingSoon: "準備中です" },
};
