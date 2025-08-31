
import { AdRail, TopAdBar } from "@/components/Ads";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main>
      <TopAdBar />
      <section className="container py-8 md:py-10">
        <div className="flex gap-6">
          <AdRail position="left" />
          <div className="flex-1">
            <div className="text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-sm">Find Your Next Hunt or Fishing Adventure</h1>
              <p className="mt-2 md:mt-3 text-white/90 max-w-2xl">Trusted outfitters & guides. Transparent listings. Easy booking.</p>
            </div>
            <div className="mt-6"><SearchBar /></div>
          </div>
          <AdRail position="right" />
        </div>
      </section>
    </main>
  );
}
