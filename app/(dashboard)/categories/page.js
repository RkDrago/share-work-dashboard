"use client"
import CategoryForm from "@/components/categories/CategoryForm";
import CategoryList from "@/components/categories/CategoryList";
import { useState } from "react";
import {
  Palette,
  Laptop,
  Smartphone,
  Layers,
  Settings,
} from "lucide-react";

const categoryArray = [
  {
    id: 1,
    name: "UI/UX Design",
    projects: 142,
    icon: Palette,
    iconBg: "bg-[#8557ed]",
  },
  {
    id: 2,
    name: "Web Development",
    projects: 210,
    icon: Laptop,
    iconBg: "bg-[#377ff0]",
  },
  {
    id: 3,
    name: "App Development",
    projects: 98,
    icon: Smartphone,
    iconBg: "bg-[#08b887]",
  },
  {
    id: 4,
    name: "Figma Services",
    projects: 76,
    icon: Layers,
    iconBg: "bg-[#ff7117]",
  },
  {
    id: 5,
    name: "IT Services",
    projects: 124,
    icon: Settings,
    iconBg: "bg-[#777781]",
  },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState(categoryArray)
  return (
    <div className="space-y-5">
      <CategoryForm setCategories={setCategories} categories={categories} />
      <CategoryList categories={categories} />
    </div>
  );
}