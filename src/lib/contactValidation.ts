import { contactForm, offices, type ContactFieldName } from "@/content/contact";

export type ContactValues = Record<ContactFieldName, string>;
export type ContactErrors = Partial<Record<ContactFieldName, string>>;

export const contactFieldNames = Object.keys(contactForm.fields) as ContactFieldName[];

const MAX_LENGTH: Record<ContactFieldName, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  company: 200,
  region: 20,
  subject: 200,
  message: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readContactValues(data: FormData): ContactValues {
  return Object.fromEntries(
    contactFieldNames.map((name) => [name, String(data.get(name) ?? "").trim()]),
  ) as ContactValues;
}

/** Same rules in the browser and on the server. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const { errors: msg, fields } = contactForm;
  for (const name of contactFieldNames) {
    const value = values[name];
    if (fields[name].required && !value) errors[name] = msg.required;
    else if (value.length > MAX_LENGTH[name]) errors[name] = msg.tooLong;
  }
  if (!errors.email && values.email && !EMAIL_RE.test(values.email)) errors.email = msg.email;
  if (values.region && !offices.some((o) => o.id === values.region)) errors.region = msg.required;
  return errors;
}
