import { isSegmentId, type SegmentId } from "@/content/healthcare";

/** Fired when a menu/footer link asks the healthcare tabs to show a segment. */
export const SEGMENT_EVENT = "terveys:segment";

export function requestSegment(id: SegmentId) {
  window.dispatchEvent(new CustomEvent<SegmentId>(SEGMENT_EVENT, { detail: id }));
}

/** Reads ?segment=imaging, #imaging or #ind-imaging from the current URL. */
export function readSegmentFromUrl(): SegmentId | null {
  const query = new URLSearchParams(window.location.search).get("segment");
  if (isSegmentId(query)) return query;
  const hash = window.location.hash.replace(/^#(ind-)?/, "");
  return isSegmentId(hash) ? hash : null;
}
