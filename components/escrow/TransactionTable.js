"use client";

import { Download } from "lucide-react";

const transactions = [
  {
    id: "TXN-PRJ-2000",
    from: "Aarav Sharma",
    to: "Kavya Reddy",
    amount: "₹2,500",
    fee: "₹250 + GST",
    status: "Funded",
    date: "2024-11-10",
  },
  {
    id: "TXN-PRJ-2001",
    from: "Priya Patel",
    to: "Ishaan Joshi",
    amount: "₹4,800",
    fee: "₹480 + GST",
    status: "In Progress",
    date: "2024-11-11",
  },
  {
    id: "TXN-PRJ-2002",
    from: "Rohan Mehta",
    to: "Meera Nair",
    amount: "₹12,000",
    fee: "₹1200 + GST",
    status: "Delivered",
    date: "2024-11-12",
  },
  {
    id: "TXN-PRJ-2003",
    from: "Ananya Singh",
    to: "Dev Malhotra",
    amount: "₹3,500",
    fee: "₹350 + GST",
    status: "Paid",
    date: "2024-11-13",
  },
  {
    id: "TXN-PRJ-2004",
    from: "Vikram Rao",
    to: "Sara Ali",
    amount: "₹1,800",
    fee: "₹180 + GST",
    status: "Disputed",
    date: "2024-11-14",
  },
  {
    id: "TXN-PRJ-2005",
    from: "Sneha Gupta",
    to: "Kabir Khan",
    amount: "₹2,200",
    fee: "₹220 + GST",
    status: "Funded",
    date: "2024-11-15",
  },
  {
    id: "TXN-PRJ-2006",
    from: "Arjun Kapoor",
    to: "Riya Das",
    amount: "₹6,500",
    fee: "₹650 + GST",
    status: "In Progress",
    date: "2024-11-16",
  },
];

export default function TransactionTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dedee1] bg-white">

      {/* Table Header */}
      <div className="flex items-center justify-between border-b border-[#dedee1] px-4 py-4">

        <h2 className="text-[15px] font-semibold text-[#111113]">
          Transactions
        </h2>

        <button
          type="button"
          className="
            flex
            h-9
            items-center
            gap-1.5
            rounded-lg
            bg-[#18181b]
            px-3.5
            text-[11px]
            font-medium
            text-white
            transition
            hover:bg-[#29292d]
          "
        >
          <Download
            size={14}
            strokeWidth={1.8}
          />

          Export CSV
        </button>

      </div>


      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-225 border-collapse">

          <thead>
            <tr className="border-b border-[#dedee1] bg-[#fafafa]">

              <th className="w-[16%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                TXN ID
              </th>

              <th className="w-[27%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                FROM → TO
              </th>

              <th className="w-[12%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                AMOUNT
              </th>

              <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                FEE
              </th>

              <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                STATUS
              </th>

              <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                DATE
              </th>

            </tr>
          </thead>


          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}


/* Transaction Row */

function TransactionRow({ transaction }) {
  return (
    <tr
      className=" border-b border-[#eeeeef] transition last:border-b-0 hover:bg-[#fafafa] "
    >

      {/* Transaction ID */}
      <td className="px-4 py-3">
        <span className="font-mono text-[11px] text-[#172033]">
          {transaction.id}
        </span>
      </td>


      {/* From → To */}
      <td className="px-4 py-3">
        <span className="text-[12px] text-[#111113]">
          {transaction.from}
        </span>

        <span className="mx-1.5 text-[#66758b]">
          →
        </span>

        <span className="text-[12px] text-[#111113]">
          {transaction.to}
        </span>
      </td>


      {/* Amount */}
      <td className="px-4 py-3">
        <span className="text-[12px] font-medium text-[#111113]">
          {transaction.amount}
        </span>
      </td>


      {/* Fee */}
      <td className="px-4 py-3">
        <span className="text-[12px] text-[#111113]">
          {transaction.fee}
        </span>
      </td>


      {/* Status */}
      <td className="px-4 py-3">
        <StatusBadge status={transaction.status} />
      </td>


      {/* Date */}
      <td className="px-4 py-3">
        <span className="text-[11px] text-[#35445a]">
          {transaction.date}
        </span>
      </td>

    </tr>
  );
}


/* Status Badge */

function StatusBadge({ status }) {
  const styles = {
    Funded: "bg-[#f4f4f5] text-[#182235]",
    "In Progress": "bg-[#f4f4f5] text-[#182235]",
    Delivered: "bg-[#f4f4f5] text-[#182235]",
    Paid: "bg-[#f4f4f5] text-[#182235]",
    Disputed: "bg-[#f4f4f5] text-[#182235]",
  };

  return (
    <span
      className={` inline-flex rounded-full px-2.5 py-1 text-[10px] ${styles[status]} `}
    >
      {status}
    </span>
  );
}