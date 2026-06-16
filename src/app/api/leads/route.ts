import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { LeadConfigError, createLead } from "@/lib/lead-service";

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
    await createLead(parsed.data);

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
          "כרגע אי אפשר לקלוט את הפנייה באתר. בדקו שהחיבור ל-Supabase מוגדר.",
      },
      { status: 500 },
    );
  }
}
