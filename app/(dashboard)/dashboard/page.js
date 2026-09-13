import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ProjectStatus from "@/components/dashboard/ProjectStatus";
import LeakageBlocks from "@/components/dashboard/LeakageBlocks";
import EscrowOverview from "@/components/dashboard/EscrowOverview";

export default function DashboardPage() {
  return (
    <div className="space-y-7">

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatsCard
          type="users"
          value="12,842"
          label="TOTAL USERS"
          change="+12.4%"
        />

        <StatsCard
          type="projects"
          value="342"
          label="ACTIVE PROJECTS"
          change="+4.2%"
        />

        <StatsCard
          type="escrow"
          value="₹18.4L"
          label="ESCROW LOCKED"
          change="+8.1%"
        />

        <StatsCard
          type="revenue"
          value="₹4.2L"
          label="PLATFORM REVENUE"
          change="+15.3%"
          dark
        />

        <StatsCard
          type="disputes"
          value="8"
          label="OPEN DISPUTES"
          change="-2"
        />

        <StatsCard
          type="leakage"
          value="23"
          label="LEAKAGE ATTEMPTS"
          change="+6 today"
        />
      </section>

      {/* Charts */}
      <section className="grid md:grid-cols-[2fr_1fr] gap-5">
        <RevenueChart />
        <ProjectStatus />
      </section>

      {/* Bottom */}
      <section className="grid md:grid-cols-[1fr_2fr] gap-5">
        <LeakageBlocks />
        <EscrowOverview />
      </section>

    </div>
  );
}