
import ResumeForm from "@/components/forms/ResumeForm";
import TripForm from "@/components/forms/TripForm";

export default function DashboardPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold text-white drop-shadow">Your Dashboard</h1>
      <p className="text-white/80 mt-1">Create trips (Outfitters) or build your resume (Guides). Ad slots coming here too.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <ResumeForm />
        <TripForm />
      </div>
    </main>
  );
}
