# Terveys website

Marketing site for Terveys Technology Solutions, built with Next.js 16 (App Router, TypeScript) from the approved design `terveystech-home.html`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass with zero errors/warnings)
npm run start    # serve the production build
npm run lint
```

Requires Node.js 20.9+. Deploys to **Vercel** as-is (import the repo; no settings needed).

## Stack

- Next.js 16.4 with **Cache Components** + Partial Prefetching (set in `next.config.ts`), React 19.
- CSS Modules per component, plus `src/app/globals.css` for design tokens, reset, shared section classes and buttons. No Tailwind or UI libraries.
- DM Sans through `next/font/google` (a variable font with the optical-size axis), exposed as `--font-dm-sans`.
- `next/image` for every image. `images.unsplash.com` is allowed in `next.config.ts`.

## Folder structure

```
src/
  app/
    layout.tsx            <html>, font, metadata, JSON-LD, skip link, Header, Footer
    page.tsx              Home page: sections in order
    globals.css           tokens, reset, .section-*, .btn-*, scroll-reveal styles
    sitemap.ts, robots.ts
    about/                About Us page
    careers/              Careers page
    contact/              Contact page + server action (actions.ts)
    services/, healthcare/[segment]/, insights/…, about/, careers/…, privacy-policy/, ja/
                          stub pages ("Content coming soon")
  components/
    layout/   Header (client), MegaMenu, MobileMenu (client), Footer, Logo, SkipLink, StubPage
    home/     HeroSlider (client), Intro, WhatWeDo, HealthcareIntro, HealthcareTabs (client),
              CaseStudies, Testimonials (client), ConsultationCta
    about/    AboutSections (hero, vision/mission, values, leadership, clients, certifications, notice)
    careers/  CareersSections, GrowCarousel (client), GlobalPresence + worldMapData, TeamSpeak (client),
              LifeGallery (client), CurrentOpenings
    contact/  ContactForm (client)
    ui/       Button, Icon (inline SVG line icons), RichText, Reveal (client), SegmentLink (client)
  content/    ALL copy, links and image URLs (typed)
  lib/        hooks (media query / scroll), segment deep links, hero video check
public/
  videos/          drop hero.mp4 here
  images/badges/   drop official ISO badge artwork here
  og.png, favicon.svg, logo-placeholder.png   (placeholders)
```

## Editing content

Everything a person reads is in `src/content/`. Components contain no copy.

| File | Contains |
|---|---|
| `site.ts` | name, meta description, logo, social links, address, Contact / 日本語 links |
| `navigation.ts` | header menu items, mega-menu links and feature cards |
| `hero.ts` | hero slides (media, tag, title, sub-line, buttons) and slide timing |
| `intro.ts` | "Who We Are" section |
| `services.ts` | "What We Do" header and the five service tiles (`slug` drives `/services/[slug]`) |
| `healthcare.ts` | dark Healthcare intro (certifications, standards) and the four segment tabs (`id` drives `/healthcare/[segment]`) |
| `caseStudies.ts` | case studies: card summaries, plus optional full detail pages (sections, results, quote, CTA) |
| `testimonials.ts` | testimonial slides |
| `cta.ts` | "Building something for healthcare?" band |
| `about.ts` | About Us: hero, vision & mission, what makes us different, values, leadership (photos + LinkedIn), client logos, certifications, notice |
| `careers.ts` | Careers page: overview, values, benefits, "Grow without limits" slides, global presence stats, team quotes, Life at Terveys photos, current openings, join CTA |
| `contact.ts` | Contact page: header, offices (addresses, phones), form labels and messages, office cards |
| `footer.ts` | footer columns, recent posts, ISO badges, copyright line |
| `pages.ts` | titles for the stub pages |

Headings with a line break or a teal accent use the `Rich` format, an array of parts such as
`[{ text: "Built for healthcare." }, { text: "Engineered for compliance.", br: true, accent: true }]`.

### Swapping media

- **Hero video:** put the file at `public/videos/hero.mp4`, or change `src` in `hero.ts` for slide 1. Until the file exists, the build detects that it's missing and shows the poster image, so a missing file never causes a 404. Set `poster` to a frame from the video. Any slide can be `{ type: "video", src, poster }` or `{ type: "image", src, alt }`.
- **Logo:** add the SVG to `public/` (for example `public/images/logo.svg`) and set `site.logo.image = { src, width, height }` in `site.ts`. Header, mobile menu and footer all switch from the text wordmark to the image. Also update `site.logo.jsonLdUrl`.
- **Images:** replace the `src` values in the content files. Local files go in `public/` with a path like `/images/foo.jpg`. Remote hosts must be added to `images.remotePatterns` in `next.config.ts`.
- **ISO badges:** add the artwork to `public/images/badges/` and set `image` on each entry in `footer.ts`. Until then, a CSS badge is rendered.
- **OG image / favicon:** replace `public/og.png` (1200×630) and `public/favicon.svg`.

### Healthcare deep links

Menu and footer links go to `/?segment=<id>#industries`. That scrolls to the healthcare section and selects the tab, including when the link is clicked from another page. `/#imaging` and `/#ind-imaging` also work. Segment ids are `medtech`, `imaging`, `providers` and `digital`.

## Contact form

`/contact` posts to a server action (`src/app/contact/actions.ts`). It also works without JavaScript. Validation rules live in `src/lib/contactValidation.ts` and run in both the browser and on the server. A hidden honeypot field filters out simple spam bots.

**Delivery:** set the `CONTACT_WEBHOOK_URL` environment variable, for example in Vercel under Project → Settings → Environment Variables. Each valid message is POSTed to it as JSON (`firstName, lastName, email, phone, company, region, subject, message, submittedAt, source`). This works with Zapier, Make, a CRM, or an email-sending function.

- In **development**, if the variable isn't set, messages are accepted but not sent anywhere. A warning is printed to the server log.
- In **production**, if the variable isn't set, the form shows an error that tells people to email info@terveystech.com. Messages are never silently lost.

## Case studies

- **URLs match the original WordPress site exactly:** `/case-studies/` and `/case-studies/<slug>/`. All 14 pages were imported from terveystech.com, with the same slugs, the same `<title>` tags and the same H1s. **Never change the slug of a published case study.**
- **One file per case study** in `src/content/case-studies/`. Imported pages use a `body` made of blocks (heading, subheading, paragraph, list, table). The UAE audit page uses the richer structured format (`sections`, `results`, `quote`, `cta`) from the case-study design. `src/content/caseStudies.ts` holds the types, page copy and the list.
- **Adding one:** create a file in `src/content/case-studies/` and add it to the list in `caseStudies.ts`. The page, the "On this page" list, the sitemap entry (with publish date) and the Article JSON-LD are all generated from it. `featured: true` puts it on the home page.
- **Index filter:** categories come from the original site. The old `/portfolio-category/<name>/` URLs redirect to `/case-studies/?category=<Name>` with that filter selected, and `/case-studies/page/2/` redirects to `/case-studies/`.
- To re-import from the live site, the scripts used are described in the commit history. The parser keeps text verbatim.

## Blog

- **URLs match the original site exactly:** the index is `/blogs/` and posts live at the site root, `/<slug>/` (e.g. `/ai-governance-in-healthcare/`), served by `src/app/[slug]/page.tsx`. All 10 posts were imported with the same slugs, `<title>` tags and H1s. Two legacy slugs don't match their titles (`/schools-to-hold-programming-courses-in-2016/` is the telemedicine post, `/nvidias-eye-tracking-tech-could-revolutionize-virtual-reality/` is microservices). They're kept deliberately because they're the indexed URLs.
- **One file per post** in `src/content/blog/`. Fields: title, `seoTitle`, optional `subtitle`, description, author, `publishedAt`, `readingMinutes`, cover image (with width/height, shown uncropped) and `body` blocks. `src/content/blog.ts` holds the type, page copy and the list.
- **Body blocks** are shared with case studies (`ArticleBlock` in `types.ts`, rendered by `components/article/ArticleBody`): heading, subheading, paragraph (optional bold `label`), lead, quote, callout, list, table.
- **Adding a post:** create a file in `src/content/blog/` and add it to the list in `blog.ts`. Pick a slug that doesn't clash with a top-level page. The page, the "On this page" list, the sitemap entry and the BlogPosting JSON-LD are generated from it.
- **Redirects:** `/blogs/2/`, `/category/*`, `/author/*` and `/tag/*` all go to `/blogs/`.
- The footer's "Recent Posts" link to the real articles.

## News & Events

- **URLs match the original site:** the newsroom is `/news-events/` and items live at the site root (`/<slug>/`), sharing `src/app/[slug]/page.tsx` with blog posts. All 10 items were imported with the same slugs, `<title>` tags and H1s. `/news-events/2/` and `/category/news-events/` redirect to `/news-events/`.
- **One file per item** in `src/content/news/`. Fields: `kind` (`"Event"` or `"Announcement"`; I assigned these, so adjust as needed), optional `subtitle`, description, `publishedAt`, cover (with size), `body` blocks, a `gallery` of photos and `hashtags`. `src/content/news.ts` holds the type, page copy and the list.
- **Design:** the listing uses the shared Insights hero and the same section colours as Case Studies and Blogs (dark hero, white toolbar, soft-grey body). Its layout is deliberately its own: an All / Events / Announcements switch, a magazine-style lead block and a timeline grouped by year with date stamps. Articles use the same dark header band and overlapping cover as case studies and blog posts, followed by a narrow press-release column, hashtags and a photo gallery with a full-screen lightbox.
- The certification post says "verify our certification through the following link: Verification Link." but there's no link on the live site either. Add the URL, or reword it.

## SEO & URLs

- `trailingSlash: true` (in `next.config.ts`): every URL ends in `/`, like the WordPress site. `<Link>` adds the slash automatically.
- `site.url` is `https://www.terveystech.com`. The live site redirects the bare domain to `www` and uses `www` in its canonicals, so canonicals, the sitemap, robots.txt and JSON-LD all use `www`.
- Redirects from old WordPress URLs (`/about-us/`, `/job-openings/`, `/jobs/*`, `/life-at-terveys/`, `/case-studies/page/*`, `/portfolio-category/*`) are in `next.config.ts`.

## About page notes

- Copy comes from the current terveystech.com/about-us page. The heading over the client logos had a grammar fix (marked "Copy edit" in `about.ts`).
- **Leaders:** add, remove or reorder people in `leadership.leaders`. Give each person a `group`: `"executive"` for a large portrait card in the top row, or `"regional"` for a compact card below. The group headings are in `leadership.groups`. Portraits go in `public/images/about/leaders/` (square, 800×800, on the dark brand backdrop).
- **Client logos:** stored in `public/images/clients/`. They show in greyscale and switch to colour on hover.
- The official ISO badge artwork in `public/images/badges/` is used on the About page and in the footer.
- `/about-us` (the current site's URL) redirects to `/about`.

## Careers page notes

- The page starts on a white section, so it adds `data-solid-header` and the site header renders solid from the top. Add the same attribute to any future page that has no dark top band.
- **World map:** generated from Natural Earth 1:50m data as a dot grid, with the office countries highlighted. To change it (dot density, highlighted countries, city positions), edit and run `scripts/generate-world-map.mjs`. Usage is in the file header.
- **Team Speak portraits:** show initials until `photo` is set on a speaker in `careers.ts`.
- **Careers is one page.** The menu item is a plain link, with no sub-menu. The footer's "Current Openings" and "Life At Terveys" links jump to `/careers#current-openings` and `/careers#life-at-terveys`.
- **Life at Terveys gallery:** a horizontally scrolling, scroll-snapped strip. It works with swipe, trackpad, the arrow buttons, or keyboard (focus the strip, then use ←/→). To add or reorder photos, put the files in `public/images/life/` and edit `lifeAtTerveys.photos` in `careers.ts`. Every photo needs a descriptive `alt`.
- **Current openings:** edit `currentOpenings.jobs` in `careers.ts`. If the list is empty, a "no open positions" message is shown. "Apply now" opens an email to `currentOpenings.applyEmail`, with the job title as the subject.
- **Redirects** (`next.config.ts`): the current site's `/life-at-terveys`, `/job-openings` and `/jobs/*` URLs land on the matching careers section, so old links and search results keep working.

## Behaviour notes

- **Header:** transparent over the hero; turns solid after 40px of scroll or while a mega menu is open. Mega menus open on hover (180ms close delay) or click, and close on outside click, link click or `Escape` (focus returns to the trigger). At ≤1100px a full-screen menu with focus trap and scroll lock replaces the links.
- **Hero:** advances when the active progress bar's CSS animation ends (6s). Pausing freezes the bar and the video. Reduced-motion users get no autoplay and no animation.
- **Scroll reveal:** server-rendered `data-reveal` attributes, animated by `<Reveal />`. Content is hidden only when an inline script has added `html.js` before first paint. It stays visible without JS and for reduced-motion users.
- **Footer year:** cached with `"use cache"` and `cacheLife("days")`, so it stays in the static shell and refreshes daily.

## Launch TODO list

Search the code for `TODO:` to find each item.

- [ ] **Logo:** currently a text wordmark (`site.ts`)
- [ ] **Hero video:** `public/videos/hero.mp4` and its poster (`hero.ts`)
- [ ] **All Unsplash stock photos:** hero, intro, tiles, mega menus, healthcare panels, case studies, CTA background. After replacing them, remove `images.unsplash.com` from `next.config.ts`
- [ ] **Links that were `#` in the design:** they now point at stub pages. Confirm the destinations: hero slide 4 "Read More" (→ `/ja`), footer service links (mapped to the closest practice area), recent-post links, case-study cards
- [ ] **Testimonials:** TEMPLATE TEXT. Must be replaced with real, approved quotes before launch (`testimonials.ts`)
- [ ] **Case studies:** the UAE case study's client quote isn't on the live page. Confirm it's real and approved, or remove it. A few older covers are generic stock or theme demo photos inherited from the live site (meetup, conference, demo images), so consider replacing them
- [ ] **Other live URLs:** services (`/services/software-development-in-trivandrum/`, …), `/industries/*`, blog posts and `/jp/*` exist on the current site but not yet here. Add pages or redirects for them before switching domains
- [ ] Meta description wording (`site.ts`), OG image, favicon, JSON-LD logo
- [ ] Japanese copy for `/ja`
- [ ] **Careers copy review:** some text refers to "health plans" and "Risk Adjustment", which doesn't match the medtech positioning. Some passages closely resemble other companies' careers pages. Confirm all of it is original (`careers.ts`)
- [ ] **Careers stats:** "500+ professionals" and "24/7 delivery" are unverified
- [ ] **Team Speak:** five named employee quotes are TEMPLATE TEXT. Replace them with real, consented quotes and portraits
- [ ] **Careers benefits and programmes:** confirm the benefits apply in India, Japan and the USA, and that "Garage Ventures" exists
- [ ] **Careers photos:** Unsplash placeholders
- [ ] **Job applications:** "Apply now" emails info@terveystech.com. Switch it to a careers inbox or your ATS link (`currentOpenings.applyEmail`). The current site uses an on-page form with CV upload
- [ ] **Current openings:** confirm the three roles (taken from the current site) are still open
- [ ] **Gallery captions:** confirm the short captions on the Life at Terveys photos
- [ ] **Contact form delivery:** set `CONTACT_WEBHOOK_URL` before launch
- [ ] **Contact page:** confirm addresses and phone numbers (`contact.ts`). Replace the office map placeholders with embedded or static maps
