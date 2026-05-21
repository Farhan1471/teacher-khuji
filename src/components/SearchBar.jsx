"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const term = search.trim();
    router.push(term ? `/tutors?searchTerm=${encodeURIComponent(term)}` : "/tutors");
  };

  return (
    <div className="flex items-center justify-center mx-auto gap-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tutors..."
        className="w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <button
        onClick={handleSearch}
        className="px-6 py-2 min-w-28 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;