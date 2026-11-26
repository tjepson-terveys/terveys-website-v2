import type { NextConfig } from "next";

/** Old /portfolio-category/<slug>/ pages → case-study index with that filter selected. */
const portfolioCategories: Record<string, string> = {
  ai: "AI",
  data: "Data",
  "food-restaurant": "Food & Restaurant",
  healthcare: "Healthcare",
  service: "Service",
  startup: "Startup",
  "transportation-logistics-airline": "Transportation & Logistics (Airline)",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  /**
   * URLs end with "/" — the same convention as the current WordPress site, so every
   * existing URL (e.g. /case-studies/<slug>/) keeps working exactly as indexed.
   */
  trailingSlash: true,
  images: {
    // TODO: remove once every Unsplash placeholder has been replaced with owned imagery.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    qualities: [75, 80],
  },
  async redirects() {
    return [
      // Careers is a single page now; old sub-pages and current-site URLs land on its sections.
      { source: "/careers/openings", destination: "/careers/#current-openings", permanent: true },
      { source: "/careers/life-at-terveys", destination: "/careers/#life-at-terveys", permanent: true },
      { source: "/job-openings", destination: "/careers/#current-openings", permanent: true },
      { source: "/jobs/:slug", destination: "/careers/#current-openings", permanent: true },
      { source: "/about-us", destination: "/about/", permanent: true },
      { source: "/life-at-terveys", destination: "/careers/#life-at-terveys", permanent: true },

      // Case studies: keep WordPress pagination/category URLs working.
      { source: "/case-studies/page/:n", destination: "/case-studies/", permanent: true },
      ...Object.entries(portfolioCategories).flatMap(([slug, label]) => [
        {
          source: `/portfolio-category/${slug}`,
          destination: `/case-studies/?category=${encodeURIComponent(label)}`,
          permanent: true,
        },
        {
          source: `/portfolio-category/${slug}/page/:n`,
          destination: `/case-studies/?category=${encodeURIComponent(label)}`,
          permanent: true,
        },
      ]),
      // Blog: WordPress pagination, archive, author and tag pages → blog index.
      { source: "/blogs/:n(\\d+)", destination: "/blogs/", permanent: true },
      // News & Events: WordPress pagination and category archive → newsroom.
      { source: "/news-events/:n(\\d+)", destination: "/news-events/", permanent: true },
      { source: "/category/news-events", destination: "/news-events/", permanent: true },
      { source: "/category/:path*", destination: "/blogs/", permanent: true },
      { source: "/author/:name", destination: "/blogs/", permanent: true },
      { source: "/tag/:name", destination: "/blogs/", permanent: true },
      // Interim URLs used during the rebuild.
      { source: "/insights/blog", destination: "/blogs/", permanent: true },
      { source: "/insights/news", destination: "/news-events/", permanent: true },
      {
        source: "/insights/case-studies/uae-auditing-firm-digital-transformation",
        destination: "/case-studies/digital-transformation-of-auditing-processes-for-a-uae-based-training-auditing-firm/",
        permanent: true,
      },
      { source: "/insights/case-studies", destination: "/case-studies/", permanent: true },
      { source: "/insights/case-studies/:slug", destination: "/case-studies/:slug/", permanent: true },
    ];
  },
};

export default nextConfig;
