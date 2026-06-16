import { z } from "zod";

export const eventTypes = [
  "יום הולדת",
  "קבוצת חברים",
  "בית ספר / תנועת נוער",
  "אירוע חברה",
  "אירוע פרטי אחר",
] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "נא להזין שם מלא.")
    .max(80, "שם מלא ארוך מדי."),
  phone: z
    .string()
    .trim()
    .min(9, "נא להזין מספר טלפון תקין.")
    .max(20, "מספר הטלפון ארוך מדי.")
    .regex(/^[0-9+\-()\s]+$/, "נא להזין מספר טלפון תקין."),
  email: z
    .string()
    .trim()
    .email("נא להזין כתובת אימייל תקינה.")
    .max(120, "כתובת האימייל ארוכה מדי."),
  eventType: z.enum(eventTypes, {
    error: "נא לבחור סוג אירוע.",
  }),
  message: z
    .string()
    .trim()
    .max(1200, "ההודעה ארוכה מדי."),
});

export type LeadInput = z.infer<typeof leadSchema>;
