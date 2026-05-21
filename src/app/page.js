
import { Suspense } from "react";
import AvailableTutor from "@/components/AvailableTutor";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AvailableTutorLoader from "@/components/AvailableTutorLoader";
import Review from "@/components/Review";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Hero />
        <Suspense fallback={<AvailableTutorLoader />}>
          <AvailableTutor />
        </Suspense>
        <HowItWorks />
        <Review />
      </main>
    </div>
  );
}
