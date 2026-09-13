"use client";

import { ShieldAlert } from "lucide-react";

const leakageBlocks = [
  {
    name: "Rohan Mehta",
    type: "Phone",
    message: "my number is 98*** ***21 call me directly...",
    time: "2m ago",
    critical: true,
  },
  {
    name: "Sneha Gupta",
    type: "Email",
    message: "contact me at s***@gmail.com for faster...",
    time: "12m ago",
    critical: false,
  },
  {
    name: "Vikram Rao",
    type: "UPI",
    message: "pay directly to v***@okaxis to avoid fees...",
    time: "1h ago",
    critical: true,
  },
  {
    name: "Kabir Khan",
    type: "PayPal",
    message: "paypal.me/ka*** for direct payment...",
    time: "2h ago",
    critical: true,
  },
];

export default function LeakageBlocks() {
  return (
    <div className="rounded-xl border border-[#e2e2e5] bg-white p-4">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <ShieldAlert
          size={16}
          strokeWidth={1.7}
          className="text-amber-500"
        />

        <h2 className="text-[15px] font-semibold text-[#111113]">
          Recent Leakage Blocks
        </h2>
      </div>

      {/* Leakage List */}
      <div className="mt-5 space-y-3.5">
        {leakageBlocks.map((item) => (
          <div
            key={`${item.name}-${item.type}`}
            className="flex items-stretch gap-3"
          >
            {/* Status Indicator */}
            <div
              className={`w-2 shrink-0 rounded-full ${
                item.critical
                  ? "bg-[#f59e0b]"
                  : "bg-[#d4d4d8]"
              }`}
            />

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-[12px] font-medium text-[#111113]">
                  {item.name} • {item.type}
                </p>

                <span className="shrink-0 text-[10px] text-[#92929a]">
                  {item.time}
                </span>
              </div>

              <p className="mt-1 truncate text-[11px] text-[#667085]">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}