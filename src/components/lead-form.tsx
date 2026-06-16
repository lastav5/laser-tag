"use client";

import { Send } from "lucide-react";
import { startTransition, useState } from "react";
import { eventTypes, leadSchema, type LeadInput } from "@/lib/lead-schema";

const initialState: LeadInput = {
  name: "",
  phone: "",
  email: "",
  eventType: eventTypes[0],
  message: "",
};

type FieldErrors = Partial<Record<keyof LeadInput, string>>;

export function LeadForm() {
  const [formData, setFormData] = useState<LeadInput>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({
    tone: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function setField<K extends keyof LeadInput>(field: K, value: LeadInput[K]) {
    setFormData((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function submitLead(payload: LeadInput) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        message?: string;
        fieldErrors?: Record<string, string[]>;
      };

      if (!response.ok) {
        if (data.fieldErrors) {
          const mappedErrors = Object.fromEntries(
            Object.entries(data.fieldErrors).map(([key, value]) => [
              key,
              value?.[0] ?? "נא לבדוק את השדה הזה.",
            ]),
          ) as FieldErrors;
          setFieldErrors(mappedErrors);
        }

        setStatus({
          tone: "error",
          message: data.message ?? "לא הצלחנו לשלוח את הבקשה. נסו שוב בעוד רגע.",
        });
        return;
      }

      setStatus({
        tone: "success",
        message: data.message ?? "הפרטים נקלטו בהצלחה. נחזור אליכם בהקדם.",
      });
      setFieldErrors({});
      setFormData(initialState);
    } catch {
      setStatus({
        tone: "error",
        message: "יש כרגע תקלה זמנית בשליחה. אפשר לנסות שוב בעוד כמה דקות.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ tone: "idle", message: "" });

    const parsed = leadSchema.safeParse(formData);

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        name: flattened.name?.[0],
        phone: flattened.phone?.[0],
        email: flattened.email?.[0],
        eventType: flattened.eventType?.[0],
        message: flattened.message?.[0],
      });
      return;
    }

    startTransition(() => {
      void submitLead(parsed.data);
    });
  }

  const inputClassName =
    "w-full rounded-lg border border-[var(--outline-variant)] bg-[var(--background)] px-4 py-4 text-right text-[var(--foreground)] outline-none placeholder:text-white/25 focus:border-[var(--primary)] focus:ring-0";

  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--outline-variant)] bg-[rgba(32,31,31,0.6)] p-8 shadow-2xl backdrop-blur-xl md:p-12">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-4xl font-extrabold uppercase tracking-tight text-[var(--primary)]">
          תאריך פנוי מחכה לכם!
        </h2>
        <p className="text-lg text-white/72">
          השאירו פרטים ונחזור אליכם מיד לבדיקת זמינות
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          id="name"
          label="שם מלא"
          error={fieldErrors.name}
          input={
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => setField("name", event.target.value)}
              className={inputClassName}
              placeholder="הכנס את שמך"
            />
          }
        />

        <Field
          id="phone"
          label="טלפון"
          error={fieldErrors.phone}
          input={
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={formData.phone}
              onChange={(event) => setField("phone", event.target.value)}
              className={inputClassName}
              placeholder="הכנס מספר טלפון"
            />
          }
        />

        <Field
          id="email"
          label="אימייל"
          error={fieldErrors.email}
          input={
            <input
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => setField("email", event.target.value)}
              className={inputClassName}
              placeholder="הכנס כתובת אימייל"
            />
          }
        />

        <Field
          id="eventType"
          label="סוג אירוע"
          error={fieldErrors.eventType}
          input={
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={(event) =>
                setField("eventType", event.target.value as LeadInput["eventType"])
              }
              className={inputClassName}
            >
              {eventTypes.map((option) => (
                <option key={option} value={option} className="bg-[var(--background)]">
                  {option}
                </option>
              ))}
            </select>
          }
        />

        <Field
          id="message"
          label="פרטים נוספים"
          error={fieldErrors.message}
          className="md:col-span-2"
          input={
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(event) => setField("message", event.target.value)}
              className={`${inputClassName} resize-none`}
              placeholder="ספרו לנו על מספר המשתתפים, מיקום האירוע או כל דבר חשוב נוסף"
            />
          }
        />

        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="neon-glow-green flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--primary)] py-5 text-xl font-black text-[var(--primary-dark)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? "שולחים..." : "שלחו עכשיו"}
          </button>
        </div>

        {status.message ? (
          <div
            className={`md:col-span-2 rounded-lg border px-4 py-3 text-sm leading-6 ${
              status.tone === "success"
                ? "border-[var(--primary)] bg-[rgba(189,245,0,0.1)] text-[var(--foreground)]"
                : "border-[var(--accent)] bg-[rgba(196,28,55,0.12)] text-[var(--foreground)]"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  input,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  input: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label
        htmlFor={id}
        className="mr-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/58"
      >
        {label}
      </label>
      {input}
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
