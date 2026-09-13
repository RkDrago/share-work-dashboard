import LeakageBanner from "@/components/leakage/LeakageBanner";
import LeakageTable from "@/components/leakage/LeakageTable";

export default function LeakagePage() {
  return (
    <div className="space-y-5">
      <LeakageBanner />
      <LeakageTable />
    </div>
  );
}