
# Hunt & Hook — One ZIP Starter + Dashboard

What you have
- Outdoor theme (no white space), ad bar + side rails
- Search (tabs, location, category, price, dates)
- Subscribe page (Stripe placeholders)
- Dashboard: Guide Resume + Outfitter Trip forms
- API endpoints for saving (Supabase Admin key)
- Legal page placeholders
- Supabase schema included (supabase-schema.sql)

Quick start
1) Unzip, open folder in GitHub and upload as a new repo.
2) Vercel → Add New Project → Import repo → Deploy.
3) Add Env Vars in Vercel (Project → Settings → Environment Variables):
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   - STRIPE_SECRET_KEY
   - STRIPE_WEBHOOK_SECRET
   - SITE_URL (https://www.hunthook.co)
4) Supabase → create project → SQL Editor → paste supabase-schema.sql → Run.
5) Stripe → add webhook to SITE_URL/api/stripe/webhook with subscription events.
6) In your code, paste your legal texts into app/(site)/legal/* pages.

You can deploy first without keys (static pages/UX loads). Add keys later to activate forms.
