"use client";

import { useState } from "react";

export default function SecuritySettings() {
  const [otpEnabled, setOtpEnabled] = useState(true);
  const [leakageEnabled, setLeakageEnabled] = useState(true);

  return (
    <section className="rounded-xl border border-[#dedee1] bg-white p-4">

      {/* Heading */}
      <h2 className="text-[15px] font-semibold text-[#111318]">
        Security
      </h2>

      <div className="mt-5 space-y-3">

        {/* OTP */}
        <SecurityToggle
          title="OTP Enforcement"
          description="Require OTP on every admin login"
          enabled={otpEnabled}
          onChange={() => setOtpEnabled((prev) => !prev)}
        />

        {/* Leakage */}
        <SecurityToggle
          title="Leakage Auto-block"
          description="Auto-mask and block bypass attempts"
          enabled={leakageEnabled}
          onChange={() => setLeakageEnabled((prev) => !prev)}
        />

      </div>
    </section>
  );
}


/* =========================================================
   SECURITY TOGGLE
========================================================= */

function SecurityToggle({
  title,
  description,
  enabled,
  onChange,
}) {
  return (
    <div className="flex min-h-15 items-center justify-between rounded-lg border border-[#dedee1] bg-[#fafafa] px-3">

      {/* Text */}
      <div>
        <h3 className="text-[12px] font-medium text-[#111318]">
          {title}
        </h3>

        <p className="mt-0.5 text-[11px] text-[#65748a]">
          {description}
        </p>
      </div>


      {/* Toggle */}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onChange}
        className={`
          relative
          h-7
          w-11
          shrink-0
          rounded-full
          transition-colors
          ${enabled ? "bg-[#18181b]" : "bg-[#d4d4d8]"}
        `}
      >
        <span
          className={`
            absolute
            left-0
            top-0.75
            h-5.5
            w-5.5
            rounded-full
            bg-white
            shadow-sm
            transition-transform
            ${enabled ? "translate-x-5" : "translate-x-0.75"}
          `}
        />
      </button>

    </div>
  );
}