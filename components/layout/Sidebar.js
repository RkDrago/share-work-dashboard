"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  WalletCards,
  ShieldAlert,
  Scale,
  Grid2X2,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const menuSections = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        name: "User Management",
        href: "/users",
        icon: Users,
        badge: "20",
      },
      {
        name: "Projects",
        href: "/projects",
        icon: FolderKanban,
        badge: "15",
      },
      {
        name: "Escrow & Payments",
        href: "/escrow",
        icon: WalletCards,
      },
    ],
  },
  {
    title: "RISK & OPS",
    items: [
      {
        name: "Leakage Monitor",
        href: "/leakage",
        icon: ShieldAlert,
        alert: true,
      },
      {
        name: "Dispute Center",
        href: "/disputes",
        icon: Scale,
        alert: true,
      },
      {
        name: "Categories",
        href: "/categories",
        icon: Grid2X2,
      },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      {
        name: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar({sidebarOpen, setSidebarOpen}) {
  const pathname = usePathname();
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <aside className={`transition fixed left-0 top-0 z-50 -translate-x-full lg:translate-x-0 flex h-screen w-67 flex-col border-r border-[#202023] bg-[#0b0b0d] text-white ${sidebarOpen ? "translate-x-0": "-translate-x-full"}`}>

      {/* Logo */}
      <div className="flex justify-between items-center px-6 border-b border-[#202023]">

        <div className="flex h-16 items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-white text-[13px] font-semibold text-black">
            S
          </div>

          <div className="leading-none">
            <h1 className="text-[14px] font-semibold">
              ShareWork
            </h1>

            <p className="mt-1.5 text-[9.5px] tracking-[0.12em] text-[#77777f]">
              ADMIN
            </p>
          </div>
        </div>
        <div onClick={()=>setSidebarOpen(false)} className="block lg:hidden opacity-70">
          <X size={20}/>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-auto">
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">

            <p className="mb-3 px-3 text-[9.5px] font-medium tracking-[0.13em] text-[#51525a]">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex h-9 items-center rounded-xl px-3 transition ${isActive
                      ? "bg-[#1b1b1f] text-white"
                      : "text-[#77777f] hover:bg-[#151518] hover:text-[#acacb3]"
                      }`}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="mr-3 shrink-0"
                    />

                    <span className="text-[13px]">
                      {item.name}
                    </span>

                    {item.badge && (
                      <span className="ml-auto rounded-[7px] bg-[#29292d] px-1.5 py-0.5 text-[12px] text-[#aaaab1]">
                        {item.badge}
                      </span>
                    )}

                    {item.alert && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

      </nav>
      <div className="border-t border-[#202023]" />
      <div className="flex m-3 items-center justify-between rounded-xl bg-[#151517] px-3 py-2.5">
        {/* Profile */}
        <div className="flex min-w-0 items-center gap-3.5">
          {/* Avatar */}
          <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-[#27272a]">
            <img
              src="https://img.magnific.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419548.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Admin User"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-white">
              Admin User
            </p>

            <p className="truncate tracking-wide text-[11px] text-[#77777f]">
              admin@sharework.com
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          aria-label="Logout"
          className=" flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#27272a] text-[#a1a1aa] transition hover:bg-[#303034] hover:text-white "
        >
          <LogOut size={15} strokeWidth={1.8} />
        </button>
      </div>
    </aside>
  );
}