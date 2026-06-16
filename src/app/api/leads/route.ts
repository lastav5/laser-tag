import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import {
  LeadConfigError,
  createLeadWithNotification,
} from "@/lib/lead-service";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "לא הצלחנו לקרוא את הטופס. נסו לשלוח שוב." },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "יש כמה שדות שצריך להשלים או לתקן לפני השליחה.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const result = await createLeadWithNotification(parsed.data);

    if (result.notificationFailed) {
      return NextResponse.json(
        {
          message:
            "הפרטים נקלטו בהצלחה. נחזור אליכם בהקדם, גם אם ההתראה הפנימית התעכבה.",
        },
        { status: 201 },
      );
    }

    return NextResponse.json(
      {
        message: "מעולה. קיבלנו את הפרטים ונחזור אליכם בהקדם.",
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof LeadConfigError) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    return NextResponse.json(
      {
        message:
          "כרגע אי אפשר לקלוט את הפנייה באתר. בדקו שהחיבור ל-Supabase ול-Resend מוגדרים.",
      },
      { status: 500 },
    );
  }
}
