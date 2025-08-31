
"use client";
import { useState } from "react";

export default function TripForm() {
  const [form, setForm] = useState({
    title: "", type: "Hunting", category: "", location: "", price_min: "", price_max: "",
    start_date: "", end_date: "", description: "", image: null as File|null
  });

  const submit = async (e:any) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k,v]) => {
      if (k === "image" && v) fd.append("image", v as Blob);
      else if (k !== "image") fd.append(k, String(v||""));
    });
    const res = await fetch("/api/trips/create", { method:"POST", body: fd });
    const json = await res.json();
    alert(json.ok ? "Trip saved" : ("Error: " + json.error));
  };

  return (
    <form onSubmit={submit} className="card p-6 space-y-3">
      <h3 className="text-xl font-bold">Create Trip</h3>
      <div className="grid md:grid-cols-2 gap-3">
        <div><label>Title</label><input value={form.title} onChange={e=>setForm({...form, title:e.target.value})} /></div>
        <div>
          <label>Type</label>
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
            <option>Hunting</option><option>Fishing</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <div><label>Category</label><input placeholder="e.g., Elk, Walleye" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} /></div>
        <div><label>Location</label><input placeholder="e.g., Manitoba, CA" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} /></div>
        <div className="grid grid-cols-2 gap-3">
          <div><label>Price Min</label><input type="number" min="0" value={form.price_min} onChange={e=>setForm({...form, price_min:e.target.value})} /></div>
          <div><label>Price Max</label><input type="number" min="0" value={form.price_max} onChange={e=>setForm({...form, price_max:e.target.value})} /></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div><label>Start Date</label><input type="date" value={form.start_date} onChange={e=>setForm({...form, start_date:e.target.value})} /></div>
        <div><label>End Date</label><input type="date" value={form.end_date} onChange={e=>setForm({...form, end_date:e.target.value})} /></div>
      </div>
      <div><label>Description</label><textarea rows={4} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} /></div>
      <div><label>Cover Image</label><input type="file" accept="image/*" onChange={e=>setForm({...form, image:e.target.files?.[0] || null})} /></div>
      <button className="primary">Save Trip</button>
    </form>
  );
}
