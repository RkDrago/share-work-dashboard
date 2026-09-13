export default function ProjectStatus() {
  const statuses = [
    {
      name: "Completed",
      percentage: 68,
    },
    {
      name: "In Progress",
      percentage: 22,
    },
    {
      name: "Disputed",
      percentage: 6,
    },
    {
      name: "Cancelled",
      percentage: 4,
    },
  ];

  return (
    <div className="rounded-xl border border-[#e2e2e5] bg-white p-4">
      {/* Header */}
      <div>
        <h2 className="text-[15px] font-semibold text-[#111113]">
          Project Status
        </h2>

        <p className="mt-1 text-[12px] text-[#77777f]">
          Completion breakdown
        </p>
      </div>

      {/* Statuses */}
      <div className="mt-5 space-y-4">
        {statuses.map((status) => (
          <div key={status.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[12px] text-[#4f5663]">
                {status.name}
              </span>

              <span className="text-[12px] font-medium text-[#111113]">
                {status.percentage}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#f0f0f2]">
              <div
                className="h-full rounded-full bg-[#1a1a1d]"
                style={{
                  width: `${status.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom card */}
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#e5e5e7] p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
          <span className="text-[17px]">↗</span>
        </div>

        <div>
          <p className="text-[12px] font-medium text-[#111113]">
            92% on-time delivery
          </p>

          <p className="mt-0.5 text-[11px] text-[#77777f]">
            +4% vs last month
          </p>
        </div>
      </div>
    </div>
  );
}