import { LockKeyhole, ArrowUpRight } from "lucide-react";

const escrowData = [
  {
    title: "Locked in Escrow",
    value: "₹18.4L",
    description: "Across 342 active projects",
  },
  {
    title: "Released Today",
    value: "₹2.8L",
    description: "47 successful releases",
  },
  {
    title: "Pending Release",
    value: "₹4.2L",
    description: "83 projects awaiting approval",
  },
];

export default function EscrowOverview() {
  return (
    <div className="rounded-xl bg-[#0b0b0d] p-5 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <LockKeyhole size={16} strokeWidth={1.7} />

          <h2 className="text-[15px] font-semibold">
            Escrow Overview
          </h2>
        </div>

        <span className="rounded-full border border-[#37373a] bg-[#202023] px-2.5 py-1 text-[9px] tracking-[0.08em] text-[#ddd]">
          LIVE
        </span>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-3 divide-x divide-[#29292d]">
        {escrowData.map((item) => (
          <div
            key={item.title}
            className="px-4 first:pl-0 last:pr-0"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#77777f]">
              {item.title}
            </p>

            <div className="mt-2 flex items-center gap-1.5">
              <h3 className="text-[21px] font-semibold">
                {item.value}
              </h3>

              <ArrowUpRight
                size={14}
                className="text-emerald-400"
              />
            </div>

            <p className="mt-1 text-[10px] text-[#77777f]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between border-t border-[#29292d] pt-4">
        <p className="text-[11px] text-[#77777f]">
          All escrow transactions are monitored in real time.
        </p>

        <button className="text-[11px] font-medium text-white hover:underline">
          View details →
        </button>
      </div>
    </div>
  );
}