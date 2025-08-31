
export default function SubscribePage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold text-white drop-shadow">Subscribe</h1>
      <p className="mt-2 card p-4">Choose a plan to unlock your dashboard. (Stripe wiring to be added with your Price IDs.)</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="card p-6">
          <h2 className="text-xl font-bold">Guide Plan — Monthly</h2>
          <p className="text-slate-600 mt-1">Resume profile, availability, direct leads.</p>
          <form action="/api/stripe/checkout" method="POST" className="mt-4">
            <input type="hidden" name="plan" value="guide" />
            <button className="primary">Subscribe</button>
          </form>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold">Outfitter Plan — Annual</h2>
          <p className="text-slate-600 mt-1">Unlimited listings, priority placement, direct messaging.</p>
          <form action="/api/stripe/checkout" method="POST" className="mt-4">
            <input type="hidden" name="plan" value="outfitter" />
            <button className="primary">Subscribe</button>
          </form>
        </div>
      </div>
    </main>
  );
}
