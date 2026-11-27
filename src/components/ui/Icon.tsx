import type { ReactNode } from "react";

/** Inline SVG line icons (from the approved design). Always decorative: aria-hidden. */
const icons = {
  chevron: { stroke: 2.5, body: <path d="M6 9l6 6 6-6" /> },
  globe: {
    stroke: 1.8,
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
      </>
    ),
  },
  menu: { stroke: 2, body: <path d="M4 7h16M4 12h16M4 17h16" /> },
  close: { stroke: 2, body: <path d="M6 6l12 12M18 6L6 18" /> },
  arrowRight: { stroke: 2, body: <path d="M5 12h14M13 6l6 6-6 6" /> },
  arrowLeft: { stroke: 2, body: <path d="M19 12H5M11 6l-6 6 6 6" /> },
  arrowUp: { stroke: 2.4, body: <path d="M6 15l6-6 6 6" /> },
  prev: { stroke: 2.4, body: <path d="M15 6l-6 6 6 6" /> },
  next: { stroke: 2.4, body: <path d="M9 6l6 6-6 6" /> },
  check: { stroke: 2.4, body: <path d="M5 12.5l4.5 4.5L19 7.5" /> },
  chip: {
    stroke: 1.8,
    body: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </>
    ),
  },
  pulse: { stroke: 1.8, body: <path d="M22 12h-4l-3 9L9 3l-3 9H2" /> },
  layers: {
    stroke: 1.8,
    body: (
      <>
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </>
    ),
  },
  message: { stroke: 1.8, body: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
  barChart: { stroke: 1.8, body: <path d="M18 20V10M12 20V4M6 20v-6" /> },
  database: {
    stroke: 1.8,
    body: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    ),
  },
  monitor: {
    stroke: 1.8,
    body: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  shield: {
    stroke: 1.8,
    body: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  phone: {
    stroke: 2,
    body: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  mail: {
    stroke: 2,
    body: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  mapPin: {
    stroke: 1.5,
    body: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
  send: {
    stroke: 2,
    body: <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />,
  },
  search: {
    stroke: 2,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </g>
    ),
  },
  calendar: {
    stroke: 1.8,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
      </g>
    ),
  },
  eye: {
    stroke: 1.8,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </g>
    ),
  },
  target: {
    stroke: 1.8,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </g>
    ),
  },
  handshake: {
    stroke: 1.8,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 11l4-4 4 1 3-2 4 1 5 4" />
        <path d="M6 7v6l5 5a1.5 1.5 0 0 0 2.1-2.1M13 15.9l1 1a1.5 1.5 0 0 0 2.1-2.1l-1-1M15 13.8l.5.5a1.5 1.5 0 0 0 2.1-2.1L13 7.6l-2.3 1.7a1.8 1.8 0 0 1-2.5-.5" />
        <path d="M18 8v4" />
      </g>
    ),
  },
  briefcase: {
    stroke: 1.8,
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
      </g>
    ),
  },
  // ── Careers: values (design viewBoxes kept) ──
  scale: {
    stroke: 1.4,
    viewBox: "0 0 32 32",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v24M10 4h12M6 12l4 8 4-8M18 12l4 8 4-8M4 28h24" />
      </g>
    ),
  },
  people: {
    stroke: 1.4,
    viewBox: "0 0 36 28",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="6" r="5" />
        <path d="M8 26Q10 16 18 15q8 1 10 11" />
        <circle cx="6" cy="9" r="4" />
        <path d="M0 26q2-8 6-9" />
        <circle cx="30" cy="9" r="4" />
        <path d="M36 26q-2-8-6-9" />
      </g>
    ),
  },
  arrowsSwap: {
    stroke: 1.4,
    viewBox: "0 0 36 24",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h28M26 3l6 5-6 5M32 16H4M10 11l-6 5 6 5" />
      </g>
    ),
  },
  star: {
    stroke: 1.4,
    viewBox: "0 0 30 30",
    body: <polygon strokeLinejoin="round" points="15,2 18.5,10.5 28,11.5 21.5,17.5 23.5,27 15,22.5 6.5,27 8.5,17.5 2,11.5 11.5,10.5" />,
  },
  // ── Careers: benefits ──
  heartPlus: {
    stroke: 1.5,
    viewBox: "0 0 36 36",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 32S4 24 4 13a8 8 0 0 1 14-4.7A8 8 0 0 1 32 13c0 11-14 19-14 19z" />
        <path d="M18 13v9M13.5 17.5h9" />
      </g>
    ),
  },
  clock: {
    stroke: 1.5,
    viewBox: "0 0 36 36",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="14" />
        <path d="M18 10v8l5 4" />
      </g>
    ),
  },
  growth: {
    stroke: 1.5,
    viewBox: "0 0 36 36",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 28l8-10 6 4 8-10 6-4M26 8h6v6" />
      </g>
    ),
  },
  inclusive: {
    stroke: 1.5,
    viewBox: "0 0 36 36",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="5" />
        <path d="M6 28q2-9 8-10 6 1 8 10" />
        <circle cx="26" cy="12" r="4" />
        <path d="M22 28q1-8 4-9 3 1 6 9" opacity="0.7" />
      </g>
    ),
  },
  mentor: {
    stroke: 1.5,
    viewBox: "0 0 36 36",
    body: (
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6h26v16H18l-6 7v-7H5z" />
        <path d="M11 13h14M11 17h9" />
      </g>
    ),
  },
  instagram: {
    stroke: 2,
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),
  },
} satisfies Record<string, { stroke: number; body: ReactNode; viewBox?: string }>;

/** Filled icons. */
const filled = {
  pause: (
    <>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </>
  ),
  play: <path d="M7 4l13 8-13 8z" />,
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
  ),
  facebook: (
    <path d="M14 8.5V6.8c0-.8.5-1.3 1.4-1.3H17V2.2h-2.6C11.6 2.2 10.4 4 10.4 6.5v2H8v3.3h2.4V22H14V11.8h2.6l.4-3.3z" />
  ),
  youtube: (
    <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z" />
  ),
};

export type IconName = keyof typeof icons | keyof typeof filled;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 20, strokeWidth, className }: IconProps) {
  if (name in filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {filled[name as keyof typeof filled]}
      </svg>
    );
  }
  const icon = icons[name as keyof typeof icons];
  const viewBox = "viewBox" in icon ? icon.viewBox : "0 0 24 24";
  const [, , vw, vh] = viewBox.split(" ").map(Number);
  return (
    <svg
      width={size}
      height={Math.round((size * vh) / vw)}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? icon.stroke}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {icon.body}
    </svg>
  );
}
