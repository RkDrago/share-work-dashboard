"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function UserFilter() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#dedee1] bg-white p-3 md:h-15 md:flex-row md:items-center md:justify-between md:gap-2">

      {/* Role Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto">

        <button
          type="button"
          className=" shrink-0 rounded-lg bg-[#18181b] px-4 py-2 text-[11px] font-medium text-white "
        >
          All
        </button>

        <button
          type="button"
          className=" shrink-0 rounded-lg bg-[#f4f4f5] px-4 py-2 text-[11px] text-[#40516a] transition hover:bg-[#ededee] "
        >
          Clients
        </button>

        <button
          type="button"
          className=" shrink-0 rounded-lg bg-[#f4f4f5] px-4 py-2 text-[11px] text-[#40516a] transition hover:bg-[#ededee] "
        >
          Freelancers
        </button>

      </div>


      {/* Search + Filter */}
      <div className="flex w-full items-center gap-1.5 md:w-auto">

        {/* Search */}
        <div className="relative min-w-0 flex-1 md:w-75 md:flex-none">

          <Search
            size={16}
            strokeWidth={1.7}
            className=" absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9da2ad] "
          />

          <input
            type="text"
            placeholder="Search users, email..."
            className=" h-9 w-full rounded-lg border border-[#dedee1] bg-[#fafafa] pl-10 pr-3 text-[12px] text-[#111113] outline-none placeholder:text-[#9da2ad] focus:border-[#b9bbc0] "
          />

        </div>


        {/* Filter Button */}
        <button
          type="button"
          className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#dedee1] bg-[#fafafa] text-[#666b75] transition hover:bg-[#f1f1f2] "
        >
          <SlidersHorizontal
            size={15}
            strokeWidth={1.7}
          />
        </button>

      </div>

    </div>
  );
}