import {
  Users,
  BriefcaseBusiness,
  LockKeyhole,
  DollarSign,
  Flag,
  ShieldAlert,
} from "lucide-react";

const iconMap = {
  users: Users,
  projects: BriefcaseBusiness,
  escrow: LockKeyhole,
  revenue: DollarSign,
  disputes: Flag,
  leakage: ShieldAlert,
};

export default function StatsCard({ type, value, label, change, dark = false, }) {
  const Icon = iconMap[type];

  const negative = change?.startsWith("-");

  return (
    <div
      className={`rounded-xl border p-4 ${dark
          ? "border-[#29292d] bg-[#19191c] text-white"
          : "border-[#e2e2e5] bg-white text-[#111113]"
        }`}
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${dark ? "bg-[#303034]" : "bg-[#f3f3f4]"
            }`}
        >
          <Icon
            size={16}
            strokeWidth={1.7}
            className={dark ? "text-white" : "text-[#29292d]"}
          />
        </div>

        <span
          className={`rounded-[7px] px-2 py-0.5 text-[11px] font-medium ${negative
              ? "bg-red-50 text-red-500"
              : "bg-emerald-50 text-emerald-600"
            }`}
        >
          {change}
        </span>
      </div>

      {/* Value */}
      <div className="mt-4">
        <h2 className="text-[22px] font-semibold tracking-[-0.4px]">
          {value}
        </h2>

        <p
          className={`mt-1.5 text-[10px] tracking-[0.13em] ${dark ? "text-[#898990]" : "text-[#77777f]"
            }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}