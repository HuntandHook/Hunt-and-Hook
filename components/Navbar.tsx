
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full border-b border-white/15 bg-black/30 backdrop-blur sticky top-0 z-40">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-white font-bold text-xl tracking-wide">Hunt & Hook</Link>
        <nav className="flex items-center gap-4">
          <Link href="/subscribe" className="text-white/90 hover:text-white">Subscribe</Link>
          <Link href="/(dashboard)/dashboard" className="text-white/90 hover:text-white">Dashboard</Link>
          <Link href="/(auth)/login" className="text-white/90 hover:text-white">Log in</Link>
        </nav>
      </div>
    </header>
  );
}
