"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { ArticleTile, FeaturedCard, listingStyles as styles } from "@/components/article/ArticleCards";
import { caseStudiesIndex, caseStudyHref, type CaseStudy } from "@/content/caseStudies";
import { Icon } from "@/components/ui/Icon";

/** ?category=AI preselects a filter (old /portfolio-category/* URLs redirect here). */
function useUrlCategory() {
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener("popstate", onChange);
      return () => window.removeEventListener("popstate", onChange);
    },
    () => new URLSearchParams(window.location.search).get("category"),
    () => null,
  );
}

const matches = (cs: CaseStudy, q: string) =>
  !q || [cs.title, cs.description, cs.category, ...cs.categories].join(" ").toLowerCase().includes(q);

type CaseStudyIndexProps = { caseStudies: CaseStudy[]; categories: string[] };

export function CaseStudyIndex({ caseStudies, categories }: CaseStudyIndexProps) {
  const searchId = useId();
  const urlCategory = useUrlCategory();
  const [chosen, setChosen] = useState<string | null | undefined>(undefined);
  const [query, setQuery] = useState("");
  const active = chosen === undefined ? (urlCategory && categories.includes(urlCategory) ? urlCategory : null) : chosen;
  const q = query.trim().toLowerCase();

  const visible = caseStudies.filter((cs) => (!active || cs.categories.includes(active)) && matches(cs, q));
  const [featured, ...rest] = visible;

  const choose = (value: string | null) => {
    setChosen(value);
    // Keep the URL shareable (?category=…) without adding history entries.
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("category", value);
    else url.searchParams.delete("category");
    window.history.replaceState(window.history.state, "", url);
  };

  const reset = () => {
    setQuery("");
    choose(null);
  };

  const chip = (label: string, value: string | null) => {
    const count = value ? caseStudies.filter((cs) => cs.categories.includes(value)).length : caseStudies.length;
    return (
      <button
        key={label}
        type="button"
        className={`${styles.chip} ${active === value ? styles.chipActive : ""}`}
        aria-pressed={active === value}
        onClick={() => choose(value)}
      >
        {label}
        <span className={styles.count}>{count}</span>
      </button>
    );
  };

  return (
    <>
      <div className={styles.toolbar}>
        <div className={`section-wrap ${styles.toolbarInner}`}>
          <div className={styles.chips} role="group" aria-label={caseStudiesIndex.filterLabel}>
            {chip(caseStudiesIndex.allLabel, null)}
            {categories.map((c) => chip(c, c))}
          </div>
          <div className={styles.search}>
            <label htmlFor={searchId} className="visually-hidden">
              {caseStudiesIndex.searchLabel}
            </label>
            <Icon name="search" size={18} className={styles.searchIcon} />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={caseStudiesIndex.searchPlaceholder}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className={styles.results}>
        <div className="section-wrap">
          <p className={styles.summary} aria-live="polite">
            {caseStudiesIndex.showing(visible.length, active)}
          </p>

          {visible.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>{caseStudiesIndex.emptyTitle}</p>
              <p className={styles.emptyText}>{caseStudiesIndex.emptyText}</p>
              <button type="button" className="btn btn-teal" onClick={reset}>
                {caseStudiesIndex.resetLabel}
              </button>
            </div>
          ) : (
            // key restarts the entrance animation whenever the filter changes
            <div key={`${active ?? "all"}|${q}`} className={styles.list}>
              <FeaturedCard
                href={caseStudyHref(featured)}
                image={featured.image}
                title={featured.title}
                description={featured.description}
                date={featured.publishedAt}
                label={caseStudiesIndex.featuredLabel}
                tags={featured.categories}
                readLabel={caseStudiesIndex.readLabel}
              />
              {rest.length > 0 && (
                <div className={styles.grid}>
                  {rest.map((cs, i) => (
                    <ArticleTile
                      key={cs.slug}
                      href={caseStudyHref(cs)}
                      image={cs.image}
                      title={cs.title}
                      description={cs.description}
                      date={cs.publishedAt}
                      tag={cs.categories[0] ?? cs.category}
                      readLabel={caseStudiesIndex.readLabel}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
