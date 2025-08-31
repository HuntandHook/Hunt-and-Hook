
import { NextResponse } from "next/server";
export async function POST() {
  // TODO: Create Stripe Checkout session with your Price IDs
  return NextResponse.json({ ok: true, note: "Checkout placeholder" });
}
