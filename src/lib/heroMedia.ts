import { existsSync } from "node:fs";
import path from "node:path";
import type { HeroSlide } from "@/content/hero";

export type ResolvedHeroSlide = HeroSlide & {
  /** False when a local video file isn't in /public yet — the poster image is shown instead. */
  videoAvailable: boolean;
};

/** Checks at build time whether each local hero video exists, so a missing file never 404s. */
export function resolveHeroSlides(slides: HeroSlide[]): ResolvedHeroSlide[] {
  return slides.map((slide) => {
    if (slide.media.type !== "video") return { ...slide, videoAvailable: false };
    const { src } = slide.media;
    const isRemote = /^https?:\/\//.test(src);
    const videoAvailable = isRemote || existsSync(path.join(process.cwd(), "public", src));
    return { ...slide, videoAvailable };
  });
}
