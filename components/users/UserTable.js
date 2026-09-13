"use client";

import { useState } from "react";
import { Eye, Pause, Ban } from "lucide-react";
import UserDetailsModal from "./UserDetailsModal";

const users = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "user1@example.com",
        role: "Client",
        joined: "2024-05-04",
        projects: 10,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=47",
    },
    {
        id: 2,
        name: "Priya Patel",
        email: "user2@example.com",
        role: "Freelancer",
        joined: "2024-12-04",
        projects: 3,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=32",
    },
    {
        id: 3,
        name: "Rohan Mehta",
        email: "user3@example.com",
        role: "Both",
        joined: "2024-12-12",
        projects: 12,
        status: "Suspended",
        image: "https://i.pravatar.cc/100?img=11",
    },
    {
        id: 4,
        name: "Ananya Singh",
        email: "user4@example.com",
        role: "Client",
        joined: "2024-10-25",
        projects: 6,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=44",
    },
    {
        id: 5,
        name: "Vikram Rao",
        email: "user5@example.com",
        role: "Freelancer",
        joined: "2024-01-25",
        projects: 12,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=12",
    },
    {
        id: 6,
        name: "Sneha Gupta",
        email: "user6@example.com",
        role: "Both",
        joined: "2024-05-10",
        projects: 10,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=49",
    },
    {
        id: 7,
        name: "Arjun Kapoor",
        email: "user7@example.com",
        role: "Client",
        joined: "2024-02-19",
        projects: 7,
        status: "Active",
        image: "https://i.pravatar.cc/100?img=13",
    },
];

export default function UserTable() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <>
            <div className="overflow-hidden rounded-xl border border-[#dedee1] bg-white">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-237.5 border-collapse">

                        {/* Table Header */}
                        <thead>
                            <tr className="border-b border-[#dedee1] bg-[#fafafa]">

                                <th className="w-[29%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    USER
                                </th>

                                <th className="w-[14%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    ROLE
                                </th>

                                <th className="w-[14%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    JOINED
                                </th>

                                <th className="w-[13%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    PROJECTS
                                </th>

                                <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    STATUS
                                </th>

                                <th className="w-[15%] px-4 py-3 text-left text-[10px] font-medium tracking-[0.12em] text-[#52627a]">
                                    ACTIONS
                                </th>

                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {users.map((user) => (
                                <UserRow
                                    key={user.id}
                                    user={user}
                                    onView={() => setSelectedUser(user)}
                                />
                            ))}
                        </tbody>

                    </table>

                </div>
            </div>

            {/* User Detail Modal */}
            <UserDetailsModal
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
            />
        </>
    );
}


function UserRow({ user, onView }) {
    return (
        <tr className="border-b border-[#eeeeef] transition last:border-b-0 hover:bg-[#fafafa]">

            {/* User */}
            <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">

                    <img
                        src={user.image}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-[12px] font-medium text-[#111113]">
                            {user.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-[#59677c]">
                            {user.email}
                        </p>
                    </div>

                </div>
            </td>

            {/* Role */}
            <td className="px-4 py-3">
                <RoleBadge role={user.role} />
            </td>

            {/* Joined */}
            <td className="px-4 py-3">
                <span className="text-[11px] text-[#35445a]">
                    {user.joined}
                </span>
            </td>

            {/* Projects */}
            <td className="px-4 py-3">
                <span className="text-[11px] text-[#111113]">
                    {user.projects}
                </span>
            </td>

            {/* Status */}
            <td className="px-4 py-3">
                <StatusBadge status={user.status} />
            </td>

            {/* Actions */}
            <td className="px-4 py-3">

                <div className="flex items-center gap-1.5">

                    {/* VIEW */}
                    <ActionButton dark onClick={onView}>
                        <Eye size={15} strokeWidth={1.8} />
                    </ActionButton>

                    {/* SUSPEND */}
                    <ActionButton>
                        <Pause size={14} strokeWidth={1.8} />
                    </ActionButton>

                    {/* BLOCK */}
                    <ActionButton>
                        <Ban size={15} strokeWidth={1.8} />
                    </ActionButton>

                </div>

            </td>

        </tr>
    );
}


/* =========================================================
   ROLE BADGE
========================================================= */

function RoleBadge({ role }) {
    const styles = {
        Client: "border-blue-200 bg-blue-50 text-blue-600",
        Freelancer: "border-purple-200 bg-purple-50 text-purple-600",
        Both: "border-[#dedee1] bg-[#f7f7f8] text-[#4b5563]",
    };

    return (
        <span
            className={` inline-flex rounded-full border px-2.5 py-1 text-[10px] ${styles[role]} `}
        >
            {role}
        </span>
    );
}


/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
    const styles = {
        Active: {
            wrapper: "bg-emerald-50 text-emerald-600",
            dot: "bg-emerald-500",
        },

        Suspended: {
            wrapper: "bg-amber-50 text-amber-700",
            dot: "bg-amber-500",
        },
    };

    const style = styles[status];

    return (
        <span
            className={` inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] ${style.wrapper} `}
        >
            <span
                className={` h-1.5 w-1.5 rounded-full ${style.dot} `}
            />

            {status}
        </span>
    );
}


/* =========================================================
   ACTION BUTTON
========================================================= */

function ActionButton({ children, dark = false, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${dark
                    ? "bg-[#18181b] text-white hover:bg-[#2a2a2d]"
                    : "bg-[#f3f3f5] text-[#59616e] hover:bg-[#e8e8ea]"
                }`}
        >
            {children}
        </button>
    );
}