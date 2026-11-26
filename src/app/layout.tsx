import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { contactPage, offices } from "@/content/contact";
import { site } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  // Variable font: covers weights 300–700 used by the design, plus the optical-size axis.
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  // TODO: placeholder favicon — replace public/favicon.svg with the brand mark.
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#071018",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: new URL(site.logo.jsonLdUrl, site.url).toString(),
  email: contactPage.connect.email,
  address: { "@type": "PostalAddress", ...site.address },
  contactPoint: offices.map((o) => ({
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: o.phone.tel,
    areaServed: { india: "IN", japan: "JP", usa: "US" }[o.id],
  })),
  sameAs: site.social.map((s) => s.href).filter((href) => href.startsWith("http")),
};

/** Runs before first paint: enables the scroll-reveal styles only when JS is available. */
const enableJsClass = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.locale} className={dmSans.variable} suppressHydrationWarning>
      <body id="top">
        <script dangerouslySetInnerHTML={{ __html: enableJsClass }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
