// Regenerates src/components/careers/worldMapData.ts (dotted world map on /careers).
// Usage: npm i --no-save world-atlas d3-geo topojson-client && node scripts/generate-world-map.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { geoNaturalEarth1, geoContains } from "d3-geo";
import { feature } from "topojson-client";
const topo = JSON.parse(readFileSync(new URL("../node_modules/world-atlas/countries-50m.json", import.meta.url)));
const countries = feature(topo, topo.objects.countries).features;
const land = feature(topo, topo.objects.land);
const W = 1000;
const proj = geoNaturalEarth1().fitWidth(W, { type: "Sphere" });
const top = proj([0, 78])[1], bottom = proj([0, -56])[1];
const H = Math.round(bottom - top);
const STEP = 8.5;
const highlight = { "356": "india", "392": "japan", "840": "usa" };
const hl = countries.filter((c) => highlight[c.id]);
// bounding boxes speed up the land test
let landD = "", hlD = "", n = 0, h = 0;
const r = (v) => Math.round(v * 10) / 10;
for (let y = top + STEP / 2; y < bottom; y += STEP) {
  for (let x = STEP / 2; x < W; x += STEP) {
    const ll = proj.invert([x, y]);
    if (!ll || !isFinite(ll[0])) continue;
    if (!geoContains(land, ll)) continue;
    const isHl = hl.some((c) => geoContains(c, ll));
    const seg = `M${r(x)} ${r(y - top)}h0`;
    if (isHl) { hlD += seg; h++; } else { landD += seg; n++; }
  }
}
const city = (lon, lat) => { const [x, y] = proj([lon, lat]); return { x: r(x), y: r(y - top) }; };
const out = `// Generated from Natural Earth 1:50m (world-atlas, public domain) — Natural Earth projection,
// ${STEP}px dot grid. Regenerate rather than editing by hand.
export const worldMap = {
  width: ${W},
  height: ${H},
  dotSize: ${(STEP * 0.42).toFixed(2)},
  land: "${landD}",
  highlight: "${hlD}",
  cities: {
    india: ${JSON.stringify(city(76.95, 8.52))},
    japan: ${JSON.stringify(city(139.69, 35.69))},
    usa: ${JSON.stringify(city(-97.74, 30.27))},
  },
} as const;
`;
writeFileSync(new URL("../src/components/careers/worldMapData.ts", import.meta.url), out);
console.log({ W, H, land: n, highlight: h, bytes: out.length, cities: [city(76.95, 8.52), city(139.69, 35.69), city(-97.74, 30.27)] });
