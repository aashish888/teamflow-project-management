"use client";

import { useEffect, useMemo, useState } from "react";
import { AppNav } from "@/components/AppNav";
import { api } from "@/lib/api";
import type { Task, TeamMember } from "@/types";

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [taskData, memberData] = await Promise.all([
          api.getTasks(),
          api.getTeamMembers(),
        ]);

        setTasks(taskData);
        setTeamMembers(memberData);
      } catch {
        setError("Unable to load dashboard data.");
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const stats = useMemo(() => {
    const completedTasks = tasks.filter((task) => task.status === "COMPLETED").length;
    const pendingTasks = tasks.length - completedTasks;

    return [
      {
        label: "Total Tasks",
        value: tasks.length,
        helper: "All assigned work",
      },
      {
        label: "Completed Tasks",
        value: completedTasks,
        helper: "Finished tasks",
      },
      {
        label: "Pending Tasks",
        value: pendingTasks,
        helper: "Remaining work",
      },
      {
        label: "Total Team Members",
        value: teamMembers.length,
        helper: "Active members",
      },
    ];
  }, [tasks, teamMembers]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-white">
      <AppNav />
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-900 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              TeamFlow
            </p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Track project progress, tasks, and team activity.
            </p>
          </div>

          <div className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-semibold text-white dark:bg-cyan-600">
            Project Workspace
          </div>
        </div>

        {isLoading && (
          <div className="rounded-2xl bg-white p-6 text-center text-sm text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300">
            Loading dashboard data...
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
            {error}
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.helper}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
