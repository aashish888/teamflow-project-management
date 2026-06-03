"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { TeamMember } from "@/types";

type TeamMemberListProps = {
  members: TeamMember[];
};

export function TeamMemberList({ members }: TeamMemberListProps) {
  const [teamMembers, setTeamMembers] = useState(members);
    const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");


    useEffect(() => {
    async function loadMembers() {
      try {
        const data = await api.getTeamMembers();
        setTeamMembers(data);
      } catch {
        setError("Unable to load team members from backend.");
      } finally {
        setIsLoading(false);
      }
    }

    loadMembers();
  }, []);

   async function handleAddMember(formData: FormData) {
    const newMember = await api.createTeamMember({
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      role: String(formData.get("role")),
      department: String(formData.get("department")),
    });

    setTeamMembers((currentMembers) => [newMember, ...currentMembers]);
  }

  return (
    <div className="space-y-6">
      <form
        action={handleAddMember}
        className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900 md:grid-cols-2"
      >
        <input
          name="name"
          required
          placeholder="Member name"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        <input
          name="role"
          required
          placeholder="Role"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        <input
          name="department"
          required
          placeholder="Department"
          className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />

        <button
          type="submit"
          className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500 md:col-span-2"
        >
          Add Member
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-base font-bold text-cyan-800">
              {member.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>

            <h2 className="mt-4 text-lg font-bold">{member.name}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{member.email}</p>

            <div className="mt-4 grid gap-2 text-sm">
              <div className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-950">
                <span className="font-semibold">Role:</span> {member.role}
              </div>
              <div className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-950">
                <span className="font-semibold">Department:</span>{" "}
                {member.department}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
