"use client";

import {
  MoreHorizontal,
  X,
} from "lucide-react";

export default function CategoryList({categories}) {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 "
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}



function CategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div
      className=" flex min-h-20 items-center justify-between rounded-[22px] border border-[#dedee1] bg-white px-6 py-5 transition hover:border-[#cfd0d4] hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] "
    >
      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Icon */}
        <div
          className={` flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] ${category.iconBg} `}
        >
          <Icon
            size={20}
            strokeWidth={1.7}
            className="text-white"
          />
        </div>


        {/* Information */}
        <div className="">

          <h3 className="truncate text-[14px] font-semibold text-[#111318d0]">
            {category.name}
          </h3>

          <p className="mt-0.2 text-[12px] text-[#65748a]">
            {category.projects} projects
            <span className="mx-1.5">•</span>
            Active
          </p>

        </div>
      </div>


      {/* Actions */}
      <div className="ml-4 flex shrink-0 items-center gap-2">

        {/* More */}
        <button
          type="button"
          aria-label={`More options for ${category.name}`}
          className=" flex h-8 w-8 items-center justify-center rounded-[11px] bg-[#f4f4f5] text-[#17181b] transition hover:bg-[#e9e9eb] "
        >
          <MoreHorizontal size={16} />
        </button>


        {/* Delete */}
        <button
          type="button"
          aria-label={`Delete ${category.name}`}
          className=" flex h-8 w-8 items-center justify-center rounded-[11px] bg-[#fff1f2] text-[#ef2d35] transition hover:bg-[#ffe4e6] "
        >
          <X
            size={16}
            strokeWidth={1.8}
          />
        </button>

      </div>
    </div>
  );
}