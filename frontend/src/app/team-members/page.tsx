import { TeamMemberList } from "@/components/TeamMemberList";
import { teamMembers } from "@/data/mock-data";
import { AppNav } from "@/components/AppNav";

export default function TeamMembersPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
        <AppNav />
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Team Members
          </p>
          <h1 className="mt-2 text-3xl font-bold">Team</h1>
          <p className="mt-1 text-sm text-slate-600">
            View members, add new members, and display role and email details.
          </p>
        </div>

        <TeamMemberList members={teamMembers} />
      </section>
    </main>
  );
}