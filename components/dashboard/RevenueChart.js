"use client";

import { useState } from "react";

const data = [
  { month: "Jan", value: 42000 },
  { month: "Feb", value: 51000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 62000 },
  { month: "May", value: 58000 },
  { month: "Jun", value: 71000 },
  { month: "Jul", value: 85000 },
  { month: "Aug", value: 79000 },
];

const maxValue = 100000;

export default function RevenueChart() {
  const [active, setActive] = useState("Revenue");

  return (
    <div className="rounded-xl border border-[#e2e2e5] bg-white p-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-[#111113]">
            Revenue Trend
          </h2>

          <p className="mt-1 text-[12px] text-[#77777f]">
            Platform fees (10% + GST) collected
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <button
            onClick={() => setActive("Revenue")}
            className="flex items-center gap-1.5"
          >
            <span
              className={`h-2 w-2 rounded-full ${active === "Revenue" ? "bg-[#17171a]" : "bg-[#aaa]"
                }`}
            />
            Revenue
          </button>

          <button
            onClick={() => setActive("Users")}
            className="flex items-center gap-1.5"
          >
            <span
              className={`h-2 w-2 rounded-full ${active === "Users" ? "bg-[#aaa]" : "bg-[#d5d5d8]"
                }`}
            />
            Users
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative mt-5 h-62">
        {/* Horizontal grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[100000, 75000, 50000, 25000, 0].map((value) => (
            <div
              key={value}
              className="flex items-center gap-2.5"
            >
              <span className="w-9 text-right text-[10px] text-[#667085]">
                {value}
              </span>

              <div className="h-px flex-1 border-t border-dashed border-[#e8e8eb]" />
            </div>
          ))}
        </div>

        {/* SVG graph */}
        <div className="absolute left-12 right-0 top-0 bottom-6">
          <svg
            viewBox="0 0 800 260"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            {/* Area */}
            <path
              d="
            M 0 151
            C 55 132, 85 130, 114 132
            C 160 134, 185 142, 228 138
            C 270 134, 295 93, 342 98
            C 390 102, 420 111, 456 108
            C 500 105, 530 77, 570 67
            C 620 53, 638 29, 686 37
            C 730 41, 760 48, 800 59
            L 800 260
            L 0 260
            Z
          "
              fill="#eeeeef"
            />

            {/* Line */}
            <path
              d="
            M 0 151
            C 55 132, 85 130, 114 132
            C 160 134, 185 142, 228 138
            C 270 134, 295 93, 342 98
            C 390 102, 420 111, 456 108
            C 500 105, 530 77, 570 67
            C 620 53, 638 29, 686 37
            C 730 41, 760 48, 800 59
          "
              fill="none"
              stroke="#1b1b1d"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* X labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between">
            {data.map((item) => (
              <span
                key={item.month}
                className="text-[10px] text-[#667085]"
              >
                {item.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}