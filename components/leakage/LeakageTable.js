"use client";

import { ExternalLink } from "lucide-react";

const leakageData = [
  {
    id: 1,
    name: "Rohan Mehta",
    type: "Phone",
    time: "2m ago",
    initial: "P",
    initialStyle: "bg-blue-100 text-blue-600",
    snippet: "my number is 98*** ***21 call me directly...",
    chat: "CHAT-8821",
    count: "3x",
    risk: "High",
  },
  {
    id: 2,
    name: "Sneha Gupta",
    type: "Email",
    time: "12m ago",
    initial: "E",
    initialStyle: "bg-purple-100 text-purple-600",
    snippet: "contact me at s***@gmail.com for faster...",
    chat: "CHAT-8824",
    count: "1x",
    risk: "Medium",
  },
  {
    id: 3,
    name: "Vikram Rao",
    type: "UPI",
    time: "1h ago",
    initial: "U",
    initialStyle: "bg-emerald-100 text-emerald-600",
    snippet: "pay directly to v***@okaxis to avoid fees...",
    chat: "CHAT-8830",
    count: "2x",
    risk: "High",
  },
  {
    id: 4,
    name: "Kabir Khan",
    type: "PayPal",
    time: "2h ago",
    initial: "P",
    initialStyle: "bg-amber-100 text-amber-600",
    snippet: "paypal.me/ka*** for direct payment...",
    chat: "CHAT-8835",
    count: "1x",
    risk: "High",
  },
  {
    id: 5,
    name: "Priya Patel",
    type: "Phone",
    time: "3h ago",
    initial: "P",
    initialStyle: "bg-blue-100 text-blue-600",
    snippet: "whatsapp me 98*** ***45...",
    chat: "CHAT-8841",
    count: "4x",
    risk: "Critical",
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    type: "Email",
    time: "5h ago",
    initial: "E",
    initialStyle: "bg-purple-100 text-purple-600",
    snippet: "my personal email is an***@outlook...",
    chat: "CHAT-8849",
    count: "1x",
    risk: "Medium",
  },
];

export default function LeakageTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dedee1] bg-white">

      <div className="overflow-x-auto">

        <table className="w-full min-w-237.5 border-collapse">

          {/* Header */}
          <thead>
            <tr className="border-b border-[#dedee1] bg-[#fafafa]">

              <th className="w-[17%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                USER & TYPE
              </th>

              <th className="w-[30%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                MASKED SNIPPET
              </th>

              <th className="w-[13%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                CHAT
              </th>

              <th className="w-[9%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                COUNT
              </th>

              <th className="w-[10%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                RISK
              </th>

              <th className="w-[21%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                ACTION
              </th>

            </tr>
          </thead>


          {/* Body */}
          <tbody>
            {leakageData.map((item) => (
              <LeakageRow
                key={item.id}
                item={item}
              />
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}


/* Leakage Row */

function LeakageRow({ item }) {
  return (
    <tr
      className=" border-b border-[#eeeeef] transition last:border-b-0 hover:bg-[#fafafa] "
    >

      {/* User & Type */}
      <td className="px-4 py-3">

        <div className="flex items-center gap-2.5">

          <div
            className={` flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[12px] font-medium ${item.initialStyle} `}
          >
            {item.initial}
          </div>

          <div>
            <p className="text-[12px] font-medium text-[#111113]">
              {item.name}
            </p>

            <p className="mt-0.5 text-[10px] text-[#66758b]">
              {item.type} • {item.time}
            </p>
          </div>

        </div>

      </td>


      {/* Masked Snippet */}
      <td className="px-4 py-3">

        <div
          className=" max-w-105 overflow-hidden rounded-lg border border-[#dedee1] bg-[#f5f5f6] px-2.5 py-2 "
        >
          <p className="truncate font-mono text-[11px] text-[#111827]">
            {item.snippet}
          </p>
        </div>

      </td>


      {/* Chat */}
      <td className="px-4 py-3">

        <button
          type="button"
          className=" cursor-pointer inline-flex items-center gap-1 text-[11px] text-[#182235] underline decoration-dotted underline-offset-4 transition hover:text-black "
        >
          <ExternalLink
            size={13}
            strokeWidth={1.7}
          />

          {item.chat}
        </button>

      </td>


      {/* Count */}
      <td className="px-4 py-3">

        <span
          className=" inline-flex h-7 min-w-8 items-center justify-center rounded-full bg-[#18181b] px-2 text-[11px] font-medium text-white "
        >
          {item.count}
        </span>

      </td>


      {/* Risk */}
      <td className="px-4 py-3">
        <RiskBadge risk={item.risk} />
      </td>


      {/* Actions */}
      <td className="px-4 py-3">

        <div className="flex items-center gap-1.5">

          <button
            type="button"
            className=" h-8 rounded-lg bg-[#f59e0b] px-3 text-[11px] font-medium text-white transition hover:bg-[#d97706] "
          >
            Warn
          </button>

          <button
            type="button"
            className=" h-8 rounded-lg bg-[#f3f3f5] px-3 text-[11px] font-medium text-[#182235] transition hover:bg-[#e7e7e9] "
          >
            Suspend
          </button>

          <button
            type="button"
            className=" h-8 rounded-lg bg-[#fff1f2] px-3 text-[11px] font-medium text-[#dc2626] transition hover:bg-[#ffe4e6] "
          >
            Ban
          </button>

        </div>

      </td>

    </tr>
  );
}


/* Risk Badge */

function RiskBadge({ risk }) {
  const styles = {
    High: "bg-[#fff4c7] text-[#a56600]",
    Medium: "bg-[#fff6b8] text-[#a56600]",
    Critical: "bg-[#ffe1e3] text-[#dc2626]",
  };

  return (
    <span
      className={` inline-flex rounded-full px-2.5 py-1 text-[10px] ${styles[risk]} `}
    >
      {risk}
    </span>
  );
}