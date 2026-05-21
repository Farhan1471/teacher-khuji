"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function FilterTutors() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [startDate, setStartDate] = useState(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState(searchParams.get("endDate") || "");

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (startDate) {
      params.set("startDate", startDate);
    } else {
      params.delete("startDate");
    }

    if (endDate) {
      params.set("endDate", endDate);
    } else {
      params.delete("endDate");
    }

    const query = params.toString();
    router.push(query ? `/tutors?${query}` : "/tutors");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto] lg:items-end">
        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Start date
          </span>
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </label>

        <label className="block text-left">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            End date
          </span>
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </label>

        <button
          type="submit"
          className="min-w-28 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Apply
        </button>

      </div>
    </form>
  );
}