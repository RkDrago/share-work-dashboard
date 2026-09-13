const stats = [
  {
    label: "LOCKED AMOUNT",
    value: "₹18,42,000",
  },
  {
    label: "RELEASED (MTD)",
    value: "₹12,40,000",
  },
  {
    label: "REFUNDED",
    value: "₹1,12,000",
  },
  {
    label: "PLATFORM FEES",
    value: "₹4,84,210",
    subtitle: "10% + 18% GST",
    dark: true,
  },
];

export default function EscrowStats() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`min-h-26 rounded-xl border px-4 py-4 ${stat.dark
              ? "border-[#18181b] bg-[#18181b] text-white"
              : "border-[#dedee1] bg-white text-[#111113]"
            }`}
        >
          <p
            className={`text-[10px] font-medium tracking-[0.13em] ${stat.dark
                ? "text-[#9a9aa3]"
                : "text-[#52627a]"
              }`}
          >
            {stat.label}
          </p>

          <p className="mt-2.5 text-[21px] font-semibold tracking-[-0.4px]">
            {stat.value}
          </p>

          {stat.subtitle && (
            <p className="mt-1 text-[10px] text-[#9a9aa3]">
              {stat.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}