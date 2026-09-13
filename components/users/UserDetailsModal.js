"use client";

import {
  X,
  Mail,
  CalendarDays,
  Briefcase,
  CircleDollarSign,
  ShieldCheck,
  UserRound,
  Ban,
  Pause,
} from "lucide-react";

export default function UserDetailModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 px-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-125 overflow-hidden rounded-2xl border border-[#dedee1] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#eeeeef] px-5 py-4">
          <div>
            <h2 className="text-[15px] font-semibold text-[#111318]">
              User Details
            </h2>
            <p className="mt-0.5 text-[10px] text-[#7b8493]">
              View account information and activity
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3f3f5] text-[#656b76] transition hover:bg-[#e8e8ea] hover:text-[#111318]"
          >
            <X size={16} strokeWidth={1.8} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3.5 px-5 py-5">
          <img
            src={user.image}
            alt={user.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div className="min-w-0">
            <h3 className="truncate text-[14px] font-semibold text-[#111318]">
              {user.name}
            </h3>

            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-[#697386]">
              <Mail size={12} strokeWidth={1.7} />
              <span className="truncate">{user.email}</span>
            </div>
          </div>

          <StatusBadge status={user.status} />
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-2.5 px-5">
          <InfoCard
            icon={<UserRound size={14} strokeWidth={1.7} />}
            label="ROLE"
            value={user.role}
          />

          <InfoCard
            icon={<CalendarDays size={14} strokeWidth={1.7} />}
            label="JOINED"
            value={user.joined}
          />

          <InfoCard
            icon={<Briefcase size={14} strokeWidth={1.7} />}
            label="PROJECTS"
            value={user.projects}
          />

          <InfoCard
            icon={<CircleDollarSign size={14} strokeWidth={1.7} />}
            label="TOTAL EARNINGS"
            value={user.earnings || "₹0"}
          />
        </div>

        {/* Account status */}
        <div className="mx-5 mt-4 rounded-xl border border-[#dedee1] bg-[#fafafa] p-3.5">
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={15}
              strokeWidth={1.7}
              className="text-emerald-600"
            />

            <span className="text-[11px] font-medium text-[#111318]">
              Account Status
            </span>
          </div>

          <p className="mt-1.5 pl-5.75 text-[10px] leading-4 text-[#737d8d]">
            This account is currently {user.status?.toLowerCase()} and can
            access the platform according to its assigned role.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-[#eeeeef] px-5 py-4">
          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-lg bg-[#f3f3f5] px-3 text-[10px] font-medium text-[#59616e] transition hover:bg-[#e8e8ea]"
          >
            <Pause size={13} strokeWidth={1.8} />
            Suspend
          </button>

          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-lg bg-red-50 px-3 text-[10px] font-medium text-red-600 transition hover:bg-red-100"
          >
            <Ban size={13} strokeWidth={1.8} />
            Block User
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-lg border border-[#dedee1] bg-[#fafafa] p-3">
      <div className="flex items-center gap-1.5 text-[#7b8493]">
        {icon}
        <span className="text-[9px] tracking-[0.12em]">{label}</span>
      </div>

      <p className="mt-2 text-[12px] font-medium text-[#111318]">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-50 text-emerald-600",
    Suspended: "bg-amber-50 text-amber-700",
    Blocked: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`ml-auto shrink-0 rounded-full px-2.5 py-1 text-[9px] font-medium ${
        styles[status] || "bg-[#f3f3f5] text-[#59616e]"
      }`}
    >
      {status}
    </span>
  );
}