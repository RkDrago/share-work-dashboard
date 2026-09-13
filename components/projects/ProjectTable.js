import {
  MessageSquare,
  Eye,
} from "lucide-react";

const projects = [
  {
    id: "PRJ-2000",
    title: "E-commerce Redesign",
    client: "Aarav Sharma",
    freelancer: "Kavya Reddy",
    price: "₹2,500",
    fee: "₹250",
    status: "Funded",
    date: "2024-11-10",
  },
  {
    id: "PRJ-2001",
    title: "Mobile App UI",
    client: "Priya Patel",
    freelancer: "Ishaan Joshi",
    price: "₹4,800",
    fee: "₹480",
    status: "In Progress",
    date: "2024-11-11",
  },
  {
    id: "PRJ-2002",
    title: "SaaS Dashboard",
    client: "Rohan Mehta",
    freelancer: "Meera Nair",
    price: "₹12,000",
    fee: "₹1200",
    status: "Delivered",
    date: "2024-11-12",
  },
  {
    id: "PRJ-2003",
    title: "Figma to React",
    client: "Ananya Singh",
    freelancer: "Dev Malhotra",
    price: "₹3,500",
    fee: "₹350",
    status: "Paid",
    date: "2024-11-13",
  },
  {
    id: "PRJ-2004",
    title: "Brand Identity",
    client: "Vikram Rao",
    freelancer: "Sara Ali",
    price: "₹1,800",
    fee: "₹180",
    status: "Disputed",
    date: "2024-11-14",
  },
  {
    id: "PRJ-2005",
    title: "Landing Page",
    client: "Sneha Gupta",
    freelancer: "Kabir Khan",
    price: "₹2,200",
    fee: "₹220",
    status: "Funded",
    date: "2024-11-15",
  },
  {
    id: "PRJ-2006",
    title: "Admin Panel UX",
    client: "Arjun Kapoor",
    freelancer: "Riya Das",
    price: "₹6,500",
    fee: "₹650",
    status: "In Progress",
    date: "2024-11-16",
  },
];

export default function ProjectTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dedee1] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-237.5 border-collapse">

          {/* Header */}
          <thead>
            <tr className="border-b border-[#dedee1] bg-[#fafafa]">

              <th className="w-[22%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                PROJECT
              </th>

              <th className="w-[22%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                CLIENT → FREELANCER
              </th>

              <th className="w-[11%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                PRICE
              </th>

              <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                ESCROW
              </th>

              <th className="w-[13%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                DATE
              </th>

              <th className="w-[17%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                ACTION
              </th>

            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {projects.map((project) => (
              <ProjectRow
                key={project.id}
                project={project}
              />
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}


/* =========================================================
   PROJECT ROW
========================================================= */

function ProjectRow({ project }) {
  return (
    <tr
      className=" border-b border-[#eeeeef] transition last:border-b-0 hover:bg-[#fafafa] "
    >

      {/* Project */}
      <td className="px-4 py-3">
        <div>
          <p className="text-[12px] font-medium text-[#111113]">
            {project.title}
          </p>

          <p className="mt-0.5 text-[10px] text-[#66758b]">
            {project.id}
          </p>
        </div>
      </td>


      {/* Client → Freelancer */}
      <td className="px-4 py-3">
        <div>
          <p className="text-[11px] text-[#111113]">
            {project.client}
          </p>

          <p className="mt-0.5 text-[11px] text-[#66758b]">
            → {project.freelancer}
          </p>
        </div>
      </td>


      {/* Price */}
      <td className="px-4 py-3">
        <div>
          <p className="text-[12px] font-medium text-[#111113]">
            {project.price}
          </p>

          <p className="mt-0.5 text-[10px] text-[#66758b]">
            Fee {project.fee}
          </p>
        </div>
      </td>


      {/* Escrow */}
      <td className="px-4 py-3">
        <StatusBadge status={project.status} />
      </td>


      {/* Date */}
      <td className="px-4 py-3">
        <span className="text-[11px] text-[#35445a]">
          {project.date}
        </span>
      </td>


      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-1.5">

          {/* Chat */}
          <button
            type="button"
            className=" flex h-8 items-center gap-1.5 rounded-lg bg-[#18181b] px-3 text-[11px] font-medium text-white transition hover:bg-[#29292d] "
          >
            <MessageSquare
              size={14}
              strokeWidth={1.8}
            />

            Chat
          </button>


          {/* View */}
          <button
            type="button"
            className=" flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3f3f5] text-[#59616e] transition hover:bg-[#e8e8ea] "
          >
            <Eye
              size={15}
              strokeWidth={1.8}
            />
          </button>

        </div>
      </td>

    </tr>
  );
}


/* =========================================================
   ESCROW STATUS
========================================================= */

function StatusBadge({ status }) {
  const styles = {
    Funded: {
      wrapper: "border-[#f6d36b] bg-[#fffaf0] text-[#a56600]",
    },

    "In Progress": {
      wrapper: "border-[#f6d36b] bg-[#fffaf0] text-[#a56600]",
    },

    Delivered: {
      wrapper: "border-blue-200 bg-blue-50 text-blue-600",
    },

    Paid: {
      wrapper: "border-emerald-200 bg-emerald-50 text-emerald-600",
    },

    Disputed: {
      wrapper: "border-red-200 bg-red-50 text-red-600",
    },
  };

  const style = styles[status];

  return (
    <span
      className={` inline-flex rounded-full border px-2.5 py-1 text-[10px] ${style.wrapper} `}
    >
      {status}
    </span>
  );
}