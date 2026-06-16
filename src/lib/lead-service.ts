import "server-only";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import type { LeadInput } from "@/lib/lead-schema";

type LeadRecord = {
  id: number;
  created_at: string;
};

type LeadConfig = {
  siteUrl: string;
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
  resendApiKey: string;
  resendFromEmail: string;
  leadNotificationEmail: string;
};

export class LeadConfigError extends Error {}

export async function createLeadWithNotification(lead: LeadInput) {
  const config = getLeadConfig();
  const supabase = createClient(config.supabaseUrl, config.supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabase
    .from("leads")
    .insert({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      event_type: lead.eventType,
      message: lead.message,
      notification_status: "pending",
    })
    .select("id, created_at")
    .single<LeadRecord>();

  if (error || !data) {
    throw new Error(`Supabase insert failed: ${error?.message ?? "Unknown error"}`);
  }

  const resend = new Resend(config.resendApiKey);
  const emailResult = await resend.emails.send({
    from: config.resendFromEmail,
    to: config.leadNotificationEmail,
    subject: `ליד חדש מהאתר | ${lead.eventType} | ${lead.name}`,
    replyTo: lead.email,
    text: createLeadEmailText(data, lead, config.siteUrl),
    html: createLeadEmailHtml(data, lead, config.siteUrl),
  });

  if (emailResult.error) {
    await supabase
      .from("leads")
      .update({
        notification_status: "failed",
        notification_error: emailResult.error.message,
      })
      .eq("id", data.id);

    return {
      leadId: data.id,
      notificationFailed: true,
    };
  }

  await supabase
    .from("leads")
    .update({
      notification_status: "sent",
      notification_error: null,
    })
    .eq("id", data.id);

  return {
    leadId: data.id,
    notificationFailed: false,
  };
}

function getLeadConfig(): LeadConfig {
  const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    supabaseUrl: process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail:
      process.env.RESEND_FROM_EMAIL ?? "Pulse Arena <onboarding@resend.dev>",
    leadNotificationEmail: process.env.LEAD_NOTIFICATION_EMAIL,
  };

  if (
    !config.supabaseUrl ||
    !config.supabaseServiceRoleKey ||
    !config.resendApiKey ||
    !config.leadNotificationEmail
  ) {
    throw new LeadConfigError(
      "Missing one or more required environment variables for the lead pipeline.",
    );
  }

  return config as LeadConfig;
}

function createLeadEmailText(record: LeadRecord, lead: LeadInput, siteUrl: string) {
  return [
    "ליד חדש התקבל מהאתר",
    "",
    `מספר ליד: ${record.id}`,
    `תאריך: ${formatLeadTimestamp(record.created_at)}`,
    `סוג אירוע: ${lead.eventType}`,
    `שם: ${lead.name}`,
    `טלפון: ${lead.phone}`,
    `אימייל: ${lead.email}`,
    "",
    "פירוט:",
    lead.message,
    "",
    `האתר: ${siteUrl}`,
  ].join("\n");
}

function createLeadEmailHtml(record: LeadRecord, lead: LeadInput, siteUrl: string) {
  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; background:#08101d; color:#e8eefc; padding:24px;">
      <div style="max-width:640px; margin:0 auto; background:#101828; border:1px solid rgba(140,182,255,0.22); border-radius:16px; padding:24px;">
        <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.2em; color:#8bd8ff; text-transform:uppercase;">Pulse Arena</p>
        <h1 style="margin:0 0 20px; font-size:28px; line-height:1.2;">ליד חדש מהאתר</h1>
        <table style="width:100%; border-collapse:collapse; font-size:15px; line-height:1.8;">
          <tr><td style="padding:8px 0; color:#8aa3c4;">מספר ליד</td><td style="padding:8px 0; font-weight:700;">${record.id}</td></tr>
          <tr><td style="padding:8px 0; color:#8aa3c4;">התקבל ב</td><td style="padding:8px 0; font-weight:700;">${escapeHtml(formatLeadTimestamp(record.created_at))}</td></tr>
          <tr><td style="padding:8px 0; color:#8aa3c4;">סוג אירוע</td><td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.eventType)}</td></tr>
          <tr><td style="padding:8px 0; color:#8aa3c4;">שם</td><td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.name)}</td></tr>
          <tr><td style="padding:8px 0; color:#8aa3c4;">טלפון</td><td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.phone)}</td></tr>
          <tr><td style="padding:8px 0; color:#8aa3c4;">אימייל</td><td style="padding:8px 0; font-weight:700;">${escapeHtml(lead.email)}</td></tr>
        </table>
        <div style="margin-top:24px; padding:18px; border-radius:12px; background:#0a1325; border:1px solid rgba(140,182,255,0.16);">
          <p style="margin:0 0 8px; font-size:12px; letter-spacing:0.12em; color:#6ef7e6; text-transform:uppercase;">הודעת הלקוח</p>
          <p style="margin:0; white-space:pre-wrap;">${escapeHtml(lead.message)}</p>
        </div>
        <p style="margin:24px 0 0; font-size:13px; color:#7f95b7;">נשלח דרך ${escapeHtml(siteUrl)}</p>
      </div>
    </div>
  `;
}

function formatLeadTimestamp(value: string) {
  return new Intl.DateTimeFormat("he-IL", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Jerusalem",
  }).format(new Date(value));
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
