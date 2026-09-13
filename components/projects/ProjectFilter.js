"use client";

import { Search } from "lucide-react";

export default function ProjectFilter() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#dedee1] bg-white p-3">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={16}
          strokeWidth={1.7}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9da2ad]"
        />

        <input
          type="text"
          placeholder="Search project ID, title..."
          className=" h-9 w-full rounded-lg border border-[#dedee1] bg-[#fafafa] pl-10 pr-3 text-[12px] text-[#111113] outline-none placeholder:text-[#9da2ad] focus:border-[#b9bbc0] "
        />
      </div>

      {/* Status Filter */}
      <button
        type="button"
        className=" h-9 rounded-lg bg-[#18181b] px-4 text-[11px] font-medium text-white transition hover:bg-[#29292d] "
      >
        All Status
      </button>
    </div>
  );
}