
import AvailableTutor from "@/components/AvailableTutor";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Hero />
        <AvailableTutor />
      </main>
    </div>
  );
}
