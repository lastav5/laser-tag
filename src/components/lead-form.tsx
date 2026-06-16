"use client";

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
    "w-full rounded-lg border border-white/10 bg-[#0b1120]/90 px-4 py-3 text-base text-white outline-none placeholder:text-white/28 focus:border-[var(--line-strong)] focus:bg-[#101728]";

  return (
    <div className="glass-panel rounded-lg p-7 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
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
                placeholder="איך קוראים לכם?"
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
                placeholder="050-0000000"
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
                placeholder="name@example.com"
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
                  <option key={option} value={option} className="bg-[#0b1120]">
                    {option}
                  </option>
                ))}
              </select>
            }
          />
        </div>

        <Field
          id="message"
          label="ספרו לנו בקצרה על האירוע"
          error={fieldErrors.message}
          input={
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(event) => setField("message", event.target.value)}
              className={`${inputClassName} resize-none`}
              placeholder="תאריך מבוקש, גילאים, כמות ילדים, אם חשוב לכם חדר פרטי או חבילת יום הולדת מלאה..."
            />
          }
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-white/52">
            בלחיצה על שליחה אתם מאשרים לנו לחזור אליכם בקשר לבקשה.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-[var(--neon-blue)] px-6 py-3 text-base font-medium text-[#04111f] shadow-[0_14px_36px_rgba(84,187,255,0.22)] disabled:cursor-not-allowed disabled:opacity-55 hover:translate-y-[-1px] hover:bg-[#7fd1ff]"
          >
            {isSubmitting ? "שולחים..." : "שליחת ליד"}
          </button>
        </div>

        {status.message ? (
          <div
            className={`rounded-lg border px-4 py-3 text-sm leading-6 ${
              status.tone === "success"
                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                : "border-rose-400/30 bg-rose-500/10 text-rose-100"
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
}: {
  id: string;
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-white/86">
        {label}
      </label>
      {input}
      {error ? <p className="text-sm text-rose-200">{error}</p> : null}
    </div>
  );
}
