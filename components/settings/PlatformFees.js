"use client";

import { useState } from "react";

const defaultSettings = {
  platformFee: "10",
  gst: "18",
  autoRelease: "72",
  warningText:
    "Sharing contact info (phone, email, UPI, PayPal) outside ShareWork is prohibited. Your account may be suspended for bypassing platform fees.",
};

export default function PlatformFees() {
  const [settings, setSettings] = useState(defaultSettings);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log("Saved settings:", settings);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
  };

  return (
    <section className="rounded-xl border border-[#dedee1] bg-white p-4">

      {/* Heading */}
      <h2 className="text-[15px] font-semibold text-[#111318]">
        Platform Fees
      </h2>

      <form onSubmit={handleSave} className="mt-6">

        {/* Fee settings */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Platform Fee */}
          <SettingInput
            label="PLATFORM FEE %"
            name="platformFee"
            value={settings.platformFee}
            suffix="%"
            onChange={handleChange}
          />

          {/* GST */}
          <SettingInput
            label="GST %"
            name="gst"
            value={settings.gst}
            suffix="%"
            onChange={handleChange}
          />

          {/* Auto Release */}
          <SettingInput
            label="AUTO-RELEASE TIMER"
            name="autoRelease"
            value={settings.autoRelease}
            suffix="hours"
            onChange={handleChange}
          />

        </div>

        {/* Warning text */}
        <div className="mt-6">

          <label className="mb-2 block text-[10px] tracking-[0.13em] text-[#64748b]">
            LEAKAGE WARNING TEXT
          </label>

          <textarea
            name="warningText"
            value={settings.warningText}
            onChange={handleChange}
            rows={3}
            className=" w-full resize-none rounded-lg border border-[#dedee1] bg-[#fafafa] px-3 py-3 text-[12px] leading-5 text-[#111318] outline-none transition focus:border-[#aeb4bd] "
          />

        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-2">

          <button
            type="submit"
            className=" h-9 rounded-lg bg-[#18181b] px-4 text-[11px] font-medium text-white transition hover:bg-black active:scale-[0.98] "
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleReset}
            className=" h-9 rounded-lg bg-[#f3f3f4] px-4 text-[11px] font-medium text-[#17181b] transition hover:bg-[#e9e9eb] active:scale-[0.98] "
          >
            Reset
          </button>

        </div>

      </form>
    </section>
  );
}


/* =========================================================
   SETTING INPUT
========================================================= */

function SettingInput({ label, name, value, suffix, onChange, }) {
  return (
    <div>

      <label className="mb-2 block text-[10px] tracking-[0.13em] text-[#64748b]">
        {label}
      </label>

      <div className="flex h-9 overflow-hidden rounded-lg border border-[#dedee1] bg-[#fafafa]">

        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          className=" min-w-0 flex-1 bg-transparent px-3 text-[12px] text-[#111318] outline-none "
        />

        <div className="flex min-w-10.5 items-center justify-center border-l border-[#dedee1] px-2 text-[11px] text-[#111318]">
          {suffix}
        </div>

      </div>

    </div>
  );
}