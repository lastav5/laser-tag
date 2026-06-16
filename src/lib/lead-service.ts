import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { LeadInput } from "@/lib/lead-schema";

type LeadRecord = {
  id: number;
  created_at: string;
};

type LeadConfig = {
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
};

export class LeadConfigError extends Error {}

export async function createLead(lead: LeadInput) {
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
    })
    .select("id, created_at")
    .single<LeadRecord>();

  if (error || !data) {
    throw new Error(`Supabase insert failed: ${error?.message ?? "Unknown error"}`);
  }

  return data;
}

function getLeadConfig(): LeadConfig {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new LeadConfigError(
      "Missing one or more required environment variables for the lead pipeline.",
    );
  }

  return {
    supabaseUrl,
    supabaseServiceRoleKey,
  };
}
