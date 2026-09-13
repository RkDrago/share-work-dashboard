import { ShieldAlert } from "lucide-react";

export default function LeakageBanner() {
  return (
    <div
      className=" flex flex-col gap-4 rounded-xl bg-linear-to-r from-[#17130b] via-[#0d0d0e] to-[#1c0e10] px-4 py-4 text-white md:flex-row md:items-center md:justify-between "
    >
      {/* Left */}
      <div className="flex min-w-0 items-start gap-3">

        {/* Icon */}
        <div
          className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#8a5d00] bg-[#342504] sm:h-10 sm:w-10 sm:rounded-xl "
        >
          <ShieldAlert
            size={17}
            strokeWidth={1.8}
            className="text-[#ffbd00]"
          />
        </div>


        {/* Content */}
        <div className="min-w-0">
          <h2 className="text-[14px] font-semibold sm:text-[15px]">
            Anti-Leakage Monitoring
          </h2>

          <p className="mt-1 max-w-175 text-[10px] leading-4 text-[#a7afbe] sm:text-[11px]">
            System auto-detects phone numbers, emails, UPI IDs, PayPal links
            and external URLs. Blocked messages are masked and logged here.
            Immediate action prevents platform revenue loss.
          </p>
        </div>

      </div>


      {/* Stats */}
      <div className="grid w-full grid-cols-2 gap-2 md:w-auto">

        {/* Blocked */}
        <div
          className=" flex min-w-0 flex-col items-center justify-center rounded-lg border border-[#373537] bg-[#292729] px-3 py-2 md:min-w-26.25 md:rounded-xl md:px-4 md:py-2.5 "
        >
          <span className="text-[17px] font-semibold md:text-[19px]">
            23
          </span>

          <span className="mt-0.5 text-[8px] tracking-[0.12em] text-[#9b9ba3] md:text-[9px]">
            BLOCKED TODAY
          </span>
        </div>


        {/* Critical */}
        <div
          className=" flex min-w-0 flex-col items-center justify-center rounded-lg border border-[#68282d] bg-[#351619] px-3 py-2 md:min-w-20 md:rounded-xl md:px-4 md:py-2.5 "
        >
          <span className="text-[17px] font-semibold text-[#ff666d] md:text-[19px]">
            5
          </span>

          <span className="mt-0.5 text-[8px] tracking-[0.12em] text-[#d47b80] md:text-[9px]">
            CRITICAL
          </span>
        </div>

      </div>

    </div>
  );
}