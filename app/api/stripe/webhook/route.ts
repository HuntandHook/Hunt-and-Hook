
import { NextResponse } from "next/server";
export async function POST() {
  // TODO: Verify Stripe signature and update subscription status
  return NextResponse.json({ received: true });
}
