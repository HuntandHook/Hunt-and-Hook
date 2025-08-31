
export function AdRail({ position }: { position: "left" | "right" }) {
  return (
    <aside aria-label={`${position} advertisement`} className="hidden lg:block w-52 shrink-0">
      <div className="card h-[78vh] sticky top-20 flex items-center justify-center text-sm text-slate-600 border border-slate-200">
        Your Ad Here
      </div>
    </aside>
  );
}
export function TopAdBar() {
  return (
    <div className="w-full bg-black/30 backdrop-blur border-b border-white/10">
      <div className="container py-2">
        <div className="card px-4 py-2 text-center text-slate-700">
          Sponsored placement — Your brand featured here
        </div>
      </div>
    </div>
  );
}
