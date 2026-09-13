import PlatformFees from "@/components/settings/PlatformFees";
import SecuritySettings from "@/components/settings/SecuritySettings";

export default function SettingsPage() {
  return (
    <div className="max-w-250 space-y-5">
      <PlatformFees />
      <SecuritySettings />
    </div>
  );
}