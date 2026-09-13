"use client";

import {
  Check,
  X,
  Scale,
} from "lucide-react";

export default function DisputeCard({ dispute }) {
  return (
    <div className="rounded-xl border border-[#dedee1] bg-white p-4">

      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">

          {/* ID */}
          <span className="rounded-lg bg-[#18181b] px-2.5 py-1.5 text-[11px] font-medium text-white">
            {dispute.id}
          </span>

          {/* Priority */}
          <PriorityBadge priority={dispute.priority} />

          {/* Status */}
          <span className="rounded-full bg-[#f4f4f5] px-2.5 py-1 text-[11px] text-[#172033]">
            {dispute.status}
          </span>

        </div>

        <span className="text-[10px] text-[#8190a5]">
          {dispute.id}
        </span>
      </div>


      {/* Title */}
      <h2 className="mt-3 text-[15px] font-semibold text-[#111318]">
        {dispute.title}
      </h2>


      {/* Project information */}
      <p className="mt-1.5 text-[12px] text-[#64748b]">
        {dispute.project}
        <span className="mx-1.5">•</span>
        {dispute.amount}
        <span className="mx-1.5">•</span>
        {dispute.client} vs {dispute.freelancer}
      </p>


      {/* Evidence */}
      <div className="mt-4 rounded-xl border border-[#dedee1] bg-[#fafafa] px-3.5 py-3">

        <p className="mb-2.5 text-[10px] font-medium tracking-[0.13em] text-[#62728a]">
          CHAT EVIDENCE (MASKED)
        </p>

        {/* Client */}
        <div className="flex items-start gap-2.5">
          <span className="mt-1 w-10 shrink-0 text-[11px] text-[#91a0b4]">
            Client:
          </span>

          <div className="rounded-lg border border-[#dedee1] bg-white px-2.5 py-1.5 text-[12px] leading-5 text-[#111827]">
            This is not what we agreed. I need revision as per Figma.
          </div>
        </div>


        {/* Freelancer */}
        <div className="mt-2.5 flex items-start gap-2.5">
          <span className="mt-1 w-15.5 shrink-0 text-[11px] text-[#91a0b4]">
            Freelancer:
          </span>

          <div className="rounded-lg border border-[#dedee1] bg-white px-2.5 py-1.5 text-[12px] leading-5 text-[#111827]">
            I delivered exactly as per scope. Extra screens = extra charge.
          </div>
        </div>

      </div>


      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-2">

        <button
          type="button"
          className=" inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#18181b] px-3.5 text-[11px] font-medium text-white transition hover:bg-black "
        >
          <Check size={14} />
          Release to Freelancer
        </button>


        <button
          type="button"
          className=" inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#dedee1] bg-white px-3.5 text-[11px] font-medium text-[#111318] transition hover:bg-[#f7f7f8] "
        >
          <X size={14} />
          Refund to Client
        </button>


        <button
          type="button"
          className=" inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#f4f4f5] px-3.5 text-[11px] font-medium text-[#111318] transition hover:bg-[#e9e9eb] "
        >
          <Scale size={14} />
          Split Payment
        </button>

      </div>

    </div>
  );
}


function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-[#fff1c2] text-[#b66b00]",
    Critical: "bg-[#ffe0e3] text-[#dc2626]",
    Medium: "bg-[#fff1c2] text-[#c27600]",
  };

  return (
    <span
      className={` rounded-full px-2.5 py-1 text-[11px] ${styles[priority]} `}
    >
      {priority}
    </span>
  );
}