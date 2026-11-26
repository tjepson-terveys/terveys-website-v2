"use server";

import { contactForm } from "@/content/contact";
import {
  readContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contactValidation";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; errors: ContactErrors; values: ContactValues };

/**
 * Handles the contact form (works without JavaScript too).
 *
 * TODO: connect delivery. Set CONTACT_WEBHOOK_URL (e.g. a CRM, Zapier/Make, or email service
 * webhook) — the validated message is POSTed to it as JSON. Without it, development accepts the
 * message without sending it, and production shows an error so messages are never silently lost.
 */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  const values = readContactValues(data);

  // Honeypot: real users never fill the hidden "website" field.
  if (String(data.get("website") ?? "")) return { status: "success" };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: contactForm.errors.summary, errors, values };
  }

  const delivered = await deliver(values);
  if (!delivered) {
    return { status: "error", message: contactForm.errors.delivery, errors: {}, values };
  }
  return { status: "success" };
}

async function deliver(values: ContactValues): Promise<boolean> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] CONTACT_WEBHOOK_URL is not set — message not delivered.");
      return false;
    }
    console.warn("[contact] CONTACT_WEBHOOK_URL is not set — development mode, message not sent anywhere.");
    return true;
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, submittedAt: new Date().toISOString(), source: "terveystech.com/contact" }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) console.error(`[contact] Webhook responded ${res.status}.`);
    return res.ok;
  } catch (err) {
    console.error("[contact] Webhook request failed:", err instanceof Error ? err.message : err);
    return false;
  }
}
