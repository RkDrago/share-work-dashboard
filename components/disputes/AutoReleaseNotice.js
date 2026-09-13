import { TriangleAlert } from "lucide-react";

export default function AutoReleaseNotice() {
  return (
    <div className="rounded-xl border border-[#f4cf62] bg-[#fff9e8] px-4 py-3.5">
      <div className="flex items-start gap-2.5">

        <TriangleAlert
          size={16}
          strokeWidth={1.8}
          className="mt-0.5 shrink-0 text-[#d97706]"
        />

        <div>
          <h3 className="text-[13px] font-medium text-[#a54d00]">
            Auto-release timer: 72h
          </h3>

          <p className="mt-1 text-[11px] leading-4 text-[#b45309]">
            If client doesn't respond within 72h after delivery,
            escrow auto-releases to freelancer.
          </p>
        </div>

      </div>
    </div>
  );
}