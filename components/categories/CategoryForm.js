"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export default function CategoryForm({setCategories, categories}) {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category.trim()) return;

    console.log("New category:", category);

    setCategories([...categories, {
    id: categories.length + 1,
    name: category,
    projects: 1,
    icon: Star,
    iconBg: "bg-[#777781]",
  },]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center gap-2.5 rounded-[20px] border border-[#dedee1] bg-white p-4 "
    >
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="New category name..."
        className=" h-10 min-w-0 flex-1 rounded-[13px] border border-[#dedee1] bg-[#fafafa] px-4 text-[13px] text-[#111318] outline-none transition placeholder:text-[#9aa6b8] focus:border-[#aeb4bd] "
      />

      <button
        type="submit"
        className=" h-10 shrink-0 rounded-[13px] bg-[#18181b] px-5 text-[13px] font-medium text-white transition hover:bg-black active:scale-[0.98] "
      >
        Add Category
      </button>
    </form>
  );
}