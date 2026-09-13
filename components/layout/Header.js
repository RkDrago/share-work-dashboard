"use client";

import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";

const pageInfo = {
  "/dashboard": {
    title: "Dashboard",
    description: "Manage and monitor ShareWork operations",
  },

  "/users": {
    title: "User Management",
    description: "Manage and monitor ShareWork users",
  },

  "/projects": {
    title: "Projects",
    description: "Manage and monitor ShareWork projects",
  },

  "/escrow": {
    title: "Escrow & Payments",
    description: "Manage and monitor escrow transactions",
  },

  "/leakage": {
    title: "Leakage Monitor",
    description: "Monitor and manage platform leakage attempts",
  },

  "/disputes": {
    title: "Dispute Center",
    description: "Manage and resolve user disputes",
  },

  "/categories": {
    title: "Categories",
    description: "Manage ShareWork project categories",
  },

  "/settings": {
    title: "Settings",
    description: "Manage your admin console settings",
  },
};

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();

  const currentPage = pageInfo[pathname] || {
    title: "ShareWork",
    description: "Admin Console",
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-[#dedee1] bg-white px-3 sm:px-4 lg:px-8">

      {/* Page Information */}
      <div className="flex min-w-0 items-center gap-2.5">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f3f3f5] text-[#59616e] transition hover:bg-[#e8e8ea] lg:hidden "
        >
          <Menu size={18} strokeWidth={1.8} />
        </button>

        {/* Title */}
        <div className="min-w-0">
          <h1 className="truncate text-[14px] font-semibold leading-none text-[#111113] sm:text-[15px]">
            {currentPage.title}
          </h1>

          <p className="mt-1 hidden truncate text-[11px] text-[#77777f] sm:block">
            {currentPage.description}
          </p>
        </div>

      </div>


      {/* Right Actions */}
      <div className="ml-3 flex shrink-0 items-center gap-1.5 sm:gap-2">

        {/* Live Monitoring */}
        <div className="flex h-8 items-center gap-1.5 rounded-full border border-[#e1e1e4] bg-[#f7f7f8] px-2.5 sm:h-9 sm:gap-2 sm:px-3.5">

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 sm:h-2 sm:w-2" />

          <span className="hidden text-[11px] text-[#55555d] sm:block">
            Live monitoring
          </span>

          {/* Mobile */}
          <span className="text-[10px] text-[#55555d] sm:hidden">
            Live
          </span>

        </div>


        {/* Export */}
        <button
          type="button"
          className=" flex h-8 items-center justify-center gap-1.5 rounded-lg bg-[#17171a] px-2.5 text-[10px] font-medium text-white transition hover:bg-[#29292d] sm:h-9 sm:gap-2 sm:px-3.5 sm:text-[11px] "
        >
          <Download
            size={14}
            strokeWidth={1.8}
          />

          <span>Export</span>
        </button>

      </div>

    </header>
  );
}