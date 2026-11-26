"use client";

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { contactForm, offices, type ContactFieldName } from "@/content/contact";
import { Icon } from "@/components/ui/Icon";
import { readContactValues, validateContact, type ContactErrors } from "@/lib/contactValidation";
import styles from "./ContactForm.module.css";

const initialState: ContactState = { status: "idle" };

const autoComplete: Partial<Record<ContactFieldName, string>> = {
  firstName: "given-name",
  lastName: "family-name",
  email: "email",
  phone: "tel",
  company: "organization",
};

const inputType: Partial<Record<ContactFieldName, string>> = { email: "email", phone: "tel" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const [cleared, setCleared] = useState<Set<ContactFieldName>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  const serverErrors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : undefined;
  const errorFor = (name: ContactFieldName) => (cleared.has(name) ? undefined : (clientErrors[name] ?? serverErrors[name]));

  // Move focus to the result so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error" && Object.keys(state.errors).length === 0) summaryRef.current?.focus();
  }, [state]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // With JS: validate in the browser, then submit without resetting the form.
    // Without JS the form posts to the server action, which applies the same rules.
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errors = validateContact(readContactValues(data));
    setClientErrors(errors);
    setCleared(new Set());
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    startTransition(() => formAction(data));
  };

  const clearError = (name: ContactFieldName) => {
    if (errorFor(name)) setCleared((prev) => new Set(prev).add(name));
  };

  if (state.status === "success") {
    return (
      <div className={styles.card}>
        <div className={styles.success} role="status">
          <span className={styles.successIcon}>
            <Icon name="check" size={32} strokeWidth={2} />
          </span>
          <h3 ref={successRef} tabIndex={-1} className={styles.successTitle}>
            {contactForm.success.title}
          </h3>
          <p className={styles.successText}>{contactForm.success.text}</p>
        </div>
      </div>
    );
  }

  const field = (name: ContactFieldName, full = false) => {
    const config = contactForm.fields[name];
    const id = `contact-${name}`;
    const error = errorFor(name);
    const errorId = `${id}-error`;
    const common = {
      id,
      name,
      "aria-required": config.required || undefined,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      defaultValue: values?.[name] ?? "",
      onInput: () => clearError(name),
      className: `${styles.control} ${error ? styles.invalid : ""}`,
    };

    let control;
    if (name === "message") {
      control = <textarea {...common} placeholder={config.placeholder} rows={5} />;
    } else if (name === "region") {
      control = (
        <select {...common} onChange={() => clearError(name)}>
          <option value="" disabled>
            {config.placeholder}
          </option>
          {offices.map((o) => (
            <option key={o.id} value={o.id}>
              {o.regionLabel}
            </option>
          ))}
        </select>
      );
    } else {
      control = (
        <input
          {...common}
          type={inputType[name] ?? "text"}
          placeholder={config.placeholder}
          autoComplete={autoComplete[name]}
        />
      );
    }

    return (
      <div className={`${styles.group} ${full ? styles.full : ""}`}>
        <label htmlFor={id}>
          {config.label}
          {config.required && (
            <span className={styles.req} aria-hidden="true">
              *
            </span>
          )}
        </label>
        {control}
        {error && (
          <p id={errorId} className={styles.error}>
            {error}
          </p>
        )}
      </div>
    );
  };

  const deliveryError = state.status === "error" && Object.keys(state.errors).length === 0 ? state.message : null;

  return (
    <div className={styles.card}>
      <form ref={formRef} action={formAction} onSubmit={onSubmit} noValidate aria-busy={pending}>
        {deliveryError && (
          <p ref={summaryRef} tabIndex={-1} className={styles.alert} role="alert">
            {deliveryError}
          </p>
        )}
        <div className={styles.grid}>
          {field("firstName")}
          {field("lastName")}
          {field("email")}
          {field("phone")}
          {field("company")}
          {field("region")}
          {field("subject", true)}
          {field("message", true)}
        </div>

        {/* Spam honeypot — hidden from people and assistive tech. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={styles.footer}>
          <p className={styles.note}>{contactForm.note}</p>
          <button type="submit" className="btn btn-teal" disabled={pending}>
            {pending ? contactForm.submitting : contactForm.submit}
            <Icon name="send" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
