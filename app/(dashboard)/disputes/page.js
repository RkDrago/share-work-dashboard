import DisputeCard from "@/components/disputes/DisputeCard";
import DisputeStats from "@/components/disputes/DisputeStats";
import AutoReleaseNotice from "@/components/disputes/AutoReleaseNotice";

const disputes = [
  {
    id: "DSP-001",
    priority: "High",
    status: "Open",
    title: "Deliverables not as per agreement",
    project: "PRJ-2004",
    amount: "₹12,000",
    client: "Ananya Singh",
    freelancer: "Vikram Rao",
  },
  {
    id: "DSP-002",
    priority: "Critical",
    status: "Open",
    title: "Missed deadline, no communication",
    project: "PRJ-2010",
    amount: "₹15,000",
    client: "Kabir Khan",
    freelancer: "Rohan Mehta",
  },
  {
    id: "DSP-003",
    priority: "Medium",
    status: "Review",
    title: "Client asking extra work beyond scope",
    project: "PRJ-2007",
    amount: "₹4,200",
    client: "Priya Patel",
    freelancer: "Aarav Sharma",
  },
];

export default function DisputesPage() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">

      {/* Left */}
      <div className="space-y-4">
        {disputes.map((dispute) => (
          <DisputeCard
            key={dispute.id}
            dispute={dispute}
          />
        ))}
      </div>

      {/* Right */}
      <div className="space-y-5">
        <DisputeStats />
        <AutoReleaseNotice />
      </div>

    </div>
  );
}