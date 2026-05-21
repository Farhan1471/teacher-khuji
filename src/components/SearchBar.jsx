"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const term = search.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("searchTerm", term);
    } else {
      params.delete("searchTerm");
    }

    const query = params.toString();
    router.push(query ? `/tutors?${query}` : "/tutors");
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tutors..."
        className="w-full flex-1 rounded-lg border border-gray-300 px-4 py-2 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="min-w-28 rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700 active:scale-95 sm:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;