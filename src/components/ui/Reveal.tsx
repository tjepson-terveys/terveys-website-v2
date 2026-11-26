"use client";

import { useEffect } from "react";

/**
 * Scroll reveal. Mark elements with `data-reveal` (server-rendered); this component observes
 * them and fades + lifts them in once. Elements with `data-reveal="stagger"` are delayed
 * 90ms per position in their parent, in groups of 3.
 *
 * Content is never hidden without JS (the hiding CSS is scoped to html.js) or for
 * reduced-motion users. After the reveal runs the attribute is removed so the element's own
 * hover transitions aren't delayed.
 */
export function Reveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const finish = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      el.classList.remove("is-revealed");
      el.style.transitionDelay = "";
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      targets.forEach(finish);
      return;
    }

    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-revealed");
          timers.push(window.setTimeout(() => finish(el), 1000));
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => {
      if (el.dataset.reveal === "stagger" && el.parentElement) {
        const index = Array.from(el.parentElement.children).indexOf(el);
        el.style.transitionDelay = `${(index % 3) * 90}ms`;
      }
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
