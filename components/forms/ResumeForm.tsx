
"use client";
import { useState } from "react";

export default function ResumeForm() {
  const [form, setForm] = useState({
    full_name: "", bio: "", regions: "", species: "", certifications: "",
    day_rate: "", contact_email: "", file: null as File|null
  });

  const handleFile = (e: any) => setForm({ ...form, file: e.target.files?.[0] || null });

  const submit = async (e:any) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k,v]) => {
      if (k === "file" && v) fd.append("file", v as Blob);
      else if (k !== "file") fd.append(k, String(v||""));
    });
    const res = await fetch("/api/resume/upsert", { method:"POST", body: fd });
    const json = await res.json();
    alert(json.ok ? "Resume saved" : ("Error: " + json.error));
  };

  return (
    <form onSubmit={submit} className="card p-6 space-y-3">
      <h3 className="text-xl font-bold">Guide Resume</h3>
      <div><label>Full Name</label><input value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} /></div>
      <div><label>Contact Email</label><input type="email" value={form.contact_email} onChange={e=>setForm({...form, contact_email:e.target.value})} /></div>
      <div><label>Short Bio</label><textarea rows={4} value={form.bio} onChange={e=>setForm({...form, bio:e.target.value})} /></div>
      <div className="grid md:grid-cols-3 gap-3">
        <div><label>Regions</label><input placeholder="e.g., Manitoba, Alberta" value={form.regions} onChange={e=>setForm({...form, regions:e.target.value})} /></div>
        <div><label>Species / Target</label><input placeholder="e.g., Elk, Walleye" value={form.species} onChange={e=>setForm({...form, species:e.target.value})} /></div>
        <div><label>Certifications</label><input placeholder="e.g., First Aid, Captains License" value={form.certifications} onChange={e=>setForm({...form, certifications:e.target.value})} /></div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div><label>Day Rate (optional)</label><input type="number" min="0" value={form.day_rate} onChange={e=>setForm({...form, day_rate:e.target.value})} /></div>
        <div><label>Attach Resume (PDF)</label><input type="file" accept="application/pdf" onChange={handleFile} /></div>
      </div>
      <button className="primary">Save Resume</button>
    </form>
  );
}
