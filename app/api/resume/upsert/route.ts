
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const payload = {
      full_name: String(form.get("full_name")||""),
      contact_email: String(form.get("contact_email")||""),
      bio: String(form.get("bio")||""),
      regions: String(form.get("regions")||""),
      species: String(form.get("species")||""),
      certifications: String(form.get("certifications")||""),
      day_rate: Number(form.get("day_rate")||0)
    };
    const { error } = await supabaseAdmin.from("resumes").upsert(payload);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
