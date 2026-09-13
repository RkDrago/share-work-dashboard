"use client";

import { useEffect, useRef } from "react";

export default function DisputeStats() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();

    ctx.moveTo(5, 85);
    ctx.bezierCurveTo(50, 60, 75, 45, 105, 60);
    ctx.bezierCurveTo(130, 75, 145, 115, 170, 115);
    ctx.bezierCurveTo(195, 115, 205, 35, 235, 20);
    ctx.bezierCurveTo(265, 5, 285, 60, 315, 80);
    ctx.bezierCurveTo(340, 95, 365, 105, 395, 115);

    ctx.strokeStyle = "#18181b";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.stroke();
  }, []);

  return (
    <div className="rounded-xl border border-[#dedee1] bg-white p-4 pb-6">

      <h2 className="text-[15px] font-semibold text-[#111318]">
        Dispute Stats
      </h2>

      {/* Stats */}
      <div className="mt-4 space-y-3.5">

        <StatRow
          label="Open"
          value="5"
        />

        <StatRow
          label="Resolved (7d)"
          value="12"
        />

        <StatRow
          label="Avg resolution"
          value="18h"
        />

      </div>

      {/* Chart */}
      <div className="mt-4 h-30 w-full">
        <canvas
          ref={canvasRef}
          width={400}
          height={120}
          className="h-full w-full"
        />
      </div>

    </div>
  );
}


function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-[#64748b]">
        {label}
      </span>

      <span className="text-[11px] font-medium text-[#111318]">
        {value}
      </span>
    </div>
  );
}