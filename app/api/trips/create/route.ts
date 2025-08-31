import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const payload = {
      title: String(form.get("title") || ""),
      type: String(form.get("type") || "Hunting"),
      category: String(form.get("category") || ""),
      location: String(form.get("location") || ""),
      price_min: Number(form.get("price_min") || 0),
      price_max: Number(form.get("price_max") || 0),
      start_date: String(form.get("start_date") || ""),
      end_date: String(form.get("end_date") || ""),
      description: String(form.get("description") || ""),
      is_published: true,
    };
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("trips").insert(payload);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
