"use client";
import React, { useState } from "react";

const CATEGORIES: Record<string, string[]> = {
  Hunting: ["Elk", "Whitetail", "Moose", "Bear", "Waterfowl", "Upland"],
  Fishing: ["Walleye", "Pike", "Trout", "Salmon", "Bass", "Ice Fishing"],
};

const LOCATIONS = [
  "Manitoba, CA", "Saskatchewan, CA", "Alberta, CA", "Ontario, CA", "British Columbia, CA",
  "Montana, US", "Idaho, US", "Alaska, US"
];

export default function SearchBar() {
  const [tab, setTab] = useState<"Hunting" | "Fishing">("Hunting");
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      type: tab,
      q,
      loc: location,
      cat: category,
      min: minPrice,
      max: maxPrice,
      from: dateFrom,
      to: dateTo,
    });
    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="inline-flex rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur">
        {(["Hunting","Fishing"] as const).map(t => (
          <button
            key={t}
            onClick={() => { setTab(t); setCategory(""); }}
            className={`px-4 py-2 text-sm font-semibold transition ${
              tab === t ? "bg-white text-slate-900" : "text-white hover:bg-white/10"
            }`}
            aria-pressed={tab === t}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Fields */}
      <form onSubmit={onSearch} className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-3 bg-white/95 rounded-2xl p-4 shadow-lg">
        <div className="md:col-span-3">
          <label>Search</label>
          <input placeholder="e.g., Elk, Walleye, Family trip" value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label>Location</label>
          <select value={location} onChange={e=>setLocation(e.target.value)}>
            <option value="">Any</option>
            {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label>Category</label>
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="">Any</option>
            {CATEGORIES[tab].map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label>Price (Min)</label>
          <input type="number" min="0" placeholder="0" value={minPrice} onChange={e=>setMinPrice(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label>Price (Max)</label>
          <input type="number" min="0" placeholder="5000" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label>From</label>
          <input type="date" value={dateFrom} onChange={e=>setDateFrom(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label>To</label>
          <input type="date" value={dateTo} onChange={e=>setDateTo(e.target.value)} />
        </div>
        <div className="md:col-span-12 flex justify-end pt-1">
          <button className="primary">Search Trips</button>
        </div>
      </form>
    </div>
  );
}
