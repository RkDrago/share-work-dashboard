"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  ShieldCheck,
  ChevronRight,
  Eye,
  EyeOff,
  ChevronLeft,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    setError("");
    setStep("otp");
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp === "123456") {
      router.push("/dashboard");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleBack = () => {
    setStep("login");
    setOtp("");
    setError("");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#0b0b0d] justify-center text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-30 -top-45 h-125 w-125 rounded-full bg-white/2.5 blur-[100px]" />

        <div className="absolute -bottom-50 -left-37 h-125 w-125 rounded-full bg-white/1.5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-105 flex-col items-center py-3">

        {/* Domain badge */}
        <div className="mb-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#27272a] bg-[#151517] px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[10px] tracking-[0.12em] text-[#9a9a9f]">
              ADMIN.SHAREWORK.COM
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-[32px] font-semibold leading-none tracking-[0.1px]">
            ShareWork
          </h1>

          <p className="mt-3 text-[13px] tracking-[0.02em] text-[#77777f]">
            ADMIN CONSOLE
          </p>
        </div>

        {/* Card */}
        {step === "login" ? (
          <LoginForm
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleContinue={handleContinue}
          />
        ) : (
          <OtpForm
            otp={otp}
            setOtp={setOtp}
            error={error}
            handleVerify={handleVerify}
            handleBack={handleBack}
          />
        )}

        {/* Footer */}
        <p className="mt-6 text-[11px] text-[#5d5d65]">
          © 2025 ShareWork Inc • Admin v2.4.2
        </p>
      </div>
    </main>
  );
}

function LoginForm({ showPassword, setShowPassword, handleContinue, }) {
  return (
    <div className="w-full rounded-3xl border border-[#29292d] bg-[#151517] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-[-0.5px]">
          Welcome back
        </h2>

        <p className="mt-1 text-[13px] text-[#77777f]">
          Enter your credentials to access the panel.
        </p>
      </div>

      <form onSubmit={handleContinue} className="space-y-5">

        {/* Email */}
        <div>
          <label className="mb-2 block text-[11px] tracking-[0.13em] text-[#888890d1]">
            EMAIL
          </label>

          <div className="relative">
            <Mail
              size={16}
              strokeWidth={1.6}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5f6068]"
            />

            <input
              type="email"
              defaultValue="admin@sharework.com"
              className="h-11 w-full rounded-xl border border-[#2d2d31] bg-[#09090b] pl-12 pr-4 text-sm font-medium text-white outline-none transition focus:border-[#55555c]"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-[11px] tracking-[0.13em] text-[#888890ce]">
            PASSWORD
          </label>

          <div className="relative">
            <Lock
              size={16}
              strokeWidth={1.6}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5f6068]"
            />

            <input
              type={showPassword ? "text" : "password"}
              defaultValue="password"
              className="h-11 w-full rounded-xl border border-[#2d2d31] bg-[#09090b] pl-12 pr-12 text-sm font-medium tracking-wider text-white outline-none transition focus:border-[#55555c]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5f6068] transition hover:text-white"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* Forgot password */}
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="text-xs text-[#9a9aa3] transition hover:text-white"
            >
              Forgot password?
            </button>
          </div>
        </div>

        {/* Continue */}
        <button
          type="submit"
          className="group mt-1 h-11 w-full rounded-xl bg-white text-sm font-medium text-black transition hover:bg-[#e8e8e8] active:scale-[0.99]"
        >
          <span className="flex items-center justify-center gap-2">
            Continue

            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </button>
      </form>

      {/* Security */}
      <div className="mt-5 border-t border-[#29292d] pt-4">
        <div className="flex items-center gap-2 text-[10px] text-[#6e6e77]">
          <ShieldCheck size={16} strokeWidth={1.5} />

          <span>
            Secured with 2FA • Session encrypted
          </span>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   OTP FORM
========================================================= */

function OtpForm({ otp, setOtp, error, handleVerify, handleBack, }) {
  return (
    <div className="w-full rounded-3xl border border-[#29292d] bg-[#151517] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">

      <button
        type="button"
        onClick={handleBack}
        className="mb-4 flex items-center gap-1 text-[11px] text-[#77777f] transition hover:text-white"
      >
        <ChevronLeft size={13} />

        Back
      </button>


      <div className="mb-5">
        <h2 className="text-lg font-semibold tracking-[-0.5px]">
          Enter OTP
        </h2>

        <p className="mt-1 text-[13px] text-[#77777f]">
          Code sent to admin@sharework.com. Use{" "}
          <span className="font-semibold text-white">
            123456
          </span>
        </p>
      </div>

      <form onSubmit={handleVerify}>


        <div>
          <label className="mb-1.5 block text-[11px] tracking-[0.13em] text-[#888890]">
            ONE-TIME CODE
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="••••••"
            maxLength={6}
            value={otp}
            onChange={(e) => {
              const value = e.target.value
                .replace(/\D/g, "")
                .slice(0, 6);

              setOtp(value);
            }}
            autoFocus
            className="h-14 w-full rounded-xl border border-[#2d2d31] bg-[#09090b] text-center text-[25px] font-medium tracking-[0.5em] text-white outline-none transition focus:border-[#55555c]"
          />

          {/* Error */}
          {error && (
            <p className="mt-3 text-center text-[13px] text-red-400">
              {error}
            </p>
          )}
        </div>

        {/* Verify */}
        <button
          type="submit"
          disabled={otp.length !== 6}
          className="cursor-pointer mt-5 h-12 w-full rounded-[15px] bg-white text-sm font-medium text-black transition hover:bg-[#e8e8e8] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Verify & Login
        </button>
      </form>

      {/* Resend */}
      <div className="mt-4 text-center">
        <button
          type="button"
          className="text-xs cursor-pointer text-[#77777f] transition hover:text-white"
        >
          Resend code
        </button>
      </div>
    </div>
  );
}